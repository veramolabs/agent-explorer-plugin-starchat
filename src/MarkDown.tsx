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
        console.log('found vc jwt', token.content)
        const verifiableCredential = normalizeCredential(token.content.replace(/\s/g, ''))
        const hash = computeEntryHash(verifiableCredential)
        return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
      }
      if (token.type === 'fence' && token.info === 'vc+json') {
        console.log('ahahahah')
        const verifiableCredential = JSON.parse(token.content)
        const hash = computeEntryHash(verifiableCredential)
        return <VerifiableCredentialComponent credential={{hash, verifiableCredential}} />
      }
      return <div dangerouslySetInnerHTML={{ __html: md.renderer.render([token], {}, {}) }} />
    })}</div>);
}



