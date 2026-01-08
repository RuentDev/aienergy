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
          files {
            documentId
            name
            alternativeText
            url
          }
          images {
            documentId
            name
            alternativeText
            url
          }
          specifications {
            documentId
            key
            value
          }
          key_features {
            documentId
            feature
          }
          inventory {
            documentId
            melbourne
            sydney
            brisbane
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
          files {
            documentId
            name
            alternativeText
            url
          }
          images {
            documentId
            name
            alternativeText
            url
          }
          specifications {
            documentId
            key
            value
          }
          key_features {
            documentId
            feature
          }
          inventory {
            documentId
            melbourne
            sydney
            brisbane
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
  },
};

export default schema;
