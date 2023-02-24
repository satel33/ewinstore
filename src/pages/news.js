import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const NewsPage = ({ data }) => {
  console.log(data.allPrismicNews)
  return <Layout></Layout>
}

export const pageQuery = graphql`
  query {
    allPrismicNews(sort: { data: { date: DESC } }) {
      nodes {
        data {
          title
          date
          thumb_img {
            url
          }
        }
        uid
      }
    }
  }
`

export default NewsPage
