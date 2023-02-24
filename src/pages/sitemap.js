import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { getCasesWithCategory } from "../utils/helpers"

const SitemapPage = ({ data }) => {
  const categories = data.allPrismicCaseCategory.nodes
  const case_studies = data.allPrismicBusinessCase.nodes

  return (
    <Layout>
      <section className="sitemap-canvas">
        <div className="container">
          <h1 className="mb-4">Hanshow Site Map</h1>
          <hr className="mt-3 mb-5" />
          <h2>
            <a href="/solutions/category/electronic-shelf-labels">Solutions</a>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <h3>
                <a href="/solutions/category/electronic-shelf-labels">
                  ELECTRONIC SHELF LABELS
                </a>
              </h3>
              <ul>
                <li>
                  <ul>
                    <li>
                      <a href="/nebular">NEBULAR</a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="/stellar-pro">STELLAR PRO</a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="/lumina-aqua">LUMINA AQUA</a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>
                <a href="/solutions/category/intelligent-store">
                  INTELLIGENT STORE
                </a>
              </h3>
              <ul>
                <li>
                  In-store Marketing
                  <ul>
                    <li>
                      <a href="/lumina-aqua">LUMINA AQUA</a>
                    </li>
                    <li>
                      <a href="/lumina-edge">LUMINA MAX / EDGE</a>
                    </li>
                  </ul>
                </li>
                <li>
                  Payment Solutions
                  <ul>
                    <li>
                      <a href="/smart-trolley">SMART TROLLEY</a>
                    </li>
                    <li>
                      <a href="/self-service-kiosk">SELF-SERVICE TERMINAL</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>
                <a href="/solutions/category/ai-plus-solutions">
                  AIOT Solution
                </a>
              </h3>
              <ul>
                <li>
                  <ul>
                    <li>
                      <a href="/spatrol">Inventory Robot</a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href="/visight">Planogram AI Camera</a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
              </ul>
              <h3>
                <a href="/solutions/category/all-star-cloud">
                  HANSHOW IOT CLOUD
                </a>
              </h3>
              <ul>
                <li>
                  <ul>
                    <li>
                      <a href="/solutions/category/all-star-cloud">
                        ALL STAR Platform
                      </a>
                    </li>
                  </ul>
                  <ul></ul>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <h2>
            <a href="/business-cases">Business Cases</a>
          </h2>
          <div className="row">
            <div className="col-md-4">
              <h3>
                <a href="/business-cases#grocery">GROCERY</a>
              </h3>
              <ul>
                <li>
                  Featured Client Case Studies
                  <ul>
                    {getCasesWithCategory(case_studies, "grocery").map(item => (
                      <li key={item.uid}>
                        <Link to={`/case/${item.uid}`}>
                          {item.data.featured_client}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>
                <a href="business-cases#electronics">Consumer Electronics</a>
              </h3>
              <ul>
                <li>
                  Featured Client Case Studies
                  <ul>
                    {getCasesWithCategory(case_studies, "electronics").map(
                      item => (
                        <li key={item.uid}>
                          <Link to={`/case/${item.uid}`}>
                            {item.data.featured_client}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
              <h3>
                <a href="business-cases#diy">DIY</a>
              </h3>
              <ul>
                <li>
                  Featured Client Case Studies
                  <ul>
                    {getCasesWithCategory(case_studies, "diy").map(item => (
                      <li key={item.uid}>
                        <Link to={`/case/${item.uid}`}>
                          {item.data.featured_client}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>
                <a href="business-cases#drug-store">DRUG STORE</a>
              </h3>
              <ul>
                <li>
                  Featured Client Case Studies
                  <ul>
                    <li>
                      <a href="/#">PHARMAGEST</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>
                <a href="business-cases#manufacturing">MANUFACTURING</a>
              </h3>
              <ul>
                <li>
                  Featured Client Case Studies
                  <ul>
                    {getCasesWithCategory(case_studies, "manufacturing").map(
                      item => (
                        <li key={item.uid}>
                          <Link to={`/case/${item.uid}`}>
                            {item.data.featured_client}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <h2>
            <a href="/news">Newsroom</a>
          </h2>
          <ul>
            <li>
              <a href="/news">Press Releases</a>
            </li>
            <li>
              <a href="/news">Blog</a>
            </li>
          </ul>
          <hr />
          <h2>
            <a href="/company">Company</a>
          </h2>
          <ul>
            <li>
              <a href="/company">About Hanshow</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
          </ul>
          <hr />
          <h2>
            <a href="/business-cases" className="contact-link">
              Business Cases
            </a>
          </h2>
          <ul>
            {categories.map(item => (
              <li key={item.uid}>
                <Link to={`/business-cases#${item.uid}`}>
                  {item.data.category}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <h2>
            <a href="/contact" className="contact-link">
              Contact
            </a>
          </h2>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPrismicCaseCategory {
      nodes {
        data {
          category
        }
        uid
      }
    }
    allPrismicBusinessCase(filter: { data: { is_featured: { eq: true } } }) {
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
  }
`

export default SitemapPage
