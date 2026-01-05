import { graphql } from '@/lib/gql';
import { gql } from '@apollo/client';

const schema = {
  Mutation: {},
  Query: {
    collections: graphql(`
      query Collections($filters: CollectionFiltersInput) {
        collections(filters: $filters) {
          documentId
          title
          handle
          image {
            documentId
            name
            alternativeText
            url
          }
        }
      }
    `),
    collectionsWithProducts: gql(`
      query CollectionsWithProducts( 
        $collectionsFilters: CollectionFiltersInput, 
        $productsFilters: ProductFiltersInput, 
        $productsPagination: PaginationArg, 
        $productsSort: [String]
      ) {
        collections(filters: $collectionsFilters) {
          documentId
          handle
          image {
            name
            alternativeText
            url
          }
          productFilters {
            id
            title
            handle
          }
          products_connection(
            filters: $productsFilters,
            pagination: $productsPagination,
            sort: $productsSort
          ) 
        {
          nodes  {
            documentId
            name
            description
            handle
            product_type
            model
            brand {
              documentId
              name
              url
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
            createdAt
            updatedAt
            releasedAt
          }
        }
        }
      }
    `),
    authCollectionsWithProducts: gql(`
      query AuthCollectionsWithProducts( 
        $collectionsFilters: CollectionFiltersInput, 
        $productsFilters: ProductFiltersInput, 
        $productsPagination: PaginationArg, 
        $productsSort: [String],
        $priceSort: [String],
      ) {
        collections(filters: $collectionsFilters) {
          documentId
          handle
          image {
            name
            alternativeText
            url
          }
          productFilters {
            id
            title
            handle
          }
          products_connection(
            filters: $productsFilters,
            pagination: $productsPagination,
            sort: $productsSort
          ) 
        {
          nodes  {
            documentId
            name
            description
            handle
            product_type
            model
            brand {
              documentId
              name
              url
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
            price_lists (sort: $priceSort) {
              documentId
              price
              comparePrice
              min_quantity
              max_quantity
              user_level
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
            createdAt
            updatedAt
            releasedAt
          }
        }
        }
      }
    `),
  },
};

export default schema;
