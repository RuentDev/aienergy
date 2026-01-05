"use server";

import { ApolloLink } from "@apollo/client";
import { getClient } from "@/lib/apollo-server";
import { GET_PAGE } from "@/graphql/page";
import { GetPageQuery } from "@/lib/gql/graphql";
const client = getClient();

export const getPage = async (
  slug?: string
): Promise<ApolloLink.Result<GetPageQuery>> => {
  try {
    const res = await client.query<GetPageQuery>({
      query: GET_PAGE,
      fetchPolicy: "no-cache",
      variables: {
        slug: slug || "",
      },
    });

    return res;
  } catch (error: any) {
    return error.message;
  }
};
