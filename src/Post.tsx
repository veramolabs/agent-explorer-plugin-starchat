import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { App, Button, Drawer, Space, Spin, Typography } from 'antd'
import { IDataStore, IDataStoreORM } from '@veramo/core'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { ReferencesFeed } from './ReferencesFeed.js'

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
