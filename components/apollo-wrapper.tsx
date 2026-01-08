"use client";

import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { SetContextLink } from "@apollo/client/link/context";
import { ErrorLink } from "@apollo/client/link/error";
import { ApolloLink, HttpLink } from "@apollo/client";

const PROTOCOL = process.env.NEXT_PUBLIC_BASE_PROTOCOL;
const HOST = process.env.NEXT_PUBLIC_BASE_URL_HOST;

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}

function makeClient() {
  const uri = `${PROTOCOL}://${HOST}/graphql`;
  const httpLink = new HttpLink({
    uri,
  });

  const authLink = new SetContextLink((prevContext, _) => {
    let token: string | undefined = undefined;
    if (window !== undefined) {
      token =
        typeof window !== "undefined"
          ? document.cookie
              .split("; ")
              .find((row) => row.startsWith("auth_token="))
              ?.split("=")[1]
          : undefined;
    } else {
      token = "";
    }

    const headers = {
      ...prevContext.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    return {
      headers,
    };
  });

  const handleSessionExpiry = async () => {
    try {
      const baseUrl = window.location.origin;

      const fetchResponse = await fetch(`${baseUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!fetchResponse.ok) {
        throw new Error(`Logout request failed: ${fetchResponse.status}`);
      }

      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Error during automatic logout:", error);
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/auth/login";
    }
  };

  const errorLink = new ErrorLink((errorHandler: any) => {
    const { graphQLErrors, networkError } = errorHandler;
    if (graphQLErrors) {
      graphQLErrors.forEach(
        (error: { message: string; locations?: unknown; path?: unknown }) => {
          console.log(
            `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
          );
        }
      );
    }

    if (networkError) {
      if ("statusCode" in networkError && networkError.statusCode === 401) {
        handleSessionExpiry();
      }
    }
  });

  // return new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: ApolloLink.from([errorLink, authLink, httpLink]),
  //   devtools: {
  //     enabled: process.env.NODE_ENV === "development",
  //   },
  // });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    devtools: {
      enabled: process.env.NODE_ENV === "development",
    },
  });
}

export function ApolloClientWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
