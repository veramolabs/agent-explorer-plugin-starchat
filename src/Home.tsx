import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { App, Drawer, Typography } from 'antd'
import { IDataStore, IDataStoreORM } from '@veramo/core'
import { formatRelative } from 'date-fns'
import { getIssuerDID, IdentifierProfile, VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { PostForm } from './PostForm.js'

export const Home = () => {
  const { notification } = App.useApp()
  const { did } = useParams<{ did: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM>()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()

  if (!did) return null

  const { data: credentials, isLoading: credentialLoading } = useQuery(
    ['credentials', { did }],
    () => agent?.dataStoreORMGetVerifiableCredentials({ 
      where: [
        { column: 'type', value: ['VerifiableCredential,BrainShareIndex']},
        { column: 'issuer', value: [did] }
      ],
      order: [{ column: 'issuanceDate', direction: 'DESC' }],
      take: 1,
     }),
  )

  const credential = credentials && credentials.length > 0 && credentials[0]
  console.log("credential: ", credential)
  
  const handleNewPost = async (hash: string) => {
    notification.success({
      message: 'Post created'
    })
    // await refetch()
    navigate('/brainshare/' + hash)
  }

  if (!credential) return null
  return (
    <PageContainer 
      loading={credentialLoading}
      title={<IdentifierProfile
        did={getIssuerDID(credential.verifiableCredential)}
      />}
      extra={[
        <Typography.Text key={'1'}>
          {credential && formatRelative(
            new Date(credential.verifiableCredential.issuanceDate),
            new Date(),
          )}
        </Typography.Text>,
      ]}
    >
      {credential && <VerifiableCredentialComponent credential={credential} />}
      <>
      <Drawer 
        title="Compose new post"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <PostForm 
          onOk={handleNewPost}
          initialIssuer={(credential.verifiableCredential.issuer as any).id}
          initialTitle={credential.verifiableCredential.credentialSubject.title}
          initialText={credential.verifiableCredential.credentialSubject.post}
          initialIndexed={credential.verifiableCredential.credentialSubject.shouldBeIndexed}
          />
      </Drawer>
    </>
    </PageContainer>
  )
}
