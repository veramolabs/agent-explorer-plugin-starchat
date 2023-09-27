import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { MarkDown } from './MarkDown'
import { App, Button, Drawer, Space, Spin, Typography } from 'antd'
import { IDataStore, IDataStoreORM } from '@veramo/core'
import { formatRelative } from 'date-fns'
import { EllipsisOutlined } from '@ant-design/icons'
import { getIssuerDID, IdentifierProfile, CredentialActionsDropdown, VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'

import { PostForm } from './PostForm.js'

export const Edit = () => {
  const { notification } = App.useApp()
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM>()
  const [drawerOpen, setDrawerOpen] = useState(false);
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

  console.log("references: ", references)
  
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
      style={{paddingTop: 10}}
      >
        <PostForm onOk={handleNewPost} initialIssuer={(credential.issuer as any).id} initialTitle={credential.credentialSubject.title} initialText={credential.credentialSubject.post} initialIndexed={credential.credentialSubject.shouldBeIndexed}/>

    </PageContainer>
  )
}
