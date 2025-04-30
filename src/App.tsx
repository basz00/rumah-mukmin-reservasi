import { ApolloProvider } from "@apollo/client";
import { ReservationScreen } from "./features/reservation/presentation";
import apolloClient from "./graphql/apolloClient";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ReservationScreen />
        <Toaster />
      </ApolloProvider>
    </>
  );
}

export default App;
