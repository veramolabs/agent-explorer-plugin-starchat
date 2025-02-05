import { IAgentContext, IDataStore } from '@veramo/core-types'
import { AbstractMessageHandler, Message } from '@veramo/message-handler'
import { ML_TEXT_GENERATION_RESPONSE_MESSAGE_TYPE } from 'ml-veramo-message-handler'
// import Debug from 'debug'
// const debug = Debug('veramo:did-comm:message-handler')

type IContext = IAgentContext<IDataStore>

/**
 * A plugin for the {@link @veramo/message-handler#MessageHandler} that decrypts DIDComm messages.
 * @beta This API may change without a BREAKING CHANGE notice.
 */
export class SaveMessageHandler extends AbstractMessageHandler {
  /**
   * Handles a new packed DIDCommV2 Message (also Alpha support but soon deprecated).
   * - Tests whether raw message is a DIDCommV2 message
   * - Unpacks raw message (JWM/JWE/JWS, or plain JSON).
   * -
   */
  async handle(message: Message, context: IContext): Promise<Message> {
    if (message.type === ML_TEXT_GENERATION_RESPONSE_MESSAGE_TYPE) {
      console.log('message received: ', message)
      await context.agent.dataStoreSaveMessage({ message })
    }
    return super.handle(message, context)
  }
}
