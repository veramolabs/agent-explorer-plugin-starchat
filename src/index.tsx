import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons'

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import StarChatView from './chats/StarChatView.js';
import StarChatViewWrapper from './chats/StarChatViewWrapper.js';
import { SaveMessageHandler } from './chats/saveMessageHandler.js';

const Plugin: IPlugin = {
  //@ts-ignore
    init: () => {
        return {
          name: 'StarChat',
          description: 'Ask LLM',
          icon: <FileTextOutlined />,
          messageHandlers: [new SaveMessageHandler()],
          requiredMethods: [],
          routes: [
            {
              path: '/starchat',
              element: <StarChatViewWrapper />,
            },
            {
              path: '/starchats/:threadId',
              element: <StarChatViewWrapper />,
            },
          ],
          menuItems: [
            {
              name: "StarChat",
              icon: <FileTextOutlined />,
              path: '/starchat',

            }
          ],
          hasCss: false,
        }
    }
};

export default Plugin;