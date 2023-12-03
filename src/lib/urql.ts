
import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: 'http://localhost/api',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: { cache: "no-store", next: { tags: ["api"] } },
  });
};

export const { getClient } = registerUrql(makeClient);
