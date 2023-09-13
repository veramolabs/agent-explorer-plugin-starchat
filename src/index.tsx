import React from 'react';
import {
  CodeOutlined,
} from '@ant-design/icons'

import { IPlugin } from './types';
// import DataGenerator from './DataGenerator';
// import CreateProfileCredential from './CreateProfileCredential';
import IssueCredential from './IssueCredential';
import BrainshareFeed from './BrainshareFeed'
// import CreatePresentation from './CreatePresentation';

const Plugin: IPlugin = {
    //@ts-ignore
    init: (agent) => {
        return {
          name: 'BrainShare',
          description: 'Extremely Cool Something',
          routes: [
            {
              path: '/brainshare/feed',
              element: <BrainshareFeed />,
            },
            // {
            //   path: '/brainshare/issue-profile-credential',
            //   element: <CreateProfileCredential />,
            // },
            // {
            //   path: '/developer/issue-credential',
            //   element: <IssueCredential />,
            // },
          ],
          menuItems: [
            {
              name: 'Feed',
              path: '/brainshare',
              icon: <CodeOutlined />,
              routes: [
                {
                  path: '/brainshare/feed',
                  name: 'Feed',
                },
                // {
                //   path: '/developer/issue-profile-credential',
                //   name: 'Issue profile credential',
                // },
                // {
                //   path: '/developer/issue-credential',
                //   name: 'Issue credential',
                // },
              ],
            },
          ],
          
        }
    }
};

export default Plugin;