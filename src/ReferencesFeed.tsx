import React from 'react'
import { UniqueVerifiableCredential } from '@veramo/core'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { List } from 'antd'

interface ReferencesFeedProps {
  credentials?: UniqueVerifiableCredential[]
}

export const ReferencesFeed: React.FC<ReferencesFeedProps> = ({ credentials }) => {
console.log(credentials)
  return (
    <List
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
