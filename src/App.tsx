import { ApolloProvider } from "@apollo/client";
import { ReservationScreen } from "./features/reservation/presentation";
import { Toaster } from "react-hot-toast";
import createApolloClient from "@/graphql";
import { useHostState } from "@/reservation/common/config";

function App() {
  const { hostUrl } = useHostState();

  return (
    <>
      <ApolloProvider client={createApolloClient(hostUrl)}>
        <div className="w-screen h-full bg-gray-100">
          <ReservationScreen />
          <Toaster />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
