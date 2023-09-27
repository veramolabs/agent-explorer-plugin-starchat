import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons'
import './style.css'

import { IPlugin } from './types';
import { Feed } from './Feed'
import { Post } from './Post'
import { FindIndex } from './FindIndex.js';
import { Home } from './Home.js';
import { LinkDomain } from './LinkDomain.js';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'BrainShare',
          description: 'Decentralized wiki',
          routes: [
            {
              path: '/brainshare/feed',
              element: <Feed />,
            },
            {
              path: '/brainshare/find-index',
              element: <FindIndex />,
            },
            {
              path: '/brainshare/home/:did',
              element: <Home />,
            },
            {
              path: '/brainshare/:id',
              element: <Post />,
            },
            {
              path: '/brainshare/link-domain',
              element: <LinkDomain />,
            },
          ],
          menuItems: [
            {
              name: "BrainShare",
              icon: <FileTextOutlined />,
              path: '/brainshare',
              routes:[
                {
                  name: 'BrainShare',
                  path: '/brainshare/feed',
                },
                {
                  name: 'BS Index',
                  path: '/brainshare/find-index',
                },
                {
                  name: 'Link Domain',
                  path: '/brainshare/link-domain'
                }
              ]
            }
          ],
          hasCss: true,
        }
    }
};

export default Plugin;