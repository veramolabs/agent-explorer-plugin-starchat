import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { MarkDown } from './MarkDown'
import { Spin, Typography } from 'antd'
import { IDataStore } from '@veramo/core'
import { formatRelative } from 'date-fns'
import CredentialActionsDropdown from './components/CredentialActionsDropdown'
import { EllipsisOutlined } from '@ant-design/icons'
import IdentifierProfile from './components/IdentifierProfile'
import { getIssuerDID } from './utils/did'

export const Post = () => {
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo<IDataStore>()

  if (!id) return null

  const { data: credential, isLoading: credentialLoading } = useQuery(
    ['credential', { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id }),
  )

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
        <CredentialActionsDropdown key={'2'} credential={credential}>
          <EllipsisOutlined />
        </CredentialActionsDropdown>,
      ]}
    >
      {credential && <>
        {credential.credentialSubject.title && <h2>{credential.credentialSubject.title}</h2>}
        <MarkDown content={credential.credentialSubject.post} />
      </>}
    </PageContainer>
  )
}
