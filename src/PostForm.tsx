import { Input, Checkbox, Dropdown, Avatar, Space, Tabs, theme, Select, Tag } from 'antd'
import React, { useState, useEffect } from 'react'
const { TextArea } = Input
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, IIdentifier, ProofFormat, TAgent } from '@veramo/core'
import { useQuery } from 'react-query'
import { IdentifierProfile, IIdentifierProfile, MarkDown, ActionButton } from '@veramo-community/agent-explorer-plugin'
import Editor from '@monaco-editor/react';
import { unified } from "unified";
import remarkParse from "remark-parse";
import wikiLinkPlugin from 'remark-wiki-link';
import { systemTitles } from './api'

const { Option } = Select

interface CreatePostProps {
  onOk: (did:string, hash: string) => void
  initialIssuer?: string
  initialTitle?: string
  initialText?: string
  initialIndexed?: boolean
}

export const PostForm: React.FC<CreatePostProps> = ({ onOk, initialIssuer, initialTitle, initialText, initialIndexed }) => {
  const token = theme.useToken()

  const [title, setTitle] = useState<string>(initialTitle || '')
  const [shouldBeIndexed, setShouldBeIndexed] = useState<boolean>(initialIndexed || false)
  const [post, setPost] = useState<string>(initialText || window.localStorage.getItem('bs-post') || '')
  const { agent } = useVeramo<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager>()
  const [isSaving, setIsSaving] = useState<boolean>(false)


  useEffect(() => {
    window.localStorage.setItem('bs-post', post)
  }, [post])


  const handleCreatePost = async (did: string, issuerAgent: TAgent<ICredentialIssuer>) => {
    setIsSaving(true)
    try {

      // find all credentials referenced by this one
      const parser = unified().use(remarkParse).use(wikiLinkPlugin, {aliasDivider: '|'})
      const root = parser.parse(post);

      const references = root.children.filter((token) => {
        return token.type === 'code' && token.lang === 'vc+multihash'
      }).map((token) => {
        return (token as any).value as string
      })

      function visitWikiLinks(node: any) {
        if (node.type === 'wikiLink') {
          const didHash = node.value.split('|')[0]
            if (!references.includes(didHash)) {
              references.push(didHash)
            }
        }
        if (node.children) {
          for (const child of node.children) {
            visitWikiLinks(child);
          }
        }
      }

      visitWikiLinks(root);

      const credentialSubject = (references && references.length > 0) ? 
      {
        title,
        shouldBeIndexed,
        post,
        references
      }
      : {
        title,
        shouldBeIndexed,
        post
      }

      const identifier = await issuerAgent?.didManagerGet({ did })
      const usableProofs = await issuerAgent.listUsableProofFormats(identifier)
      const proofFormat = usableProofs.includes('jwt') ? 'jwt' : usableProofs[0]

      const credential = await issuerAgent.createVerifiableCredential({
        save: true,
        proofFormat: (proofFormat as ProofFormat),
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'BrainSharePost'],
          issuer: { id: did },
          issuanceDate: new Date().toISOString(),
          credentialSubject,
        },
      })
      
      if (credential) {
        const hash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
        
        // also send to appropriate DID via DIDComm if desired, but always store locally as well

        if (hash) {

          // if appropriate, create new index credential
          if (shouldBeIndexed && proofFormat === 'jwt') {
            const credentials = await agent?.dataStoreORMGetVerifiableCredentials({
              where: [
                { column: 'type', value: ['VerifiableCredential,BrainSharePost'] },
                { column: 'issuer', value: [did] },
              ],
            })

            const indexableCreds = credentials?.filter((cred) => cred.verifiableCredential.credentialSubject.shouldBeIndexed)

            if (indexableCreds) {
              const index = new Map()
              indexableCreds.forEach((cred) => {
                let revisions = index.get(cred.verifiableCredential.credentialSubject.title)
                if (!revisions) {
                  revisions = []
                }
                revisions = [...revisions, cred.hash]
                index.set(cred.verifiableCredential.credentialSubject.title, revisions)
              }) 
              const indexCred = await issuerAgent.createVerifiableCredential({
                save: true,
                proofFormat: proofFormat,
                credential: {
                  '@context': ['https://www.w3.org/2018/credentials/v1'],
                  type: ['VerifiableCredential', 'BrainShareIndex'],
                  issuer: { id: did },
                  issuanceDate: new Date().toISOString(),
                  credentialSubject: {
                    index: Object.fromEntries(index.entries())
                  },
                },
              })
              if (indexCred) {
                await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: indexCred})
              }
            }
          }
          // callback
          window.localStorage.removeItem('bs-post')
          onOk(did, hash)
        }

      }
    } catch (e) {
      console.error(e)
    }
    setIsSaving(false)
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
    <Tabs
      items={[
        {
          key: '1',
          label: 'Write',
          children: (
            <Space direction='vertical' style={{width: '100%'}}>
              {systemTitles.includes(title) && <div><Input value={title} type='hidden'/><Tag>{title === 'bs-sidebar' && 'Sidebar'}{title === 'bs-home' && 'Home'}</Tag></div>}
              {!systemTitles.includes(title) && <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title (optional)'/>}
              <Editor
                theme={token.theme.id === 4 ? 'vs-dark' : 'light'}
                height="50vh"
                options={{
                  lineNumbers: 'off',
                  wordWrap: 'on',
                  fontSize: 14,
                  minimap: { enabled: false },
                }}
                defaultLanguage="markdown"
                defaultValue={post}
                value={post}
                onChange={(e) => {
                  setPost(e || '')
                }}
              />
            </Space>
          )
        },
        {
          key: '2',
          label: 'Preview',
          children: (
          <>
            <h2>{title}</h2>
            <MarkDown content={post}/>
          </>)
        },
        ]}
    />
    <Space direction='horizontal'>

      <ActionButton 
        title='Save to:' 
        disabled={post==='' || isSaving} 
        onAction={handleCreatePost}
        />

      {!systemTitles.includes(title) && <Checkbox defaultChecked={shouldBeIndexed} onChange={(e) => setShouldBeIndexed(e.target.checked)}>Index</Checkbox>}

    </Space>
      </Space>
  )
}
