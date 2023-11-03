import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { App, Button, Drawer, Space } from 'antd'
import { IDataStore, IDataStoreORM } from '@veramo/core'

import { PostForm } from './PostForm.js'
import { ReferencesFeed } from './ReferencesFeed.js'

export const Edit = () => {
  const { notification } = App.useApp()
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM>()
  const navigate = useNavigate()
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);

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
          column: 'type', value: ['post']
        },{
          column: 'value', value: [`%${id}%`], op: 'Like'
        }
      ]
    })
  }
  )
  
  const handleNewPost = async (did: string, hash: string) => {
    notification.success({
      message: 'Post created'
    })
    // await refetch()
    navigate(`/brainshare/${did}/${hash}`)
  }

  if (!credential) return null
  return (
    <PageContainer 
      loading={credentialLoading}
      style={{paddingTop: 10}}
      >
      <Space direction='vertical' style={{width: '100%'}}>
        <PostForm 
          onOk={handleNewPost} 
          initialIssuer={(credential.issuer as any).id} 
          initialTitle={credential.credentialSubject.title} 
          initialText={credential.credentialSubject.post} 
          initialIsPublic={credential.credentialSubject.isPublic}
        />
        
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
        <ReferencesFeed credentials={references}/>
      </Drawer>
    </PageContainer>
  )
}
