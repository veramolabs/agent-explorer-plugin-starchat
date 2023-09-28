import React from 'react'
import { normalizeCredential } from 'did-jwt-vc';
import { computeEntryHash } from '@veramo/utils';
import { VerifiableCredentialComponent, CredentialLoader } from '@veramo-community/agent-explorer-plugin'

import Token from 'markdown-it/lib/token';

export const getMarkdownComponent = (token: Token)  => {

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

    return <CredentialLoader hash={hash} did={did} />
  }
}