import { IDIDManager, TAgent, VerifiableCredential } from "@veramo/core-types"
import { IDIDComm } from "@veramo/did-comm"
import { v4 } from "uuid"

export async function getPost(agent: TAgent<IDIDComm & IDIDManager>, did: string, hash: string): Promise<VerifiableCredential> {
    const senders = await agent?.didManagerFind({ provider: "did:peer"})

    if (senders && senders.length > 0) {
        // throw new Error("no DIDComm senders found on local agent")
        const requestCredMessage = {
            type: 'https://veramo.io/didcomm/brainshare/1.0/request-credential',
            from: senders[0].did,
            to: did,
            id: v4(),
            body: {
                hash
            },
            return_route: 'all'
        }
        const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
        await agent?.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
    }
    const localCred = await agent?.dataStoreGetVerifiableCredential({ hash })
    console.log("localCred: ", localCred)
    return localCred
}

export async function getIndex(agent: TAgent<IDIDComm & IDIDManager>, did: string): Promise<VerifiableCredential> {
    console.log("get index for DID: ", did)
    const senders = await agent?.didManagerFind({ provider: "did:peer"})
    if (senders && senders.length > 0) {
        // throw new Error("no DIDComm senders found on local agent")
        const requestCredMessage = {
            type: 'https://veramo.io/didcomm/brainshare/1.0/request-index',
            from: senders[0].did,
            to: did,
            id: v4(),
            body: {
            },
            return_route: 'all'
        }
        console.log("getIndex 2")
        const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: 'authcrypt' })
        await agent?.sendDIDCommMessage({ packedMessage: packedMessage!, messageId: requestCredMessage.id, recipientDidUrl: did! })
    }

    console.log("getIndex 3")
    const localCreds = await agent?.dataStoreORMGetVerifiableCredentials({ 
        where: [
            { column: 'type', value: ['VerifiableCredential,BrainShareIndex']},
            { column: 'issuer', value: [did] }
        ],
    })
    console.log("indexes??", localCreds)
    return localCreds[localCreds.length - 1]?.verifiableCredential
}