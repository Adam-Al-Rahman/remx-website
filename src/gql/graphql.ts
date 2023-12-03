/* eslint-disable */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
