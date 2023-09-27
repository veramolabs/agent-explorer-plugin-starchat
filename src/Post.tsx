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
import { ReferencesFeed } from './ReferencesFeed.js'

const { Title } = Typography

export const Post = () => {
  const { notification } = App.useApp()
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM>()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);
  const navigate = useNavigate()

  if (!id) return null

  const { data: credential, isLoading: credentialLoading } = useQuery(
    ['credential', { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id }),
  )

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

  // console.log("references: ", references)
  
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
        <CredentialActionsDropdown key={'2'} credential={credential} onCreateRevision={() => setDrawerOpen(true)}>
          <EllipsisOutlined />
        </CredentialActionsDropdown>,
      ]}
    >
      {credential && <>
        {references && references.length > 0 && <>
          <Title level={5} onClick={() => setRefDrawerOpen(true)}>
            Referenced by {references.length} other posts
          </Title>
        </>}
        {credential.credentialSubject.title && <h2>{credential.credentialSubject.title}</h2>}
        <MarkDown content={credential.credentialSubject.post} />
      </>}
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
    </>
    </PageContainer>
  )
}
