import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons'
import './style.css'

import { IPlugin } from './types';
import { Feed } from './Feed'
import { Post } from './Post'

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'BrainShare',
          description: 'Decentralized wiki',
          routes: [
            {
              path: '/brainshare',
              element: <Feed />,
            },
            {
              path: '/brainshare/:id',
              element: <Post />,
            },
          ],
          menuItems: [
            {
              name: 'BrainShare',
              path: '/brainshare',
              icon: <FileTextOutlined />,
            },
          ],
          hasCss: true,
        }
    }
};

export default Plugin;