import React, { useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer, ProList } from '@ant-design/pro-components'
import { IDataStoreORM, IIdentifier, UniqueVerifiableCredential } from '@veramo/core'
// import { IDIDComm } from '@veramo/core-types'
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import IdentifierProfile from './components/IdentifierProfile'
import { getIssuerDID } from './utils/did'
import CredentialActionsDropdown from './components/CredentialActionsDropdown'
import { App, Button, Drawer, Input } from 'antd'
import { PostForm } from './PostForm.js'
import { MarkDown } from './MarkDown'
import { v4 } from 'uuid'

export const FindIndex = () => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [did, setDID] = useState('')
  const [selectedDid, setSelectedDid] = useState('')
  const navigate = useNavigate()
  const { agent } = useVeramo()
  // const { data: credentials, isLoading, refetch } = useQuery(
  //   ['brainshare-posts', { agentId: agent?.context.name }],
  //   () =>
  //     agent?.dataStoreORMGetVerifiableCredentials({
  //       where: [{ column: 'type', value: ['VerifiableCredential,BrainSharePost'] }],
  //       order: [{ column: 'issuanceDate', direction: 'DESC' }],
  //     }),
  // )


  useQuery(
    ['identifiers', { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data: IIdentifier[]) => {
        if (data) {
          setSelectedDid(data[0].did);
        }
      },
    },
  )

  const handleNewPost = async (hash: string) => {
    notification.success({
      message: 'Post created'
    })
    setDrawerOpen(false)
    // await refetch()
    navigate('/brainshare/' + hash)
  }

  const getIndex = async () => {
    const message = {
      type: 'https://veramo.io/didcomm/brainshare/1.0/request-index',
      from: selectedDid,
      to: did,
      id: v4(),
      body: {}
    }
    const packedMessage = await agent?.packDIDCommMessage({
      packing: 'authcrypt',
      message
    })

    const res = await agent?.sendDIDCommMessage({
      messageId: message.id,
      packedMessage,
      recipientDidUrl: did
    })

    console.log("res: ", res)
    navigate(`/brainshare/home/${did}`)
  }


  return (
    <PageContainer
    extra={[
      <Button
        key={'add'}
        icon={<PlusOutlined />}
        type="primary"
        title="Compose new post"
        onClick={() => setDrawerOpen(true)}
      >Compose</Button>,
    ]}
    >
      <>
      <Input value={did} onChange={(e) => setDID(e.target.value)} placeholder="did:web:staging.community.veramo.io" />
      <Button onClick={() => getIndex()}>Find Index</Button>
      </>
    <>
      <Drawer 
        title="Compose new post"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <PostForm onOk={handleNewPost}/>
      </Drawer>
    </>
    </PageContainer>
  )
}
