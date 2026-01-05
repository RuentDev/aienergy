import { graphql } from "@/lib/gql";

export const GET_PAGE = graphql(`
  query GetPage($slug: String!) {
    getPage(slug: $slug) {
      documentId
      title
      slug
      sections {
        ... on ComponentSectionsImageSlider {
          id
          animation_duration
          display_button
          slides {
            id
            title
            description
            link
            image {
              name
              alternativeText
              url
            }
            type
          }
        }
        ... on ComponentSectionsWarehouseLocations {
          id
          heading
          sub_heading
          locations {
            id
            address
            warehouse_time
            office_time
            google_maps_link
            name
          }
        }
        ... on ComponentSectionsContactUs {
          id
          heading
          description
          button_title
          background_image {
            name
            alternativeText
            url
          }
        }
        ... on ComponentSectionsContactDetails {
          id
          left_heading
          left_sub_heading
          right_heading
          right_sub_heading
        }
        ... on ComponentSectionsAbout {
          id
          heading
          sub_heading
          description
          button_title
          background_image {
            name
            alternativeText
            url
          }
        }
        ... on ComponentSectionsCategoryButtonSection {
          id
          heading
          sub_heading
          categories {
            heading
            sub_heading
            icon_name
            custom_icon {
              url
            }
            slug
          }
        }
        ... on ComponentSectionsStoreFeatureGrid {
          id
          features {
            id
            heading
            sub_heading
            icon_name
            custom_icon {
              url
            }
          }
        }
        ... on ComponentFormNewsletter {
          id
          heading
          sub_heading
          inputs {
            id
            label
            type
            placeholder
            required
          }
          sub_text
          button_title
          image {
            name
            alternativeText
            url
          }
        }
        ... on ComponentFormInquiry {
          id
          heading
          button_title
          inputs {
            id
            label
            type
            placeholder
            required
          }
        }
        ... on ComponentSectionsFeaturedProducts {
          id
          heading
          sub_heading
          slug
        }
        ... on Error {
          code
          message
        }
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`);
