import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Col, Collapse, Drawer, Row, Space, Spin, theme } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, IIdentifier, IResolver, UniqueVerifiableCredential, VerifiableCredential } from '@veramo/core'
import { IDIDComm } from '@veramo/did-comm'
import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { ReferencesFeed } from './ReferencesFeed.js'
import { useEffect } from 'react'
import { v4 } from 'uuid'
import { getIndex, getPost } from './didcommUtils.js'
import { BrainSharePost } from './BrainSharePost.js'

export const Post = () => {
  const { id, did } = useParams<{ id: string, did: string }>()
  const { agents } = useVeramo<IDataStore & IDataStoreORM & IDIDManager & IDIDComm & IResolver>()
  const [refDrawerOpen, setRefDrawerOpen] = useState(false);
  const [credential, setCredential] = useState<VerifiableCredential | null>(null)
  const [credentialLoading, setCredentialLoading] = useState(true)
  const { token } = theme.useToken()

  const [index, setIndex] = useState<VerifiableCredential | null>(null)
  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [loading, setLoading] = useState(true)
  
  const agent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === 'web3agent')
  }, [agents])


  if (!id) return null

  useEffect(() => {
    const loadIndex = async () => {
      if (!agent || !did) return
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
      }
      setLoading(false)

    }
    loadIndex()
  }, [did, id])
  
  useEffect(() => {
    const getCredential = async () => {
      try {
        const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id })
        setCredential(localCred!)
        setCredentialLoading(false)
      } catch (ex) {
        console.log("credential not found locally")
      }
      if (!credential && did) {
        // Is DID managed by agent?
        let identifier: IIdentifier | undefined = undefined
        try{
          identifier = await agent?.didManagerGet({ did })
        } catch (e) {
          //console.log("error getting DID: ", e)
        }
        if (!identifier) {
          const result = await agent?.resolveDid({didUrl: did})
          if (result?.didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
            const temporarySender = await agent?.didManagerCreate({provider: "did:key"})
            if (temporarySender) {
                const requestCredMessage = {
                  type: 'https://veramo.io/didcomm/brainshare/1.0/request-credential',
                  from: temporarySender.did,
                  to: did,
                  id: v4(),
                  body: {
                    hash: id
                  },
                  return_route: 'all'
                }
                const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
                await agent?.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
                await agent?.didManagerDelete({ did: temporarySender.did })
              }
            }
          }
          const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id })
          setCredential(localCred!)
          setCredentialLoading(false)
        }
      }
      getCredential()
    }, [did, id])

  const { data: references, isLoading: referencesLoading } = useQuery(
    ['references', { id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
      where: [
        {
          column: 'type', value: ['references']
        },{
          column: 'value', value: [`%${id}%`], op: 'Like'
        }
      ]
    })
  }
  )
  if (credentialLoading) return (<Spin />)
  if (!credential) return null
  return (
    <PageContainer 
      loading={credentialLoading}
      style={{paddingTop: 10}}
      >  
        <Row gutter={16}>
          <Col xs={24} sm={16} style={{overflow: 'hidden', paddingRight: token.margin}}>
          {credential && <VerifiableCredentialComponent credential={{hash: id, verifiableCredential: credential}} />}
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
                  children: sidebar && <BrainSharePost credential={sidebar} context={{hideTitle: true}}  />,
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
        </Row>
        <Row>
        {references && references.length > 0 && <>
          <Button type='text' onClick={() => setRefDrawerOpen(true)}>
            Referenced by {references.length} other posts
          </Button>
        </>}
        </Row>

        <Drawer 
          title="Posts that reference this one"
          placement="right"
          onClose={() => setRefDrawerOpen(false)}
          open={refDrawerOpen} 
          width={800}
          destroyOnClose={true}
        >
        <ReferencesFeed referenceHashes={references?.map((cred) => cred.hash)}/>
      </Drawer>
    </PageContainer>
  )
}
