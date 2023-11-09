import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useChat } from '../../context/ChatProvider'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import StarChatThreadProfileHeader from './StarChatThreadProfileHeader'
import { useStarChat } from './StarChatProvider.js'

interface StarChatThreadProps {
  thread: any
  threadId: string
  threadSelected: boolean
}

const StarChatThread: React.FC<StarChatThreadProps> = ({
  thread,
  threadId,
  threadSelected,
}) => {
  const { agent } = useVeramo()
  const { selectedDid, setComposing } = useStarChat()
  const navigate = useNavigate()
  const lastMessage = thread[thread.length - 1]
  const viewThread = () => {
    setComposing(false)
    navigate(`/starchats/${threadId}`)
  }

  const counterPartyDid =
    lastMessage.from === selectedDid ? lastMessage.to : lastMessage.from

  const { data: profile } = useQuery(
    ['profile', counterPartyDid, agent?.context.id],
    () =>
      counterPartyDid
        ? agent?.getIdentifierProfile({ did: counterPartyDid })
        : undefined,
  )

  return (
    <StarChatThreadProfileHeader
      did={counterPartyDid}
      profile={profile}
      onRowClick={viewThread}
      selected={threadSelected}
      lastMessage={lastMessage}
    />
  )
}

export default StarChatThread
