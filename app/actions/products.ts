"use server";

import { getClient } from "@/lib/apollo-server";
import PRODUCT_OPERATIONS from "@/graphql/products";
import {
  GetStoreProductsQuery,
  GetStoreProductsQueryVariables,
} from "@/lib/gql/graphql";
import { ApolloLink } from "@apollo/client";

const client = getClient();

export const getStoreProducts = async (
  variables?: GetStoreProductsQueryVariables
): Promise<ApolloLink.Result<GetStoreProductsQuery>> => {
  const res = await client.query({
    query: PRODUCT_OPERATIONS.Query.storeProducts,
    fetchPolicy: "no-cache",
    variables,
  });

  return res;
};

export const getAdminProducts = async (
  variables?: GetStoreProductsQueryVariables
): Promise<ApolloLink.Result<GetStoreProductsQuery>> => {
  const res = await client.query({
    query: PRODUCT_OPERATIONS.Query.adminProducts,
    variables,
  });

  return res;
};
