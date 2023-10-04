import React from 'react';
import { IIdentifierHoverComponentProps } from "@veramo-community/agent-explorer-plugin";
import { IDataStoreORM } from '@veramo/core-types';
import { useVeramo } from '@veramo-community/veramo-react';
import { useQuery } from 'react-query';
import { Spin, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

export const IdentifierHoverComponent: React.FC<IIdentifierHoverComponentProps> = ({did}) => {
  const { agent } = useVeramo<IDataStoreORM>()

  const { data: credentials, isLoading } = useQuery(
    ['domain-linkage', { agentId: agent?.context.name, did }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [
          { column: 'type', value: ['VerifiableCredential,BrainShareDomainLinkage'] },
          {column: 'subject', value: [did]}
        ],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )

  const domain = React.useMemo<string | undefined>(() => {
    return credentials?.[0]?.verifiableCredential?.credentialSubject?.domain
  }, [credentials, did])

  if (isLoading) {
    return (
      <Spin />
    )
  }

  if (!domain) {
    return null
  }

  return (
    <Typography.Text>
      <CheckCircleOutlined /> {domain}
    </Typography.Text>
  )
}


