import { Input, Checkbox, Space, Tabs, theme, Tag } from 'antd'
import React, { useState, useEffect } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, ProofFormat, TAgent } from '@veramo/core'
import { MarkDown, ActionButton } from '@veramo-community/agent-explorer-plugin'
import Editor from '@monaco-editor/react';
import { systemTitles } from './api'

interface CreatePostProps {
  onOk: (did:string, hash: string) => void
  initialIssuer?: string
  initialTitle?: string
  initialText?: string
  initialIsPublic?: boolean
}

export const PostForm: React.FC<CreatePostProps> = ({ onOk, initialIssuer, initialTitle, initialText, initialIsPublic }) => {
  const token = theme.useToken()

  const [title, setTitle] = useState<string>(initialTitle || '')
  const [isPublic, setIsPublic] = useState<boolean>(initialIsPublic || false)
  const [post, setPost] = useState<string>(initialText || window.localStorage.getItem('bs-post') || '')
  const { agent } = useVeramo<ICredentialIssuer & IDataStore & IDataStoreORM & IDIDManager>()
  const [isSaving, setIsSaving] = useState<boolean>(false)


  useEffect(() => {
    window.localStorage.setItem('bs-post', post)
  }, [post])


  const handleCreatePost = async (did: string, issuerAgent: TAgent<ICredentialIssuer>) => {
    setIsSaving(true)
    try {

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
          credentialSubject: {
            title,
            isPublic,
            post
          },
        },
      })
      
      if (credential) {
        const hash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
        
        // also send to appropriate DID via DIDComm if desired, but always store locally as well

        if (hash) {
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

        {!systemTitles.includes(title) && <Checkbox defaultChecked={isPublic} onChange={(e) => setIsPublic(e.target.checked)}>Public</Checkbox>}

      </Space>
    </Space>
  )
}
