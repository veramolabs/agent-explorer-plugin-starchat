import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons'

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { Feed } from './Feed'
import { Post } from './Post'
import { FindIndex } from './FindIndex.js';
import { Home } from './Home.js';
import { LinkDomain } from './LinkDomain.js';
import { UniqueVerifiableCredential } from '@veramo/core';
import { BrainSharePost } from './BrainSharePost';
import { getCredentialContextMenuItems } from './menu';
import { Edit } from './Edit';
import { getMarkdownComponents } from './markdown';
import { IdentifierHoverComponent } from './IdentifierHoverComponent.js';
import { BrainShareIndex } from './BrainShareIndex';
import { wikilinks } from './wikilinks';
import wikilink from 'remark-wiki-link'

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
          ],
          menuItems: [
            {
              name: "BrainShare",
              icon: <FileTextOutlined />,
              path: '/brainshare',
              routes:[
                {
                  name: 'Feed',
                  path: '/brainshare/feed',
                },
                {
                  name: 'Index',
                  path: '/brainshare/find-index',
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
            if (credential.verifiableCredential.type?.includes('BrainShareIndex')) {
              return BrainShareIndex
            }
            return undefined
          },
          getCredentialContextMenuItems,
          getMarkdownComponents,
          getRemarkPlugins: () => [[wikilink, {
            aliasDivider: '|',
            hrefTemplate: (permalink: string) => `${permalink}`,
            pageResolver: (name: string) => [`/brainshare/${name}`] 
          }]],
          // getMarkdownPlugins: () => [wikilinks]
        }
    }
};

export default Plugin;