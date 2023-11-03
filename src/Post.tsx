import React, { PropsWithChildren, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Col, Drawer, Row, Spin, theme } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, IResolver, UniqueVerifiableCredential } from '@veramo/core'
import { IDIDComm } from '@veramo/did-comm'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { ReferencesFeed } from './ReferencesFeed.js'
import { useEffect } from 'react'
import { getPost, getPostByTitle } from './didcommUtils.js'
import { Sidebar } from './Sidebar.js'

export const Post = () => {
  const { id, did } = useParams<{ id: string, did: string }>()
  const { agents, agent } = useVeramo<IDataStore & IDataStoreORM & IDIDManager & IDIDComm & IResolver>()
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);
  const [post, setPost] = useState<UniqueVerifiableCredential | null>(null)

  const { token } = theme.useToken()

  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [loading, setLoading] = useState(true)
  
  const localAgent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === 'web3Agent')
  }, [agents])

  if (!agent) return null
  if (!localAgent) return null

  if (!id) return null
  if (!did) return null

  useEffect(() => {
    setLoading(true)
    const load = async () => {
          
      const sideBarCredential = await getPostByTitle(agent, localAgent, did, 'bs-sidebar')
      setSidebar(sideBarCredential)
      
      try {
        const postCredential = await getPost(agent, localAgent, id, did)
        setPost(postCredential)
        
      } catch (e) {
        try {
          const postCredential = await getPostByTitle(agent, localAgent, did, id)
          setPost(postCredential)

        } catch (b) {

        }

      }

      setLoading(false)
    }
    load()
  }, [did, id, agent])


  const { data: references, isLoading: referencesLoading } = useQuery(
    ['references', { id, agentId: agent?.context.id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
      where: [
        {
          column: 'type', value: ['post']
        },{
          column: 'value', value: [`%${id}%`], op: 'Like'
        }
      ]
    })
  }
  )
  if (loading) return (<Spin />)
  if (!post) return null

  return (
    <PageContainer 
      loading={loading}
      style={{paddingTop: 10}}
      >  
        <ResponsiveContainer>

        <Row gutter={16}>
          <Col xs={24} sm={16} style={{
            overflow: 'hidden',
            marginBottom: token.margin
          }}>
          {post && <VerifiableCredentialComponent credential={post} />}
          </Col>
          <Col xs={24} sm={8}>            
            {sidebar && <Sidebar credential={sidebar}/>}
          </Col>
        </Row>
        <Row>
        {references && references.length > 0 && <>
          <Button type='text' onClick={() => setRefDrawerOpen(true)}>
            Referenced by {references.length} other posts
          </Button>
        </>}
        </Row>
        </ResponsiveContainer>

        <Drawer 
          title="Posts that reference this one"
          placement="right"
          onClose={() => setRefDrawerOpen(false)}
          open={refDrawerOpen} 
          width={800}
          destroyOnClose={true}
        >
        <ReferencesFeed credentials={references}/>
      </Drawer>
    </PageContainer>
  )
}

const ResponsiveContainer: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (<Row>
    <Col 
      lg={3}
    />
    <Col  
      lg={18}
      sm={24}
      xs={24}
      style={{position: 'relative'}}
      >
        {children} 
      </Col>
      <Col 
        lg={3}
      />
  </Row>)
}