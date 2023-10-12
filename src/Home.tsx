import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { App, Drawer, Typography } from 'antd'
import { IDIDManager, IDataStore, IDataStoreORM, UniqueVerifiableCredential, VerifiableCredential } from '@veramo/core'
import { formatRelative } from 'date-fns'
import { getIssuerDID, IdentifierProfile, VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { PostForm } from './PostForm.js'
import { getIndex, getPost } from './didcommUtils.js'
import { IDIDComm } from '@veramo/did-comm'
import { BrainSharePost } from './BrainSharePost.js'

export const Home = () => {
  const { notification } = App.useApp()
  const { did, hash } = useParams<{ did: string, hash: string }>()
  const { agent } = useVeramo<IDataStore & IDataStoreORM & IDIDComm & IDIDManager>()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const [index, setIndex] = useState<VerifiableCredential | null>(null)
  const [sidebar, setSidebar] = useState<UniqueVerifiableCredential | null>(null)
  const [post, setPost] = useState<UniqueVerifiableCredential | null>(null)

  if (!did) return null
  if (!agent) return null

  useEffect(() => {
    const loadIndex = async () => {
      const index = await getIndex(agent, did)
      setIndex(index)
      console.log("index: ", index)

      const indexMap = index.credentialSubject.index
      const sidebarHash = indexMap['bs-sidebar'][0]

      console.log("sidebarHash: ", sidebarHash)

      const sidebar = await getPost(agent, did, sidebarHash)
      console.log("sidebar: ", sidebar)
      setSidebar({ hash: sidebarHash, verifiableCredential: sidebar })
    }
    loadIndex()
  }, [did])

  useEffect(() => {
    if (index) {
      const loadPost = async () => {
        if (!hash) {
          const homeHash = index.credentialSubject.index['bs-home'][0]
          setPost({ hash: homeHash, verifiableCredential: await getPost(agent, did, homeHash)})
        } else {
          setPost({ hash, verifiableCredential: await getPost(agent, did, hash)})
        }
      }
      loadPost()
    }
  }, [did, hash, index])

  // const credential = credentials && credentials.length > 0 && credentials[0]
  // console.log("credential: ", credential)
  
  const handleNewPost = async (hash: string) => {
    notification.success({
      message: 'Post created'
    })
    // await refetch()
    navigate('/brainshare/' + hash)
  }

  // if (!credential) return null
  // return (
  //   <PageContainer 
  //     loading={credentialLoading}
  //     title={<IdentifierProfile
  //       did={getIssuerDID(credential.verifiableCredential)}
  //     />}
  //     extra={[
  //       <Typography.Text key={'1'}>
  //         {credential && formatRelative(
  //           new Date(credential.verifiableCredential.issuanceDate),
  //           new Date(),
  //         )}
  //       </Typography.Text>,
  //     ]}
  //   >
  //     {credential && <VerifiableCredentialComponent credential={credential} />}
  //     <>
  //     <Drawer 
  //       title="Compose new post"
  //       placement="right"
  //       onClose={() => setDrawerOpen(false)}
  //       open={drawerOpen} 
  //       width={800}
  //       destroyOnClose={true}
  //     >
  //       <PostForm 
  //         onOk={handleNewPost}
  //         initialIssuer={(credential.verifiableCredential.issuer as any).id}
  //         initialTitle={credential.verifiableCredential.credentialSubject.title}
  //         initialText={credential.verifiableCredential.credentialSubject.post}
  //         initialIndexed={credential.verifiableCredential.credentialSubject.shouldBeIndexed}
  //         />
  //     </Drawer>
  //   </>
  //   </PageContainer>
  // )
  if (!sidebar) return null
  if (!post) return null

  return <>
    <BrainSharePost credential={sidebar} />
    <br />
    <BrainSharePost credential={post} />
  </>
}
