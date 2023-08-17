import React from 'react';
import {
  CodeOutlined,
} from '@ant-design/icons'

import { IPlugin } from './types';
import DataGenerator from './DataGenerator';
import CreateProfileCredential from './CreateProfileCredential';
import IssueCredential from './IssueCredential';
import CreatePresentation from './CreatePresentation';

const Plugin: IPlugin = {
    //@ts-ignore
    init: (agent) => {
        return {
          name: 'Developer tools',
          description: 'Collection of tools for experimenting with verifiable data',
          routes: [
            {
              path: '/developer/data-generator',
              element: <DataGenerator />,
            },
            {
              path: '/developer/issue-profile-credential',
              element: <CreateProfileCredential />,
            },
            {
              path: '/developer/issue-credential',
              element: <IssueCredential />,
            },
            {
              path: '/developer/create-presentation',
              element: <CreatePresentation />,
            },
          ],
          menuItems: [
            {
              name: 'Developer tools',
              path: '/developer',
              icon: <CodeOutlined />,
              routes: [
                {
                  path: '/developer/data-generator',
                  name: 'Data generator',
                },
                {
                  path: '/developer/issue-profile-credential',
                  name: 'Issue profile credential',
                },
                {
                  path: '/developer/issue-credential',
                  name: 'Issue credential',
                },
                {
                  path: '/developer/create-presentation',
                  name: 'Create presentation',
                },
              ],
            },
          ],
          
        }
    }
};

export default Plugin;