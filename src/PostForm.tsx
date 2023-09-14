import { Input, Button, App, Dropdown, Avatar, Space } from 'antd'
import React, { useState, useEffect } from 'react'
const { TextArea } = Input
import { useVeramo } from '@veramo-community/veramo-react'
import { ICredentialIssuer, IDIDManager, IDataStore, IIdentifier } from '@veramo/core'
import { useQuery } from 'react-query'
import IdentifierProfile from './components/IdentifierProfile.js'
import { IIdentifierProfile } from './types.js'

interface CreatePostProps {
  onOk: (hash: string) => void
}

export const PostForm: React.FC<CreatePostProps> = ({ onOk }) => {
  const [post, setPost] = useState<string>()
  const { agent } = useVeramo<ICredentialIssuer & IDataStore & IDIDManager>()
  const [selectedDid, setSelectedDid] = useState("")
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
          setSelectedDid(data[0].did);
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

      const credential = await agent?.createVerifiableCredential({
        save: true,
        proofFormat: 'jwt',
        credential: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential', 'BrainsharePost'],
          issuer: { id: selectedDid },
          issuanceDate: new Date().toISOString(),
          credentialSubject: {
            post
          },
        },
      })
      
      if (credential) {
        const hash = await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})      
        if (hash) {
          onOk(hash)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
        <TextArea
          placeholder={`Compose...`}
          value={post}
          rows={40}
          onChange={(e) => {
            setPost(e.target.value)
          }}
        />
        {managedIdentifiersWithProfiles.length > 0 && (
          <Dropdown.Button
            // overlayStyle={{ height: '50px' }}
            type='primary'
            onClick={handleCreatePost}
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
