/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type FolderInput = {
  files: Array<Scalars['Upload']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  readFile: PredictionOutput;
  readFiles: Array<PredictionOutput>;
  readFolder: Array<PredictionOutput>;
};


export type MutationReadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationReadFilesArgs = {
  files: Array<Scalars['Upload']['input']>;
};


export type MutationReadFolderArgs = {
  folder: FolderInput;
};

export type PredictionOutput = {
  __typename?: 'PredictionOutput';
  coordinates: Array<Array<Scalars['Int']['output']>>;
  image: Scalars['String']['output'];
  maxConfidenceCoordinate: Array<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  predictionOutput: Scalars['String']['output'];
};

export type FileUploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type FileUploadMutation = { __typename?: 'Mutation', readFile: { __typename?: 'PredictionOutput', image: string, maxConfidenceCoordinate: Array<number> } };


export const FileUploadDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "fileUpload" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "file" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Upload" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "readFile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "file" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "file" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "image" } }, { "kind": "Field", "name": { "kind": "Name", "value": "maxConfidenceCoordinate" } }] } }] } }] } as unknown as DocumentNode<FileUploadMutation, FileUploadMutationVariables>;
export function useFileUploadMutation() {
  return Urql.useMutation<FileUploadMutation, FileUploadMutationVariables>(FileUploadDocument);
};