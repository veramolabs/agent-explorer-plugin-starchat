import React, { useEffect, useState } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { Button, Col, Collapse, Row, Spin, theme } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, IResolver, UniqueVerifiableCredential, VerifiableCredential } from '@veramo/core'
import { getIndex, getPost } from './didcommUtils.js'
import { IDIDComm } from '@veramo/did-comm'
import { BrainSharePost } from './BrainSharePost.js'
import { Link, useNavigate } from 'react-router-dom'

export const Landing: React.FC<{ did: string }> = ({
  did,
}) => {
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const { agents } = useVeramo<IDataStore & IDataStoreORM & IDIDComm & IDIDManager & IResolver>()
  const [index, setIndex] = useState<VerifiableCredential | null>(null)
  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [post, setPost] = useState<UniqueVerifiableCredential | null>(null)
  const [loading, setLoading] = useState(true)

  const agent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === "web3Agent")
  }, [agents])

  if (!did) return null
  if (!agent) return null

  useEffect(() => {
    const loadIndex = async () => {
      const index = await getIndex(agent, did)
      if (index) {

        setIndex(index)
        console.log("index: ", index)
        
        const indexMap = index.credentialSubject.index
        if (indexMap['bs-sidebar']) {
          const sidebarHash = indexMap['bs-sidebar'][indexMap['bs-sidebar'].length - 1]
          console.log("sidebarHash: ", sidebarHash)
          
          const sidebar = await getPost(agent, did, sidebarHash)
          console.log("sidebar: ", sidebar)
          
          setSidebar({ hash: sidebarHash, verifiableCredential: sidebar })
        }
        if (indexMap['bs-home']) {
          const homeHash = indexMap['bs-home'][indexMap['bs-home'].length - 1]
          console.log("home hash: ", homeHash)
          setPost({ hash: homeHash, verifiableCredential: await getPost(agent, did, homeHash)})
        }
      }
      setLoading(false)

    }
    loadIndex()
  }, [did])

  if (loading) return (<Spin />)

  return (<Row>
    <Col xs={24} sm={16} style={{overflow: 'hidden', paddingRight: token.margin}}>
      {post && <BrainSharePost credential={post} context={{hideTitle: true} }/>}
      {!post && <Button type='primary' onClick={() => navigate('/brainshare/compose/bs-home')}>Compose</Button>}
    </Col>
    <Col xs={24} sm={8}>
      
      <Collapse 
        accordion 
        size='small' 
        defaultActiveKey={['0']}
        items={[
          {
            key: '0',
            label: `Sidebar`,
            children: sidebar ? <BrainSharePost credential={sidebar} context={{hideTitle: true}}  /> : <Button type='primary' onClick={() => navigate('/brainshare/compose/bs-sidebar')}>Compose</Button>,
          },
          {
            key: '1',
            label: index ? `Index (${Object.keys(index.credentialSubject.index).length})` : 'Index',
            children: index && <ul>
            {Object.keys(index.credentialSubject.index).map((item, key: number) => {
              return <li key={key}>
                <a href={`/brainshare/${did}/${index.credentialSubject.index[item][0]}`}>{item}</a>
              </li>
            })}
            </ul>,
          }
        ]}>
        </Collapse>

       
    </Col>
  </Row>)
}
