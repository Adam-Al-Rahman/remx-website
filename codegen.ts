import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost/api', // change the url in future
  documents: ['src/**/*.{tsx, ts}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ["typescript-operations", "typescript-urql"],
    },
  },
};

export default config;