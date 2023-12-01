
import { cacheExchange, createClient, fetchExchange } from '@urql/core';

const makeClient = () => {
  return createClient({
    url: 'http://localhost/api',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: { cache: "no-store" },
  });
};


export default makeClient;
