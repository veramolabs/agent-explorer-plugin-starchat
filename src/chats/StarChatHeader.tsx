import React, { useEffect, useState } from 'react'
import { Row, Button, theme, Dropdown, Space, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons'
// import { useChat } from '../../context/ChatProvider'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDIDDiscovery } from '@veramo/did-discovery'
import { useQuery } from 'react-query'
import { FormOutlined, QrcodeOutlined } from '@ant-design/icons'
import { IIdentifier } from '@veramo/core'
import { 
  IdentifierProfile, 
  IIdentifierProfile, 
  IIdentifierProfilePlugin } from '@veramo-community/agent-explorer-plugin'
import NewStarChatThreadModal from './NewStarChatThreadModal'
import { useNavigate } from 'react-router-dom'
// import ChatInviteQRCodeModal from './ChatInviteQRCodeModal'
import { useStarChat } from './StarChatProvider.js'
const { useToken } = theme

const StarChatHeader: React.FC = () => {
  const { token } = useToken()
  const { agent } = useVeramo<IDIDDiscovery & IIdentifierProfilePlugin>()
  const { selectedDid, setSelectedDid, setComposing, setNewRecipient } =
    useStarChat()
  const navigate = useNavigate()
  const [agentChatIdentifiers, setAgentChatIdentifiers] = useState<
    IIdentifier[]
  >([])
  const [
    agentChatIdentifiersWithProfiles,
    setAgentChatIdentifiersWithProfiles,
  ] = useState<IIdentifierProfile[]>([])

  const [newThreadModalVisible, setNewThreadModalVisible] =
    useState<boolean>(false)

  const [inviteModalVisible, setInviteModalVisible] = useState<boolean>(false)

  const composeNewThread = () => {
    setComposing(true)
    setNewThreadModalVisible(true)
  }

  useQuery(
    ['identifiers', { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data: IIdentifier[]) => {
        if (data) {
          const didsWithDIDComm = data.filter((did) =>
            did.keys.some(
              (key) => key.type === 'X25519' || key.type === 'Ed25519',
            ),
          )
          setAgentChatIdentifiers(didsWithDIDComm)
          if (didsWithDIDComm[0]) {
            setSelectedDid(didsWithDIDComm[0].did)
          }
        }
      },
    },
  )

  useEffect(() => {
    if (agent) {
      Promise.all(
        agentChatIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did })
        }),
      )
        .then((profiles) => {
          setAgentChatIdentifiersWithProfiles(profiles)
        })
        .catch(console.log)
    }
  }, [agentChatIdentifiers, agent])

  return (
    <>
      <Row align={'middle'} justify={'space-between'} wrap={false}>
        {agentChatIdentifiersWithProfiles.length > 0 && (
          <Dropdown
            overlayStyle={{ height: '50px' }}
            menu={{
              items: [
                ...agentChatIdentifiersWithProfiles.map((profile) => {
                  return {
                    key: profile.did,
                    onClick: () => setSelectedDid(profile.did),
                    label: <IdentifierProfile did={profile.did} />,
                  }
                }),
              ],
              selectable: true,
              defaultSelectedKeys: [selectedDid],
            }}
          >
            <Button style={{ height: 'auto', border: 0 }} type={'text'}>
              <Space>
                {selectedDid && (
                  <IdentifierProfile did={selectedDid} showShortId={false} />
                )}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        )}
        <Col>
          <Button
            style={{ margin: token.margin }}
            onClick={() => setInviteModalVisible(true)}
            icon={<QrcodeOutlined style={{ fontSize: 20 }} />}
            type={'text'}
          />
          <Button
            style={{ margin: token.margin }}
            onClick={() => composeNewThread()}
            icon={<FormOutlined style={{ fontSize: 20 }} />}
            type={'text'}
          />
        </Col>
      </Row>

      <NewStarChatThreadModal
        visible={newThreadModalVisible}
        onCancel={() => {
          setNewThreadModalVisible(false)
          setComposing(false)
        }}
        onCreate={(did) => {
          setNewRecipient(did)
          setNewThreadModalVisible(false)
          navigate('/starchats/new-thread')
        }}
      />
    </>
  )
}

export default StarChatHeader
