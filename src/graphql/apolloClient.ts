import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const graphQLUri = "http://192.168.1.3:4000/graphql";

const httpLink = new HttpLink({ uri: graphQLUri });

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
