import React, { useEffect, useState } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { Button, Col, Row, Spin, theme } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, IResolver, UniqueVerifiableCredential, VerifiableCredential } from '@veramo/core'
import { getPostByTitle } from './didcommUtils.js'
import { IDIDComm } from '@veramo/did-comm'
import { BrainSharePost } from './BrainSharePost.js'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar.js'

export const Landing: React.FC<{ did: string }> = ({
  did,
}) => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const { agents, agent } = useVeramo<IDataStore & IDataStoreORM & IDIDComm & IDIDManager & IResolver>()
  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [post, setPost] = useState<UniqueVerifiableCredential | null>(null)
  const [loading, setLoading] = useState(true)

  const localAgent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === 'web3Agent')
  }, [agents])

  if (!agent) return null
  if (!localAgent) return null

  if (!did) return null
  if (!agent) return null

  useEffect(() => {
    setLoading(true)
    const load = async () => {
      const sideBarCredential = await getPostByTitle(agent, localAgent, did, 'bs-sidebar')
      setSidebar(sideBarCredential)
      const postCredential = await getPostByTitle(agent, localAgent, did, 'bs-home')
      setPost(postCredential)
      setLoading(false)
    }
    load()
  }, [did])

  if (loading) return (<Spin />)

  return (<Row>
    <Col xs={24} sm={16} style={{overflow: 'hidden', paddingRight: token.margin}}>
      {post && <BrainSharePost credential={post} context={{hideTitle: true} }/>}
      {!post && <Button type='primary' onClick={() => navigate('/brainshare/compose/bs-home')}>Compose</Button>}
    </Col>
    <Col xs={24} sm={8}>
        {sidebar ? <Sidebar credential={sidebar}  /> : <Button type='primary' onClick={() => navigate('/brainshare/compose/bs-sidebar')}>Compose</Button>}
    </Col>
  </Row>)
}
