import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "./MarkDown";

export const BrainSharePost = ({ credential: { verifiableCredential } } : {credential: UniqueVerifiableCredential}) => {

  return <>
    {verifiableCredential.credentialSubject.title && <h2>{verifiableCredential.credentialSubject.title}</h2>}
    <MarkDown content={verifiableCredential.credentialSubject.post}/>
    </>
}
