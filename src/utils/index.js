import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { RetryLink } from "apollo-link-retry";

const getLink = (uri) =>
  ApolloLink.from([
    new RetryLink({
      delay: {
        initial: 500,
        max: Infinity,
        jitter: true
      },
      attempts: {
        max: 3,
        retryIf: (error) => {
          return !!error
        }
      }
    }),
    new BatchHttpLink({ uri }),
  ]);

export const createApolloClient = (url, cache = new InMemoryCache()) =>
  new ApolloClient({
    cache,
    defaultOptions: {
      mutate: {
        errorPolicy: "all",
      },
      query: {
        errorPolicy: "all",
        fetchPolicy: "network-only",
      },
      watchQuery: {
        errorPolicy: "all",
        fetchPolicy: "cache-and-network",
      },
    },
    link: getLink(url),
  });
