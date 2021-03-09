import { gql } from '@apollo/client'

const ARTICLES_QUERY = gql`
    query Articles {
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
`

export default ARTICLES_QUERY