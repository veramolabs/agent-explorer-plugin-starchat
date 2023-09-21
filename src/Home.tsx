import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { MarkDown } from './MarkDown'
import { App, Drawer, Spin, Typography } from 'antd'
import { IDataStore, IDataStoreORM, IIdentifier } from '@veramo/core'
import { formatRelative } from 'date-fns'
import CredentialActionsDropdown from './components/CredentialActionsDropdown'
import { EllipsisOutlined } from '@ant-design/icons'
import IdentifierProfile from './components/IdentifierProfile'
import { getIssuerDID } from './utils/did'
import { IIdentifierProfile } from './types.js'
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
      where: [{ column: 'type', value: ['VerifiableCredential,BrainShareIndex']}, { column: 'issuer', value: [did]}]
     }),
  )

  const credential = credentials && credentials.length > 0 && credentials[0].verifiableCredential
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
        did={getIssuerDID(credential)}
      />}
      extra={[
        <Typography.Text key={'1'}>
          {credential && formatRelative(
            new Date(credential.issuanceDate),
            new Date(),
          )}
        </Typography.Text>,
      ]}
    >
      {credential && <>
        {JSON.stringify(credential)}
        </>
      }
      <>
      <Drawer 
        title="Compose new post"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <PostForm onOk={handleNewPost} initialIssuer={(credential.issuer as any).id} initialTitle={credential.credentialSubject.title} initialText={credential.credentialSubject.post} initialIndexed={credential.credentialSubject.shouldBeIndexed}/>
      </Drawer>
    </>
    </PageContainer>
  )
}
