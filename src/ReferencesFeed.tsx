import React from 'react'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDataStoreORM } from '@veramo/core'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { List } from 'antd'

interface ReferencesFeedProps {
  referenceHashes?: string[]
}

export const ReferencesFeed: React.FC<ReferencesFeedProps> = ({ referenceHashes }) => {
  const { agent } = useVeramo<IDataStoreORM>()

  const { data: credentials, isLoading } = useQuery(
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

  return (
    <List
      loading={isLoading}
      itemLayout="vertical"
      size="large"
      dataSource={credentials}
      renderItem={(item) => (
        <div style={{marginTop: '20px'}}>
        <VerifiableCredentialComponent credential={item} />
        </div>
      )}
    />
  )
}
