import React, { useEffect, useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer, ProList } from '@ant-design/pro-components'
import { IDataStoreORM, IIdentifier, UniqueVerifiableCredential } from '@veramo/core'
// import { IDIDComm } from '@veramo/core-types'
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import { CredentialActionsDropdown, IdentifierProfile, IIdentifierProfile } from '@veramo-community/agent-explorer-plugin'
import { App, Avatar, Button, Drawer, Dropdown, Input } from 'antd'
import { PostForm } from './PostForm.js'
import { MarkDown } from './MarkDown'
import { v4 } from 'uuid'


export const LinkDomain = () => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [did, setDID] = useState('')
  const [domain, setDomain] = useState('')
  const [selectedDid, setSelectedDid] = useState('')
  const navigate = useNavigate()
  const { agent } = useVeramo()
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
          if (data.length > 0) {
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

  const checkLinkage = async () => {
    const message = {
      type: 'https://veramo.io/didcomm/brainshare/1.0/check-domain-linkage',
      from: selectedDid,
      to: did,
      id: v4(),
      body: {
        domain
      }
    }
    const packedMessage = await agent?.packDIDCommMessage({
      packing: 'authcrypt',
      message
    })

    const res = await agent?.sendDIDCommMessage({
      messageId: message.id,
      packedMessage,
      recipientDidUrl: did
    })

    console.log("res: ", res)
    // navigate(`/brainshare`)
  }


  return (
    <PageContainer>
      <>

        <Input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="www.google.com" />
        <Input value={did} onChange={(e) => setDID(e.target.value)} placeholder="did:web:staging.community.veramo.io" />

        {managedIdentifiersWithProfiles.length > 0 && (
        <Dropdown.Button
          // overlayStyle={{ height: '50px' }}
          type='primary'
          onClick={checkLinkage}
          disabled={domain===''}
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
      </>
    </PageContainer>
  )
}
