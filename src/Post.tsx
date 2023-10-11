import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { App, Button, Drawer, Space, Spin, Typography } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, VerifiableCredential } from '@veramo/core'
import { IDIDComm } from '@veramo/did-comm'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { ReferencesFeed } from './ReferencesFeed.js'
import { useEffect } from 'react'
import { v4 } from 'uuid'
// import { createBrainShareRequestCredentialMessage } from "did-comm-brainshare"

export const Post = () => {
  const { notification } = App.useApp()
  const { id, did } = useParams<{ id: string, did: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM & IDIDManager & IDIDComm>()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const [credential, setCredential] = useState<VerifiableCredential | null>(null)
  const [credentialLoading, setCredentialLoading] = useState(true)

  if (!id) return null
  
  useEffect(() => {
    const getCredential = async () => {
      try {
        const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id })
        setCredential(localCred!)
        setCredentialLoading(false)
      } catch (ex) {
        console.log("credential not found locally")
      }
      if (!credential && did) {
        const senders = await agent?.didManagerFind({ provider: "did:peer"})
        if (senders && senders.length > 0) {
          const requestCredMessage = {
            type: 'https://veramo.io/didcomm/brainshare/1.0/request-credential',
            from: senders[0].did,
            to: did,
            id: v4(),
            body: {
              hash: id
            },
            return_route: 'all'
          }
          const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
          await agent?.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
          const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id })
          setCredential(localCred!)
          setCredentialLoading(false)
        }
      }
    }
    getCredential()
  }, [did, id])

  const { data: references, isLoading: referencesLoading } = useQuery(
    ['references', { id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
      where: [
        {
          column: 'type', value: ['references']
        },{
          column: 'value', value: [`%${id}%`], op: 'Like'
        }
      ]
    })
  }
  )

  if (!credential) return null
  return (
    <PageContainer 
      loading={credentialLoading}
      style={{paddingTop: 10}}
      >
        <Space direction='vertical'>

        {credential && <VerifiableCredentialComponent credential={{hash: id, verifiableCredential: credential}} />}

        {references && references.length > 0 && <>
          <Button type='text' onClick={() => setRefDrawerOpen(true)}>
            Referenced by {references.length} other posts
          </Button>
        </>}
        </Space>

        <Drawer 
          title="Posts that reference this one"
          placement="right"
          onClose={() => setRefDrawerOpen(false)}
          open={refDrawerOpen} 
          width={800}
          destroyOnClose={true}
        >
        <ReferencesFeed referenceHashes={references?.map((cred) => cred.hash)}/>
      </Drawer>
    </PageContainer>
  )
}
