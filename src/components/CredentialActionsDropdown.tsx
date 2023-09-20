import { Dropdown, App } from 'antd'
import React, { useState } from 'react'
import { useVeramo } from '@veramo-community/veramo-react'
import { useNavigate } from 'react-router-dom'
import { DownloadOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { IDataStore, IIdentifier, VerifiableCredential } from '@veramo/core'
import { getIssuerDID } from '../utils/did'
import { useQuery } from 'react-query'

const CredentialActionsDropdown: React.FC<{
  children: React.ReactNode
  credential: VerifiableCredential
  onCreateRevision?: () => void
}> = ({ children, credential, onCreateRevision }) => {
  const { agent, agents, getAgent } = useVeramo<IDataStore>()
  const navigate = useNavigate()
  const { notification } = App.useApp()

  const [selectedDid, setSelectedDid] = useState('')
  const [managedIdentifiers, setManagedIdentifiers] = useState<
  IIdentifier[]
>([])

useQuery(
  ['identifiers', { id: agent?.context.id }],
  () => agent?.didManagerFind(),
  {
    onSuccess: (data: IIdentifier[]) => {
      if (data) {
        setManagedIdentifiers(data)
        data.forEach((managedDID) => {
          if ((credential.issuer as any).id === managedDID.did) {
            console.log("set selected yep.")
            setSelectedDid(managedDID.did);
          }
        })
      }
    },
  },
)

  const agentsToCopyTo = agents.filter((agent) =>
    agent.availableMethods().includes('dataStoreSaveVerifiableCredential'),
  )

  const handleCopyTo = async (agentId: string) => {
    const agent = getAgent(agentId)
    try {
      await agent.dataStoreSaveVerifiableCredential({
        verifiableCredential: credential,
      })
      notification.success({
        message: 'Credential copied to: ' + agent.context.name,
      })
    } catch (e: any) {
      notification.error({
        message: 'Error copying credential to: ' + agent.context.name,
        description: e.message,
      })
    }
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([JSON.stringify(credential, null, 2)], {
      type: 'text/plain',
    })
    element.href = URL.createObjectURL(file)
    element.download = 'verifiable-credential.json'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  const actionItems = [
    {
      key: 'issuer',
      label: 'Issuer',
      icon: <InfoCircleOutlined />,
      onClick: () => navigate('/contacts/' + getIssuerDID(credential)),
    },
    {
      key: 'subject',
      label: 'Subject',
      icon: <InfoCircleOutlined />,
      onClick: () =>
        navigate(
          '/contacts/' +
            encodeURIComponent(credential.credentialSubject.id as string),
        ),
    },
    {
      key: 'download',
      label: 'Download',
      icon: <DownloadOutlined />,
      onClick: handleDownload,
    },
    {
      key: 'copy',
      label: 'Copy to',
      type: 'group',
      children: agentsToCopyTo.map((_agent: any, index: number) => {
        return {
          key: index,
          onClick: () => handleCopyTo(_agent.context?.id),
          label: _agent.context?.name,
        }
      }),
    },
  ]

  if (selectedDid && onCreateRevision) {
    actionItems.push({
      key: 'create-revision',
      label: 'Create New Revision',
      icon: <DownloadOutlined />,
      onClick: onCreateRevision
    })
  }

  return (
    <Dropdown
      menu={{
        items: actionItems,
      }}
    >
      {children}
    </Dropdown>
  )
}
export default CredentialActionsDropdown
