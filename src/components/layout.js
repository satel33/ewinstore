import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix, Script, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { nav_cases, nav_news } = useStaticQuery(graphql`
    query {
      nav_cases: allPrismicBusinessCase(
        filter: { data: { is_featured: { eq: true } } }
      ) {
        nodes {
          uid
          data {
            featured_client
            case_category {
              uid
            }
          }
        }
      }
      nav_news: allPrismicNews(sort: { data: { date: DESC } }, limit: 2) {
        nodes {
          uid
          data {
            thumb_img {
              url
            }
            title
            date
            type
            summary
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
        <script
          src={withPrefix("js/ewinstore.min.js")}
          type="text/javascript"
        />
      </Helmet>
      <Header navCases={nav_cases.nodes} navNews={nav_news.nodes[0]} />
      <main>{children}</main>
      <Footer navNews={nav_news.nodes} />
      <div className="back-to-top" style={{ display: "block" }}>
        <span className="back-to-top-text">Back to Top</span>
        <span className="back-to-top-box">↑</span>
      </div>
    </>
  )
}

export default Layout
