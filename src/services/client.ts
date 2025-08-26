import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { authStorage } from "./auth-storage";

const httpLink = new HttpLink({
  uri: "/api",
  credentials: "include",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = authStorage.get();
  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: { ...headers, Authorization: `Bearer ${token}` },
    }));
  }
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors?.length) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === "UNAUTHENTICATED") {
        authStorage.clear();
      }
      console.error(`[GraphQL error] op=${operation.operationName}`, err);
    }
  }
  if (networkError) {
    console.error(`[Network error]`, networkError);
  }
});

const retryLink = new RetryLink({
  delay: { initial: 300, max: 2000, jitter: true },
  attempts: {
    max: 2,
    retryIf: (error) => !!error && navigator.onLine,
  },
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([retryLink, errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: { fields: {} },
    },
  }),
});
