import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageContainer } from '@ant-design/pro-components'
import { App } from 'antd'

import { PostForm } from './PostForm.js'

export const Compose = () => {
  const { notification } = App.useApp()
  const { title } = useParams<{ title: string }>()

  const navigate = useNavigate()

  const handleNewPost = async (hash: string) => {
    notification.success({
      message: 'Post created'
    })
    navigate('/brainshare/' + hash)
  }

  return (
    <PageContainer 
      title={false}
      style={{paddingTop: 10}}
      >
      <PostForm onOk={handleNewPost} initialTitle={title} initialIndexed={true} />
    </PageContainer>
  )
}
