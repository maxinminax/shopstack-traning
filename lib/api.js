import { GraphQLClient } from 'graphql-request'

const API_URL = 'https://demo-mgtce-235.vinobe.com/graphql'

const graphQLClient = new GraphQLClient(API_URL, { headers: {} })

export const getCategoryList = async () => {
// export async function getCategoryList() {
  const QUERY = `
    {
      categoryList {
        id
        name
        children {
          id
          name
        }
      }
    }
  `

  // return client.request(QUERY).then(({ categoryList }) => categoryList)
  // return client.request(QUERY).then((result) => {
  //   return result.categoryList
  // })
  const { categoryList } = await graphQLClient.request(QUERY);
  return categoryList
}

export const getCategory = async (params) => {
  const QUERY = `
    query (
      $categoryId: String!,
      $currentPage: Int,
      $pageSize: Int
    ) {
      categoryList(filters: {ids: {eq: $categoryId}}) {
        id
        level
        name
        description
        path
        url_path
        url_key
        products(pageSize: $pageSize, currentPage: $currentPage) {
          page_info {
            current_page
            page_size
            total_pages
          }
          total_count
          items {
            id
            name
            meta_description
            price_range {
              maximum_price {
                final_price {
                  value
                  currency
                }
              }
              minimum_price {
                final_price {
                  value
                  currency
                }
              }
            }
            thumbnail {
              label
              url
            }
          }
        }
      }
    }
  `
  return (await graphQLClient.request(QUERY, params)).categoryList[0]
}