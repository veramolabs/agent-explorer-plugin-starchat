import { Input, Button } from 'antd'
import React, { useState } from 'react'
// import ReactMarkdown from 'react-markdown'
const { TextArea } = Input
import { useVeramo } from '@veramo-community/veramo-react'
import { issueCredential, claimToObject } from '../utils/signing'
import { IIdentifierProfile, IIdentifierProfilePlugin } from '../context/plugins/IdentifierProfile.js'
import { IDIDDiscovery } from '@veramo/did-discovery'
import { IIdentifier } from '@veramo/core'
import { useQuery } from 'react-query'

interface CreatePostProps {

}

const CreatePost: React.FC<CreatePostProps> = ({ }) => {
    const [message, setMessage] = useState<string>()
    // const { agent } = useVeramo()
    const { agent } = useVeramo<IDIDDiscovery & IIdentifierProfilePlugin>()
    const [agentChatIdentifiers, setAgentChatIdentifiers] = useState<IIdentifier[]>([])
    const [selectedDid, setSelectedDid] = useState("")
  const [
    agentChatIdentifiersWithProfiles,
    setAgentChatIdentifiersWithProfiles,
  ] = useState<IIdentifierProfile[]>([])

  useQuery(
    ['identifiers', { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data: IIdentifier[]) => {
        if (data) {
          const didsWithDIDComm = data.filter((did) =>
            did.keys.some(
              (key) => key.type === 'Ed25519',
            ),
          )
          setAgentChatIdentifiers(didsWithDIDComm)
          setSelectedDid(didsWithDIDComm[0].did)
        }
      },
    },
  )

  return (
    <div>
        <TextArea
        //   style={{ marginRight: 20, marginLeft: 20, borderRadius: 20 }}
          placeholder={`Compose...`}
        //   autoSize
          value={message}
          rows={40}
          onChange={(e) => {
            // setErrorMessage('')
            setMessage(e.target.value)
          }}
        />
        <Button onClick={async () => {
            console.log("lets go issue. message: ", message)
            const credential = await issueCredential(
                agent,
                selectedDid,
                "",
                [{type: "post", value: message}],
                "jwt",
                "",
                "BrainsharePost",
              )
            console.log("credential: ", credential)
        }}>Create Post</Button>
    </div>
  )
}

export default CreatePost
