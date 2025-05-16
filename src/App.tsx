import createApolloClient from "@/graphql";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { ReservationScreen } from "./features/reservation/presentation";

function App() {
  return (
    <>
      <ApolloProvider client={createApolloClient()}>
        <div className="w-screen h-full bg-gray-100">
          <ReservationScreen />
          <Toaster />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
