import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons'

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { Feed } from './Feed'
import { Post } from './Post'
import { Home } from './Home.js';
import { LinkDomain } from './LinkDomain.js';
import { UniqueVerifiableCredential } from '@veramo/core';
import { BrainSharePost } from './BrainSharePost';
import { getCredentialContextMenuItems } from './menu';
import { Edit } from './Edit';
import { getMarkdownComponents } from './markdown';
import { IdentifierHoverComponent } from './IdentifierHoverComponent.js';
import { Landing } from './Landing';
import { Compose } from './Compose';
import remarkPlugin from './remark-plugin';

const Plugin: IPlugin = {
  //@ts-ignore
    init: () => {
        return {
          name: 'BrainShare',
          description: 'Decentralized wiki',
          requiredMethods: [],
          routes: [
            {
              path: '/brainshare/feed',
              element: <Feed />,
            },
            {
              path: '/brainshare/wiki/:did',
              element: <Home />,
            },
            {
              path: '/brainshare/wiki/:did/:hash',
              element: <Home />,
            },
            {
              path: '/brainshare/:id',
              element: <Post />,
            },
            {
              path: '/brainshare/:did/:id',
              element: <Post />,
            },
            {
              path: '/brainshare/link-domain',
              element: <LinkDomain />,
            },
            {
              path: '/brainshare/edit/:id',
              element: <Edit />,
            },
            {
              path: '/brainshare/compose/:title',
              element: <Compose />,
            },
            {
              path: '/brainshare/compose',
              element: <Compose />,
            },
          ],
          menuItems: [
            {
              name: "BrainShare",
              icon: <FileTextOutlined />,
              path: '/brainshare',
              routes:[
                {
                  name: 'Compose',
                  path: '/brainshare/compose',
                },
                {
                  name: 'Feed',
                  path: '/brainshare/feed',
                },
                {
                  name: 'Link Domain',
                  path: '/brainshare/link-domain'
                }
              ]
            }
          ],
          hasCss: false,
          getIdentifierHoverComponent: () => IdentifierHoverComponent,
          getCredentialComponent: (credential: UniqueVerifiableCredential) => {
            if (credential.verifiableCredential.type?.includes('BrainSharePost')) {
              return BrainSharePost
            }
            return undefined
          },
          getCredentialContextMenuItems,
          getMarkdownComponents,
          getRemarkPlugins: () => [remarkPlugin],
          getIdentifierTabsComponents: () => {
            return [
              {
                label: 'BrainShare',
                component: Landing,
              },
            ]
          },

        }
    }
};

export default Plugin;