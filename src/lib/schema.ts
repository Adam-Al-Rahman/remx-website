import { DocumentNode } from 'graphql';

import { gql } from '@urql/core'; // Import from '@urql/core' or appropriate package
import { graphql } from '@/gql';


// TODO(Adam-Al-Rahman): write using graphql() from @/gql
export const UploadFiles: DocumentNode = gql`
  mutation filesUpload($files: [Upload!]!) {
    readFiles(files: $files) {
      image
      maxConfidenceCoordinate
    }
  }
`;

