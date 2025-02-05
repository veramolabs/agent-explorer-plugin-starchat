import React from 'react'
import { Row, Typography, Avatar, Col, theme } from 'antd'
import { shortId } from '@veramo-community/agent-explorer-plugin'
import { IMessage } from '@veramo/core'
import { IIdentifierProfile } from '@veramo-community/agent-explorer-plugin'
import { useStarChat } from './StarChatProvider.js'
const { useToken } = theme
const { Text } = Typography

interface StarChatThreadProfileHeaderProps {
  did: string
  profile?: IIdentifierProfile
  onRowClick?: any
  selected?: boolean
  lastMessage?: IMessage
}

const StarChatThreadProfileHeader: React.FC<StarChatThreadProfileHeaderProps> = ({
  did,
  profile,
  onRowClick,
  selected,
  lastMessage,
}) => {
  const { token } = useToken()
  const { selectedDid } = useStarChat()

  return (
    <Row
      onClick={onRowClick}
      style={{
        cursor: 'pointer',
        padding: 20,
        backgroundColor: selected ? token.colorPrimaryBg : 'transparent',
        alignItems: 'center',
        borderRadius: token.borderRadius,
      }}
    >
      <Col>
        <Avatar src={profile?.picture} size={50} style={{ marginRight: 15 }} />
      </Col>
      <Col style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {profile ? (
          <Col>
            <Row>
              <Text style={{ marginBottom: 0 }} strong>
                {profile.name}
              </Text>
            </Row>
          </Col>
        ) : (
          <div>
            <Text style={{ marginBottom: 0 }} strong>
              {shortId(did)}
            </Text>
          </div>
        )}
        {lastMessage && lastMessage.type === 'veramo.io-chat-v1' && (
          <Text style={{ color: token.colorTextSecondary }}>
            {lastMessage.from === selectedDid && 'You: '}
            {String((lastMessage.data as any).message).substring(0, 10)}
          </Text>
        )}
      </Col>
    </Row>
  )
}

export default StarChatThreadProfileHeader
