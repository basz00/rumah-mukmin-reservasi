import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: import.meta.env.VITE_API_URL }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
