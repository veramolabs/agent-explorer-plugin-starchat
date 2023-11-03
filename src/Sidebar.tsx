import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { IIdentifierHoverComponentProps, usePlugins, getIssuerDID } from "@veramo-community/agent-explorer-plugin";
import { Card, Divider, Space } from "antd";
import { BrainSharePost } from "./BrainSharePost";

export const Sidebar: React.FC<{credential: UniqueVerifiableCredential}> = ({ credential }) => {
  const { plugins } = usePlugins()

  const hoverComponents = React.useMemo(() => {
    const components: React.FC<IIdentifierHoverComponentProps>[] = []
    plugins.forEach((plugin) => {
      if (plugin.config?.enabled && plugin.getIdentifierHoverComponent) {
        const Component = plugin.getIdentifierHoverComponent()
        if (Component) {
          components.push(Component)
        }
      }
    })
    return components
  }, [plugins])

  return <Card>
    <Space direction="vertical" style={{width: "100%"}}>
      <BrainSharePost credential={credential} context={{hideTitle: true}}  /> 
      <Divider type="horizontal"/>
      {hoverComponents.map((Component, index) => (
        React.createElement(Component, { key: index, did: getIssuerDID(credential.verifiableCredential) })
      ))}
    </Space>
  </Card>       
}
