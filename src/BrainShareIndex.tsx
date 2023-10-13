import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { Typography } from "antd";

type IBrainShareIndex = Record<string, string[]>;

export const BrainShareIndex: React.FC<{credential: UniqueVerifiableCredential}> = 
({ credential: { verifiableCredential } }) => {

  return <>
    <Typography.Title level={5}>BrainShare Index</Typography.Title>
    {verifiableCredential.credentialSubject.index 
    && <ul>
      {Object.keys(verifiableCredential.credentialSubject.index as IBrainShareIndex).map((item, key: number) => {
        return <li key={key}>
          <a href={`/brainshare/${verifiableCredential.credentialSubject.index[item]}`}>{item}</a>
        </li>
      })}
      </ul>}
    </>
}
