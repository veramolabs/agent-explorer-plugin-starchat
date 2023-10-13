import { EditOutlined, FileSearchOutlined, LinkOutlined, PicLeftOutlined } from "@ant-design/icons";
import { getIssuerDID } from "@veramo-community/agent-explorer-plugin";
import { UniqueVerifiableCredential } from "@veramo/core-types";
import { App, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export const getCredentialContextMenuItems = (credential: UniqueVerifiableCredential): MenuProps['items'] => {
  const navigate = useNavigate()
  const { notification } = App.useApp()

  const handleCopyEmbed = () => {
    let embed = ''
    if (credential.verifiableCredential.proof?.jwt) {
      embed = `\`\`\`vc+jwt\n${credential.verifiableCredential.proof.jwt}\n\`\`\``
    } else {
      embed = `\`\`\`vc+json\n${JSON.stringify(credential.verifiableCredential, null, 2)}\n\`\`\``
    }
    navigator.clipboard.writeText(embed)
    notification.success({
      message: 'Credential embed copied to clipboard',
    })
  }

  const handleCopyReference = () => {
    const reference = `\`\`\`vc+multihash\n${getIssuerDID(credential.verifiableCredential)}/${credential.hash}\n\`\`\``
    
    navigator.clipboard.writeText(reference)
    notification.success({
      message: 'Credential reference copied to clipboard',
    })
  }

  const handleCopyWikilink = () => {
    const wikilink = credential.verifiableCredential.credentialSubject.title ? 
      `[[${getIssuerDID(credential.verifiableCredential)}/${credential.hash}|${credential.verifiableCredential.credentialSubject.title}]]`
      : `[[${getIssuerDID(credential.verifiableCredential)}/${credential.hash}]]`
    
    navigator.clipboard.writeText(wikilink)
    notification.success({
      message: 'Credential wikilink copied to clipboard',
    })
  }
  
  const defaultItems = [
    {
      key: 'copy-wiki',
      label: 'Copy wiki link',
      icon: <LinkOutlined />,
      onClick: handleCopyWikilink,
    },
    {
      key: 'embed',
      label: 'Copy embed',
      icon: <PicLeftOutlined />,
      onClick: handleCopyEmbed,
    },
    {
      key: 'reference',
      label: 'Copy reference',
      icon: <PicLeftOutlined />,
      onClick: handleCopyReference,
    },
  ]

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
      ...defaultItems
    ]
  } 

  return defaultItems
}