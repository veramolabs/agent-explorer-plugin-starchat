import React from 'react';
import { Card, Typography } from 'antd';
import { IDataStoreORM } from '@veramo/core-types';
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export const Page = () => {
  const { agent } = useVeramo<IDataStoreORM>()
  const { id } = useParams<{ id: string }>()
  
  const { data: credentialsCount, isLoading: loading1 } = useQuery(
    ['credentialsCount', { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentialsCount(),
  )


  return (
    <Card>
      <Typography.Title>This is a title</Typography.Title>
      <Typography.Paragraph>This is a paragraph</Typography.Paragraph>
      <Typography.Paragraph>Credentials count: {credentialsCount}</Typography.Paragraph>
      <Typography.Paragraph>Id: {id}</Typography.Paragraph>
    </Card>
  );
}