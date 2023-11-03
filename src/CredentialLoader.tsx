import { VerifiableCredentialComponent } from "@veramo-community/agent-explorer-plugin"
import { useVeramo } from "@veramo-community/veramo-react"
import { UniqueVerifiableCredential, IDataStore, IDataStoreORM, IDIDManager, IResolver } from "@veramo/core-types"
import { Spin, Typography } from "antd"
import React, { useState, useEffect } from "react"
import { getPost } from "./didcommUtils"
import { IDIDComm } from "@veramo/did-comm"

export const CredentialLoader = ({ hash, did, context } : { hash: string, did?: string, context?: any }) => {
  
  const [credential, setCredential] = useState<UniqueVerifiableCredential>()
  const { agents, agent } = useVeramo<IDataStore & IDataStoreORM & IDIDComm & IDIDManager & IResolver>()
  const [error, setError] = useState<string | undefined>(undefined)
  
  const localAgent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === 'web3Agent')
  }, [agents])

  if (!agent) return null
  if (!localAgent) return null

  useEffect(() => {
    const load = async () => {
      try {
        const postCredential = await getPost(agent, localAgent, hash, did)
        if (postCredential.verifiableCredential) {
          setCredential(postCredential)
        } else {
          throw new Error('Credential not found')
        }
      }catch(e: any) {
        setError(e.message)
      }
    }

    load()
  }, [agent, hash])
  
  if (error) {
    return <Typography.Text type='danger'>{error}</Typography.Text>
  }

  return credential ? <VerifiableCredentialComponent credential={credential} context={context} /> : <Spin />
}

