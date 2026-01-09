import { graphql } from "@/lib/gql";

const schema = {
  Query: {
    storeProducts: graphql(`
      query GetStoreProducts(
        $filters: ProductFiltersInput
        $pagination: PaginationArg
        $sort: [String]
      ) {
        products(filters: $filters, pagination: $pagination, sort: $sort) {
          documentId
          name
          description
          handle
          product_type
          model
          odoo_product_id
          odoo_product_name
          brand {
            documentId
            name
            url
            handle
            image {
              documentId
              name
              alternativeText
              url
            }
          }
          collections {
            documentId
            title
            handle
          }
          tags {
            documentId
            tag
          }
          images {
            documentId
            name
            alternativeText
            url
          }
          inventory {
            documentId
            melbourne
            sydney
            brisbane
          }
          price_lists {
            comparePrice
            price
            max_quantity
            min_quantity
            user_level
          }
          shipping {
            documentId
            height
            width
            length
            weight
          }
          maxQuantity
          maxQuantityForLargeShipment
          createdAt
          updatedAt
          releasedAt
        }
      }
    `),
    adminProducts: graphql(`
      query GetAdminProducts(
        $filters: ProductFiltersInput
        $pagination: PaginationArg
        $sort: [String]
      ) {
        products(filters: $filters, pagination: $pagination, sort: $sort) {
          documentId
          name
          description
          handle
          product_type
          model
          odoo_product_id
          odoo_product_name
          brand {
            documentId
            name
            url
            handle
          }
          tags {
            documentId
            tag
          }
          images {
            documentId
            name
            alternativeText
            url
          }
          inventory {
            documentId
            melbourne
            sydney
            brisbane
          }
          price_lists {
            comparePrice
            price
            max_quantity
            min_quantity
            user_level
          }
          maxQuantity
          maxQuantityForLargeShipment
          createdAt
          updatedAt
          releasedAt
          madeBy {
            name
          }
        }
      }
    `),
  },
  Mutation: {
    deleteProduct: graphql(`
      mutation DeleteProduct($documentId: ID!) {
        deleteProduct(documentId: $documentId) {
          documentId
        }
      }
    `),
    updateProduct: graphql(`
      mutation UpdateProduct($documentId: ID!, $data: ProductInput!) {
        updateProduct(documentId: $documentId, data: $data) {
          documentId
          releasedAt
        }
      }
    `),
  },
};

export default schema;
