import React, { useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer, ProList } from '@ant-design/pro-components'
import { IDataStoreORM, UniqueVerifiableCredential } from '@veramo/core'
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import { IdentifierProfile, getIssuerDID, CredentialActionsDropdown } from '@veramo-community/agent-explorer-plugin'
import { App, Button, Drawer } from 'antd'
import { PostForm } from './PostForm.js'
import { MarkDown } from './MarkDown'

interface ReferencesFeedProps {
  referenceHashes?: string[]
}

export const ReferencesFeed: React.FC<ReferencesFeedProps> = ({ referenceHashes }) => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const { agent } = useVeramo<IDataStoreORM>()

  console.log("referenceHashes: ", referenceHashes)

  const { data: credentials, isLoading, refetch } = useQuery(
    ['brainshare-posts', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [
          { column: 'type', value: ['VerifiableCredential,BrainSharePost'] },
          { column: 'hash', value: referenceHashes, op: "In"}
        ],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )

  console.log("credentials: ", credentials)

  return (
    <ProList
      ghost
      loading={isLoading}
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
      }}
      grid={{ column: 1, lg: 1, xxl: 1, xl: 1 }}
      onItem={(record: any) => {
        return {
          onClick: () => {
            navigate('/brainshare/' + record.hash)
          },
        }
      }}
      metas={{
        title: {},
        content: {},
        actions: {
          cardActionProps: 'extra',
        },
      }}
      dataSource={credentials?.map((item: UniqueVerifiableCredential) => {
        return {
          title: (
            <IdentifierProfile
              did={getIssuerDID(item.verifiableCredential)}
            />
          ),
          actions: [
            <div>
              {formatRelative(
                new Date(item.verifiableCredential.issuanceDate),
                new Date(),
              )}
            </div>,
            <CredentialActionsDropdown credential={item.verifiableCredential}>
              <EllipsisOutlined />
            </CredentialActionsDropdown>,
          ],
          content: (
            <>
              {item.verifiableCredential.credentialSubject.title && <h2>{item.verifiableCredential.credentialSubject.title}</h2>}
              {!item.verifiableCredential.credentialSubject.title && <MarkDown content={item.verifiableCredential.credentialSubject.post}/>}
            </>
          ),
          hash: item.hash,
        }
      })}
    />
  )
}
