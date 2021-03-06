import { gql } from '@apollo/client'

const CATEGORY_ARTICLE_QUERY = gql`
    query Category($id: ID!) {
        category(id:$id) {
            name
            articles {
              id
              title
              content
              image {
                url
              }
              category {
                id
                name
              }
            }
        }
    }
`

export default CATEGORY_ARTICLE_QUERY