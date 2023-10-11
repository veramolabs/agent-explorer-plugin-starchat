import React from 'react'
import { normalizeCredential } from 'did-jwt-vc';
import { computeEntryHash } from '@veramo/utils';
import { VerifiableCredentialComponent, CredentialLoader, getIssuerDID } from '@veramo-community/agent-explorer-plugin'
import { Components } from 'react-markdown'
import { useTextSelection } from 'use-text-selection'
import { App, Button } from 'antd';
import { PicLeftOutlined } from '@ant-design/icons';

export const getMarkdownComponents = () : Partial<Components>  => {

  return {
    p(props) {
      const { notification } = App.useApp()
      const ref = React.useRef(null)
      const { clientRect, isCollapsed, textContent } = useTextSelection(ref.current === null ? undefined : ref.current)
    
      //@ts-ignore
      const credential = props.node?.credential

      const {enabled, start, end} = React.useMemo(() => {
        let enabled = false
        let start = -1
        let end = -1
        const originalContent = String(props.children)
        if (textContent) {
          const index = originalContent.indexOf(textContent)
          
          if (index >= 0) {
            enabled = true
            start = (props.node?.position?.start.offset || 0) + index
            end = start + textContent.length
          }
        }
        return {enabled, start, end}
      }, [textContent, props.children])

      const handleCopyReference = () => {
        const reference = `\`\`\`vc+multihash\n${getIssuerDID(credential.verifiableCredential)}/${credential.hash}#${start}-${end}\n\`\`\``

        navigator.clipboard.writeText(reference)
        notification.success({
          message: 'Credential reference copied to clipboard',
        })
      }

      return (<div style={{position: 'relative'}}>
        {clientRect && !isCollapsed && <div
        style={{
          left: 0,
          top: -40,
          position: 'absolute',
          backgroundColor: 'black',
        }}
      >
        <Button 
          type='primary' 
          disabled={!enabled}
          onClick={handleCopyReference}
          icon={<PicLeftOutlined />}
          >Copy reference</Button>
      </div>}
        <p ref={ref}>{props.children}</p>
      </div>)
    },
    pre(props) {
      return (<>{props.children}</>)
    },
    code(props) {
      const {children, className, node, ...rest} = props
      switch (className?.toLowerCase()) {
        case 'language-vc+jwt':
          const verifiableCredential = normalizeCredential(String(children).replace(/\s/g, ''))
          const hash = computeEntryHash(verifiableCredential)
          return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
        case 'language-vc+json':
          const verifiableCredential2 = JSON.parse(String(children))
          const hash2 = computeEntryHash(verifiableCredential2)
          return <VerifiableCredentialComponent credential={{hash: hash2, verifiableCredential: verifiableCredential2}} />
        case 'language-vc+multihash':
          const items = String(children).replace(/\s/g, '').split('/');
          let hash3 = '';
          let did = '';
          let context = undefined
          if (items.length === 2) {
            did = items[0];
            hash3 = items[1];
          } else {
            hash3 = items[0];
          }
          let textRange = undefined
          const a = hash3.split('#')
          if (a.length === 2) {
            hash3 = a[0]
            context = { textRange: a[1] }
          }
          return <CredentialLoader hash={hash3} did={did} context={context}/>
        default:
          return (
            <code {...rest} className={className}>
              {children}
            </code>
          )
      }
    }
  }
}

