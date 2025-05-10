import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = (hostUrl: string) => {
  return new ApolloClient({
    link: new HttpLink({ uri: hostUrl }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
