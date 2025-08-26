import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@services/client";
import LoginPage from "@features/auth/pages/LoginPage";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <LoginPage />
      </ApolloProvider>
    </BrowserRouter>
  );
}
