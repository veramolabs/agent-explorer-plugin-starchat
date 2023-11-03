import { IDIDManager, IIdentifier, IResolver, TAgent, UniqueVerifiableCredential, VerifiableCredential } from "@veramo/core-types"
import { IDIDComm } from "@veramo/did-comm"
import { v4 } from "uuid"

export async function getPost(
  agent: TAgent<IDIDComm & IDIDManager & IResolver>,
  localAgent: TAgent<IDIDComm & IDIDManager & IResolver>,
  hash: string,
  did?: string, 
): Promise<UniqueVerifiableCredential> {
  // Is DID managed by agent?
  if (did) {
    let identifier: IIdentifier | undefined = undefined
    try{
      identifier = await agent.didManagerGet({ did })
    } catch (e) {
      //console.log("error getting DID: ", e)
    }
    if (!identifier) {
      const { didDocument } = await localAgent.resolveDid({didUrl: did})
      if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
        const temporarySender = await localAgent.didManagerCreate({provider: "did:key"})
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
          const packedMessage = await localAgent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
          const { returnMessage } = await localAgent.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
          await localAgent.didManagerDelete({ did: temporarySender.did })
          if ( (returnMessage?.data as UniqueVerifiableCredential)) {
            return (returnMessage?.data as UniqueVerifiableCredential)
          }

        }
      }
    }
  }
  try {
    const localCred = await agent.dataStoreGetVerifiableCredential({ hash })
  
    return {hash, verifiableCredential: localCred}
  } catch (e) {
    return Promise.reject('Credential not found')
  }
}


export async function getPostByTitle(
  agent: TAgent<IDIDComm & IDIDManager & IResolver>, 
  localAgent: TAgent<IDIDComm & IDIDManager & IResolver>, 
  did: string, 
  title: string
): Promise<UniqueVerifiableCredential> {
  // Is DID managed by agent?
  let identifier: IIdentifier | undefined = undefined
  try{
    identifier = await agent.didManagerGet({ did })
  } catch (e) {
    //console.log("error getting DID: ", e)
  }
  if (!identifier) {
    const { didDocument } = await localAgent.resolveDid({didUrl: did})
    if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
      const temporarySender = await localAgent.didManagerCreate({provider: "did:key"})
      if (temporarySender) {
        const requestCredMessage = {
          type: 'https://veramo.io/didcomm/brainshare/1.0/request-post',
          from: temporarySender.did,
          to: did,
          id: v4(),
          body: {
              title
          },
          return_route: 'all'
        }
        const packedMessage = await localAgent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
        const { returnMessage } = await localAgent.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
        await localAgent.didManagerDelete({ did: temporarySender.did })
        if (returnMessage?.data) {
          return returnMessage?.data as UniqueVerifiableCredential
        }
      }
    }
  }

  const credentials = await agent.dataStoreORMGetVerifiableCredentialsByClaims({ 
    where: [
      { column: 'credentialType', value: ['VerifiableCredential,BrainSharePost'] },
      { column: 'issuer', value: [did] },
      { column: 'type', value: ['title'] },
      { column: 'value', value: [title] },
    ],
    order: [{ column: 'issuanceDate', direction: 'DESC' }],
    take: 1
  })
  return credentials[0]

}
