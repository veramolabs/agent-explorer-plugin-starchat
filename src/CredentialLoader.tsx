import { VerifiableCredentialComponent } from "@veramo-community/agent-explorer-plugin"
import { useVeramo } from "@veramo-community/veramo-react"
import { UniqueVerifiableCredential, IDataStore } from "@veramo/core-types"
import { Spin } from "antd"
import React, { useState, useEffect } from "react"
import { v4 } from "uuid"

export const CredentialLoader = ({ hash, did, context } : { hash: string, did?: string, context?: any }) => {
  
  const [credential, setCredential] = useState<UniqueVerifiableCredential>()
  const { agents } = useVeramo<IDataStore>()
  
  const agent = React.useMemo(() => {
    return agents.find((agent) => agent.context.id === "web3Agent")
  }, [agents])
  console.log("agent: ", agent)

  useEffect(() => {
    const load = async () => {
      let verifiableCredential
      try {
        verifiableCredential = await agent?.dataStoreGetVerifiableCredential({
          hash,
        });
      } catch (ex) {
        console.log("credential not found locally")
      }

      if (verifiableCredential) {
        setCredential({hash, verifiableCredential})
      } else {
        // TRY IPFS or DIDComm
        const temporarySender = await agent?.didManagerCreate({provider: "did:key"})
        if (temporarySender) {
          const requestCredMessage = {
            type: 'https://veramo.io/didcomm/brainshare/1.0/request-credential',
            from: temporarySender.did,
            to: did,
            id: v4(),
            body: {
              hash
            },
            return_route: 'all'
        }
        const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
        await agent?.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
        await agent?.didManagerDelete({ did: temporarySender.did })
        const localCred = await agent?.dataStoreGetVerifiableCredential({ hash })
        setCredential({ hash, verifiableCredential: localCred! })
      }
      }
    }

    load()
  }, [agent, hash])

  return credential ? <VerifiableCredentialComponent credential={credential} context={context} /> : <Spin />
}

