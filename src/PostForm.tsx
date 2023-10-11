import { Input, Checkbox, Dropdown, Avatar, Space, Tabs, theme, Select, Row } from 'antd'
import React, { useState, useEffect } from 'react'
const { TextArea } = Input
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, IIdentifier, ProofFormat } from '@veramo/core'
import { useQuery } from 'react-query'
import { IdentifierProfile, IIdentifierProfile, MarkDown } from '@veramo-community/agent-explorer-plugin'
import Editor from '@monaco-editor/react';
import { unified } from "unified";
import remarkParse from "remark-parse";
import wikiLinkPlugin from 'remark-wiki-link';

const { Option } = Select

interface CreatePostProps {
  onOk: (hash: string) => void
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
  const [selectedDid, setSelectedDid] = useState(initialIssuer || '')
  const [issuerProfile, setIssuerProfile] = useState<IIdentifierProfile>()
  const [managedIdentifiers, setManagedIdentifiers] = useState<
    IIdentifier[]
  >([])
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles,
  ] = useState<IIdentifierProfile[]>([])
  const [proofFormat, setProofFormat] = useState('jwt')


  useQuery(
    ['identifiers', { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data: IIdentifier[]) => {
        if (data) {
          setManagedIdentifiers(data)
          if (!initialIssuer) {
            setSelectedDid(data[0].did);
          }
        }
      },
    },
  )

  useEffect(() => {
    window.localStorage.setItem('bs-post', post)
  }, [post])

  useEffect(() => {
    if (agent) {
      Promise.all(
        managedIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did })
        }),
      )
        .then((profiles) => {
          setIssuerProfile(profiles[0])
          setManagedIdentifiersWithProfiles(profiles)
        })
        .catch(console.log)
    }
  }, [managedIdentifiers, agent])

  const handleCreatePost = async () => {
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

      const identifier = await agent?.didManagerGet({ did: selectedDid })
      console.log(identifier)

      const credential = await agent?.createVerifiableCredential({
        save: true,
        proofFormat: (proofFormat as ProofFormat),
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'BrainSharePost'],
          issuer: { id: selectedDid },
          issuanceDate: new Date().toISOString(),
          credentialSubject,
        },
      })
      
      if (credential) {
        const hash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
        
        // also send to appropriate DID via DIDComm if desired, but always store locally as well

        if (hash) {

          // if appropriate, create new index credential
          if (shouldBeIndexed) {
            const credentials = await agent?.dataStoreORMGetVerifiableCredentials({
              where: [
                { column: 'type', value: ['VerifiableCredential,BrainSharePost'] },
                { column: 'issuer', value: [selectedDid] },
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
              const indexCred = await agent?.createVerifiableCredential({
                save: true,
                proofFormat: 'jwt',
                credential: {
                  '@context': ['https://www.w3.org/2018/credentials/v1'],
                  type: ['VerifiableCredential', 'BrainShareIndex'],
                  issuer: { id: selectedDid },
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
          onOk(hash)
        }

      }
    } catch (e) {
      console.error(e)
    }
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
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title (optional)'/>

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
      <Checkbox defaultChecked={shouldBeIndexed} onChange={(e) => setShouldBeIndexed(e.target.checked)}>Index</Checkbox>

      <Select
        onChange={(e) => setProofFormat(e as string)}
        placeholder="Proof type"
        defaultActiveFirstOption={true}
      >
        <Option key="jwt" value="jwt">
          jwt
        </Option>
        <Option key="lds" value="lds">
          lds
        </Option>
        <Option
          key="EthereumEip712Signature2021lds"
          value="EthereumEip712Signature2021"
        >
          EthereumEip712Signature2021
        </Option>
      </Select>
      {managedIdentifiersWithProfiles.length > 0 && (
        <Dropdown.Button
          // overlayStyle={{ height: '50px' }}
          type='primary'
          onClick={handleCreatePost}
          disabled={post===''}
          icon={<Avatar size={'small'} src={issuerProfile?.picture} />}
          menu={{
            items: [
              ...managedIdentifiersWithProfiles.map((profile) => {
                return {
                  key: profile.did,
                  onClick: () => {
                    setIssuerProfile(profile)
                    setSelectedDid(profile.did)
                  },
                  label: <IdentifierProfile did={profile.did} />,
                }
              }),
            ],
            selectable: true,
            defaultSelectedKeys: [selectedDid],
          }}
        >
          Create Post as
        </Dropdown.Button>
      )}
    </Space>
      </Space>
  )
}
