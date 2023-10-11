import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "@veramo-community/agent-explorer-plugin";

export const BrainSharePost: React.FC<{credential: UniqueVerifiableCredential, context?: any}> = ({ credential, context }) => {

  return <>
    {credential.verifiableCredential.credentialSubject.title && <h2>{credential.verifiableCredential.credentialSubject.title}</h2>}
    <MarkDown content={credential.verifiableCredential.credentialSubject.post} credential={credential} context={context} />
    </>
}
