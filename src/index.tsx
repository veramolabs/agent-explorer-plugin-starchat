import React from 'react';
import {
  AppstoreAddOutlined,
} from '@ant-design/icons'

import { IPlugin } from './types';
import { Page } from './Page.js';


const Plugin: IPlugin = {
    //@ts-ignore
    init: (agent) => {
        return {
          name: 'Example plugin',
          description: 'Example plugin description',
          routes: [
            {
              path: '/example/:id',
              element: <Page />,
            },
            {
              path: '/example',
              element: <Page />,
            },
          ],
          menuItems: [
            {
              name: 'Example',
              path: '/example',
              icon: <AppstoreAddOutlined />,
              routes: [
                {
                  name: 'Foo',
                  path: '/example/abc',
                },
                {
                  name: 'Bar',
                  path: '/example/1234',
                },
              ]
            },
          ],
          
        }
    }
};

export default Plugin;