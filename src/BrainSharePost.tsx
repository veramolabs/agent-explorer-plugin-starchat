import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "@veramo-community/agent-explorer-plugin";

export const BrainSharePost: React.FC<{credential: UniqueVerifiableCredential}> = ({ credential: { verifiableCredential } }) => {

  return <>
    {verifiableCredential.credentialSubject.title && <h2>{verifiableCredential.credentialSubject.title}</h2>}
    <MarkDown content={verifiableCredential.credentialSubject.post}/>
    </>
}
