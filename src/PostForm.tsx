import { Input, Checkbox, Button, App, Dropdown, Avatar, Space, Tabs, theme } from 'antd'
import React, { useState, useEffect } from 'react'
const { TextArea } = Input
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IDataStoreORM, IIdentifier } from '@veramo/core'
import { useQuery } from 'react-query'
import IdentifierProfile from './components/IdentifierProfile.js'
import { IIdentifierProfile } from './types.js'
import { MarkDown } from './MarkDown.js'
import Editor from '@monaco-editor/react';

interface CreatePostProps {
  onOk: (hash: string) => void
  initialIssuer?: string
  initialTitle?: string
  initialText?: string
  initialIndexed?: boolean
}

export const PostForm: React.FC<CreatePostProps> = ({ onOk, initialIssuer, initialTitle, initialText, initialIndexed }) => {
  const token = theme.useToken()
  
  console.log("initialIndexed: ", initialIndexed)

  const [title, setTitle] = useState<string>(initialTitle || '')
  const [shouldBeIndexed, setShouldBeIndexed] = useState<boolean>(initialIndexed || false)
  const [post, setPost] = useState<string>(initialText || '')
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

      // console.log("agent: ", agent)
      const credential = await agent?.createVerifiableCredential({
        save: true,
        proofFormat: 'jwt',
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'BrainSharePost'],
          issuer: { id: selectedDid },
          issuanceDate: new Date().toISOString(),
          credentialSubject: {
            title,
            shouldBeIndexed,
            post
          },
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
                { column: 'type', value: ['VerifiableCredential','BrainSharePost'] },
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
            <>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title (optional)'/>
              <Checkbox defaultChecked={shouldBeIndexed} onChange={(e) => setShouldBeIndexed(e.target.checked)}>Index</Checkbox>
              <br />
              <Editor
                theme={token.theme.id === 4 ? 'vs-dark' : 'light'}
                height="50vh"
                options={{
                  lineNumbers: 'off',
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
            </>
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
  )
}
