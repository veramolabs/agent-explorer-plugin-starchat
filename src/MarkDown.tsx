import * as ReactDOMServer from 'react-dom/server';
import hljs from 'highlight.js';
import { decode } from 'html-entities';
import MarkdownIt from 'markdown-it';
import "highlight.js/styles/base16/solarized-dark.css";
import { markdownPlugin } from './plugins/markdown';
import { useEffect, useState } from 'react';
import { ICredentialVerifier, IDataStore, VerifiableCredential } from '@veramo/core';
import { VerifiableCredential as VerifiableCredentialView } from '@veramo-community/react-components'
import { useVeramo } from '@veramo-community/veramo-react';
import { normalizeCredential } from 'did-jwt-vc';
import { CredentialVerificationView } from './components/CredentialVerificationView';

interface MarkDownProps {
  content: string
}

export const MarkDown: React.FC<MarkDownProps> = ({ content }) => {
    const [ html, setHtml ] = useState<string>('')
    const { agent } = useVeramo<ICredentialVerifier & IDataStore>()

    const md = new MarkdownIt({
        html: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (e) {
                    console.error(e);
                    /* empty */
                }
            }

            return ''; // use external default escaping
        },
    })
    markdownPlugin(md)

    useEffect(() => {
      const htmlStr = md.render(content)
      setHtml(htmlStr)

      async function getVerifiedHtml(lang: string, source: string): Promise<string> {
        let credential: VerifiableCredential | undefined = undefined;

        let result = '';
        const decoded = decode(source);
        const parsed = JSON.parse(decoded);
        try {
          if (lang === 'vc+json') {
            credential = JSON.parse(parsed);
          } else if (lang === 'vc+jwt') {
            credential = normalizeCredential(parsed.replace(/\s/g, ''));
          } else if (lang === 'vc+multihash') {
            const items = parsed.replace(/\s/g, '').split('/');
            let hash = '';
            let did = '';
            if (items.length === 2) {
              did = items[0];
              hash = items[1];
            } else {
              hash = items[0];
            }

            credential = await agent?.dataStoreGetVerifiableCredential({
              hash,
            });
            
            if (!credential) {
              // TODO: fetch using IPFS or DIDComm
            }
          }
      
          if (credential) {
            const verifyResult = await agent?.verifyCredential({ credential, fetchRemoteContexts: true })
            if (verifyResult) {
              result = ReactDOMServer.renderToStaticMarkup(
                <CredentialVerificationView verifyResult={verifyResult} credential={credential} />
              );
            }
          }
            
        } catch (e: any) {
          result = `Error: ${e.message}`;
        }

        return result
      }
      
      async function replaceDivs(input: string): Promise<string> {
        const regex = /<div class="veramo" data-lang="([^"]+)" data-source="([^"]+)">.*?<\/div>/g;
        const replacements = [];
      
        let match;
        while ((match = regex.exec(input)) !== null) {
          const [fullMatch, lang, source] = match;
          replacements.push({ fullMatch, lang, source });
        }
      
        const replacedStrings = await Promise.all(
          replacements.map(async ({ lang, source }) => getVerifiedHtml(lang, source))
        );
      
        for (let i = 0; i < replacements.length; i++) {
          input = input.replace(replacements[i].fullMatch, replacedStrings[i]);
        }
      
        return input;
      }
      replaceDivs(htmlStr).then(setHtml)


    }, [content])

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}


export function credentialToHTML(vc: VerifiableCredential) {
  return ReactDOMServer.renderToStaticMarkup(
    <VerifiableCredentialView credential={vc} />
  );
}
