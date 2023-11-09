import React, { useState } from 'react'
import {
  Modal,
  Input,
  SelectProps,
  AutoComplete,
  Row,
  Button,
  Col,
  App,
} from 'antd'
import { QrcodeOutlined } from '@ant-design/icons'
import { useVeramo } from '@veramo-community/veramo-react'
import { IDIDDiscovery } from '@veramo/did-discovery'
// import { QrScanner } from '@yudiel/react-qr-scanner'
// import parse from 'url-parse'
import { shortId } from '@veramo-community/agent-explorer-plugin'
import { decodeBase64url } from '@veramo/utils'

interface NewStarChatThreadModalProps {
  visible: boolean
  onCreate: (did: string) => void
  onCancel: () => void
}

const NewStarChatThreadModal: React.FC<NewStarChatThreadModalProps> = ({
                                                                 visible,
                                                                 onCreate,
                                                                 onCancel,
                                                               }) => {
  const { notification } = App.useApp()
  const { agent } = useVeramo<IDIDDiscovery>()
  const [options, setOptions] = useState<SelectProps<object>['options']>([])
  const [did, setDid] = useState<string>('')
  const [showQrCodeScanner, setShowQrCodeScanner] = useState<boolean>(false)

  const searchResult = async (query: string) => {
    const response = await agent?.discoverDid({ query })
    const dids = response?.results.map((r) => r.matches.map((m) => m.did)).flat() ?? []

    const selectOptions: Array<{ value: string; label: any }> = []
    new Set(dids).forEach((did) => {
      selectOptions.push({
        value: did,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>{shortId(did)}</span>
          </div>
        ),
      })
    })
    return selectOptions
  }

  const handleSearch = async (value: string) => {
    setOptions(value ? await searchResult(value) : [])
  }

  return (
    <Modal
      open={visible}
      title='Start new thread'
      okText='Create'
      cancelText='Cancel'
      onCancel={() => {
        setShowQrCodeScanner(false)
        onCancel()
      }}
      onOk={() => {
        onCreate(did)
      }}
    >
      {!showQrCodeScanner && (
        <Row>
          <AutoComplete
            popupMatchSelectWidth={true}
            options={options}
            onSelect={(e) => setDid(e)}
            onSearch={handleSearch}
            style={{ flex: 1 }}
          >
            <Input
              value={did}
              placeholder='Enter a DID'
              onChange={(e) => setDid(e.target.value)}
              style={{
                flex: 1,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            />
          </AutoComplete>
        </Row>
      )}
    </Modal>
  )
}

export default NewStarChatThreadModal
