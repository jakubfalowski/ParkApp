import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@services/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "../styles/tailwind.css";
import AuthProvider from "@features/auth/context/auth-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
);
