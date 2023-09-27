import React from 'react'

import { VerifiableCredentialComponent } from '@veramo-community/agent-explorer-plugin'
import { md } from './plugins/markdown';
import { normalizeCredential } from 'did-jwt-vc';
import { computeEntryHash } from '@veramo/utils';

export const MarkDown: React.FC<{ content: string}> = ({ content }: { content: string}) => {


    const parsed = md.parse(content, {})

    return (<div>
      {parsed.map((token, index) => {
      if (token.type === 'fence' && token.info === 'vc+jwt') {
        const verifiableCredential = normalizeCredential(token.content.replace(/\s/g, ''))
        const hash = computeEntryHash(verifiableCredential)
        return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
      }
      if (token.type === 'fence' && token.info === 'vc+json') {
        const verifiableCredential = JSON.parse(token.content)
        const hash = computeEntryHash(verifiableCredential)
        return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
      } else if (token.type === 'fence' && token.info  === 'vc+multihash') {
        const items = token.content.replace(/\s/g, '').split('/');
        let hash = '';
        let did = '';
        if (items.length === 2) {
          did = items[0];
          hash = items[1];
        } else {
          hash = items[0];
        }

        // const verifiableCredential = await agent?.dataStoreGetVerifiableCredential({
        //   hash,
        // });

        // if (!credential) {
        //   // TODO: fetch using IPFS or DIDComm
        // }

        // return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
        return null
      }
      return <div dangerouslySetInnerHTML={{ __html: md.renderer.render([token], {}, {}) }} />
    })}</div>);
}



