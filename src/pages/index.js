import * as React from "react"
import { graphql, Link } from "gatsby"
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/layout"
import Achievements from "../components/achievements"
import DidYouKnow from "../components/home/dyk"
import HomeHero from "../components/home/home-hero"
import Partners from "../components/home/partners"
import Solutions from "../components/home/solutions"
import Testimonials from "../components/home/testimonials"
import WorldLogos from "../components/home/world-logos"
import Newsletter from "../components/newsletter"

const IndexPage = ({ data }) => {
  const case_studies = data.allPrismicBusinessCase.nodes
  const latest_news = data.allPrismicNews.nodes

  return (
    <Layout>
      <HomeHero />
      <DidYouKnow />
      <WorldLogos />
      <Solutions />
      <Testimonials />
      <Partners />

      {/* Latest Case Studies */}
      <section className="case-studies-canvas">
        <div className="container">
          <div className="case-studies">
            <div className="cs-head">
              <h2>CASE STUDIES</h2>
              <Link to="/business-cases" className="button button-text">
                Go to Case Studies ⟶
              </Link>
            </div>
            <div className="cs-articles">
              <div className="row">
                {case_studies.map(item => (
                  <div className="col-xs-12 col-md-4" key={item.uid}>
                    <article>
                      <Link to={`case/${item.uid}`} className="cs-thumb">
                        <img
                          className="lazyload"
                          data-src={item.data.case_image.url}
                          alt={item.data.heading}
                        />
                      </Link>
                      <h3>
                        <Link to={`/case/${item.uid}`}>
                          {item.data.heading}
                        </Link>
                      </h3>
                      <p>{item.data.summary}</p>
                      <span className="article-date">{item.data.date}</span>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news-canvas">
        <div className="container">
          <div className="latest-news">
            <div className="ln-corner">
              <div className="ln-intro-room">
                <div className="ln-intro wow fade-in-left delay-06s">
                  <h2>LATEST NEWS</h2>
                  <Link to="/news" className="button button-text">
                    Go to News &amp; Blog ⟶
                  </Link>
                </div>
              </div>
            </div>
            <div className="ln-articles">
              {latest_news.map(item => (
                <article className="wow fade-in-left  " key={item.uid}>
                  <div className="article-intro">
                    <h3>{item.data.title}</h3>
                    <span className="article-date">{item.data.date}</span>
                  </div>
                  <div className="white-overlay">&nbsp;</div>
                  <img
                    className="article-thumb lazyload"
                    data-src={item.data.thumb_img.url}
                    alt={item.data.title}
                  />
                  <Link className="article-link" to={`/news/${item.uid}`}>
                    &nbsp;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Achievements />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPrismicBusinessCase(sort: { data: { date: DESC } }, limit: 3) {
      nodes {
        data {
          case_image {
            url
          }
          heading
          summary
          date
        }
        uid
      }
    }
    allPrismicNews(sort: { data: { date: DESC } }, limit: 3) {
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

export default withPrismicPreview(IndexPage)
