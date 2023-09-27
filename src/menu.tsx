import { EditOutlined, FileSearchOutlined } from "@ant-design/icons";
import { UniqueVerifiableCredential } from "@veramo/core-types";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export const getCredentialContextMenuItems = (credential: UniqueVerifiableCredential): MenuProps['items'] => {
  const navigate = useNavigate()
  
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
    ]
  }

  return undefined
}