import { useParams } from 'react-router-dom'
import StarChatThread from './StarChatThread'
import StarChatScrollPanel from './StarChatScrollPanel'
import StarChatWindow from './StarChatWindow'
import StarChatHeader from './StarChatHeader'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
// import { useChat } from '../context/ChatProvider'
import { IDataStoreORM, IIdentifier, IMessage } from '@veramo/core'
import { useEffect, useState } from 'react'
import { Col, Row, theme } from 'antd'
import { ML_TEXT_GENERATION_PROMPT_MESSAGE_TYPE, ML_TEXT_GENERATION_RESPONSE_MESSAGE_TYPE } from 'ml-veramo-message-handler'
import { IIdentifierProfile } from '@veramo-community/agent-explorer-plugin'
import { StarChatProvider, useStarChat } from './StarChatProvider.js'
const { useToken } = theme

const groupBy = (arr: any[], property: string) => {
  return arr.reduce((acc, cur) => {
    acc[cur[property]] = [...(acc[cur[property]] || []), cur]
    return acc
  }, {})
}

interface IsSenderTaggedMessage extends IMessage {
  isSender: boolean
}

const StarChatView = () => {
  const { token } = useToken()
  const { agent } = useVeramo<IDataStoreORM>()
  const { selectedDid } = useStarChat()
  // const [selectedDid, setSelectedDid] = useState('')
  const { threadId } = useParams<{ threadId: string }>()
  const [managedIdentifiers, setManagedIdentifiers] = useState<
    IIdentifier[]
  >([])
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles,
  ] = useState<IIdentifierProfile[]>([])
  const [proofFormat, setProofFormat] = useState('jwt')

  const { data: threads, refetch } = useQuery(
    ['threads', { id: agent?.context.id, selectedDid, threadId }],
    async () => {
      const messages = await agent?.dataStoreORMGetMessages({
        where: [{ column: 'type', value: [ ML_TEXT_GENERATION_PROMPT_MESSAGE_TYPE , ML_TEXT_GENERATION_RESPONSE_MESSAGE_TYPE] }],
        order: [{ column: 'createdAt', direction: 'DESC' }],
      })
      // TODO: should be able to do this filter in the query instead of here
      const applicableMessages = (messages as IMessage[])?.filter(
        (message) => message.from === selectedDid || message.to === selectedDid,
      )
      const senderTagged: IsSenderTaggedMessage[] = applicableMessages?.map(
        (message: any) => {
          return {
            ...message,
            isSender: message.from === selectedDid,
          }
        },
      )

      if (senderTagged) {
        const grouped = groupBy(senderTagged, 'threadId')
        return grouped
      }
    },
    {
      refetchInterval: 5000,
    },
  )
  useEffect(() => {
    refetch()
  }, [selectedDid, refetch, threadId])

  return (
    <>
    <StarChatHeader />
    <div
      style={{
        height: 'calc(100vh - 160px)',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${token.colorBorder}`,
        borderRadius: token.borderRadius,
      }}
    >
      <Row style={{ flexGrow: 1 }}>
        <Col
          xs={{ span: threadId === undefined ? 24 : 0 }}
          sm={10}
          md={10}
          lg={10}
          xl={8}
          style={{
            height: 'calc(100vh - 161 px)',
            backgroundColor: token.colorFillContent,
          }}
        >
          <StarChatScrollPanel>
            {threads &&
              Object.keys(threads).map((index: any) => {
                return (
                  <StarChatThread
                    thread={threads[index]}
                    threadId={index}
                    key={index}
                    threadSelected={index === threadId}
                  />
                )
              })}
          </StarChatScrollPanel>
        </Col>
        <Col xs={24} sm={14} md={14} lg={14} xl={16}>
          <StarChatWindow />
        </Col>
      </Row>
    </div>
    </>
  )
}

export default StarChatView
