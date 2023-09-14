import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'

export const Post = () => {
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo()

  const { data: credential, isLoading: credentialLoading } = useQuery(
    ['credential', { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id }),
  )

  return (
    <PageContainer title="Post">
      <pre>
        <code>{JSON.stringify(credential, null, 2)}</code>
      </pre>
    </PageContainer>
  )
}
