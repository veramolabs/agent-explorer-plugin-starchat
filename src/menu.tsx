import { EditOutlined, FileSearchOutlined, LinkOutlined } from "@ant-design/icons";
import { getIssuerDID } from "@veramo-community/agent-explorer-plugin";
import { UniqueVerifiableCredential } from "@veramo/core-types";
import { App, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export const getCredentialContextMenuItems = (credential: UniqueVerifiableCredential): MenuProps['items'] => {
  const navigate = useNavigate()
  const { notification } = App.useApp()

  const handleCopyWikilink = () => {
    const wikilink = credential.verifiableCredential.credentialSubject.title ? 
      `[[${getIssuerDID(credential.verifiableCredential)}/${credential.hash}|${credential.verifiableCredential.credentialSubject.title}]]`
      : `[[${getIssuerDID(credential.verifiableCredential)}/${credential.hash}]]`
    
    navigator.clipboard.writeText(wikilink)
    notification.success({
      message: 'Credential wikilink copied to clipboard',
    })
  }
  
  if (credential.verifiableCredential.type?.includes('BrainSharePost')){
    return [
      {
        key: 'open',
        label: 'Open post',
        icon: <FileSearchOutlined />,
        onClick: () => navigate('/brainshare/' + credential.hash),
      },
      {
        key: 'edit',
        label: 'New revision',
        icon: <EditOutlined />,
        onClick: () => navigate('/brainshare/edit/' + credential.hash),
      },
      {
        key: 'copy-wiki',
        label: 'Copy wiki link',
        icon: <LinkOutlined />,
        onClick: handleCopyWikilink,
      },
    ]
  }

  return undefined
}