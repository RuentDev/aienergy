import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { SetContextLink } from "@apollo/client/link/context";
import { HttpLink, ApolloLink } from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";
// import { removePersistence } from '@/store/store';

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === "development") {
  loadDevMessages();
  loadErrorMessages();
}

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const protocol = process.env.NEXT_PUBLIC_BASE_PROTOCOL;
  const host = process.env.NEXT_PUBLIC_BASE_URL_HOST;

  const httpLink = new HttpLink({
    uri: `${protocol}://${host}/graphql`,
    credentials: "include",
  });

  const authLink = new SetContextLink((prevContext, _) => {
    return {
      headers: {
        ...prevContext.headers,
      },
    };
  });

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

  const handleSessionExpiry = async () => {
    console.log("Session expired - initiating automatic logout");

    try {
      const fetchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!fetchResponse.ok) {
        throw new Error(`Logout request failed: ${fetchResponse.status}`);
      }

      const fetchData = await fetchResponse.json();
      console.log("Logout successful:", fetchData);

      // await removePersistence();

      if (typeof window !== "undefined") {
        const apolloClient = getClient();
        await apolloClient.clearStore();
      }

      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    } catch (error) {
      console.error("Error during automatic logout:", error);

      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/auth/login";
      }
    }
  };

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    devtools: {
      enabled: process.env.NODE_ENV === "development",
    },
  });
});
