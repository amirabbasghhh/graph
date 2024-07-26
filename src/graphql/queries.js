import { gql } from "@apollo/client";

const GET_BLOGS_INFO=gql`
  query{
  posts{
    id
    slug
    title
    createdAt
    coverPhoto {
      url
    }
    author {
      avatar {
        url
      }
    }
  }
}
`

export {GET_BLOGS_INFO}