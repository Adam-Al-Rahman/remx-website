import { DocumentNode } from 'graphql';

import { gql } from '@urql/core'; // Import from '@urql/core' or appropriate package

// Define the GraphQL mutation as a DocumentNode
export const UploadFiles: DocumentNode = gql`
  mutation filesUpload($files: [Upload!]!) {
    readFiles(files: $files) {
      image
      maxConfidenceCoordinate
    }
  }
`;

