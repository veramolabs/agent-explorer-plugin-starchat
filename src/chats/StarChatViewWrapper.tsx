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
import StarChatView from './StarChatView.js'
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

const StarChatViewWrapper = () => {  
  return (
    <StarChatProvider>
      <StarChatView />
    </StarChatProvider>
  )
}

export default StarChatViewWrapper
