import React from 'react';
import { MenuDataItem } from '@ant-design/pro-components';
import { JSONSchema7 } from 'json-schema'

export type RouteElement = {
  path: string;
  element: React.JSX.Element;
}

export type AgentPlugin = {
  name: string;
  description: string;
  routes: RouteElement[];
  menuItems: MenuDataItem[];
  hasCss?: boolean;
}

export interface IPlugin {
  init: () => AgentPlugin;
}

export interface VCJSONSchema {
  id: string
  name: string
  schema: JSONSchema7
}
