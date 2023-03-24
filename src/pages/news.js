import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import Achievements from "../components/achievements"
import { BMGlobal, PinIcon, RightArrowTitleIcon } from "../utils/imgImport"

const NewsPage = ({ data }) => {
  const featuredData = data.allPrismicNews.nodes
    .filter(item => item.data.featured)
    .slice(0, 3)
  const latestPressReleases = data.allPrismicNews.nodes
    .filter(item => item.data.type === "Press Releases")
    .sort((d1, d2) => new Date(d2.data.date) - new Date(d1.data.date))
    .slice(0, 3)

  return (
    <Layout>
      {/* <!-- BLOG FEATURED --> */}
      <section className="blog-featured-canvas">
        <div className="bf">
          <div className="main-featured">
            <div className="title-room wow fade-in-left">
              <h2>News &amp; Blog</h2>
            </div>
            <article>
              <div className="article-intro wow fade-in-bottom delay-05s">
                <Link to={`/news/${featuredData[0].uid}`}>
                  <h3>{featuredData[0].data.title}</h3>

                  <p>{featuredData[0].data.summary}</p>
                </Link>
                <div className="others">
                  <span className="article-date">
                    {" "}
                    {featuredData[0].data.date}
                  </span>
                  -
                  <span className="article-date">
                    {" "}
                    {featuredData[0].data.type}
                  </span>
                </div>
              </div>
              <img
                className="mf-thumb"
                src={featuredData[0].data.thumb_img.url}
                alt={featuredData[0].data.title}
              />
              <Link
                to={`/news/${featuredData[0].uid}`}
                className="article-link"
              ></Link>
              <div className="overlay">&nbsp;</div>
            </article>
          </div>
          <div className="other-featured">
            <div className="of-room">
              <article>
                <div className="article-intro wow fade-in-bottom delay-05s">
                  <Link to={`/news/${featuredData[1].uid}`}>
                    <h3>{featuredData[1].data.title}</h3>
                  </Link>
                  <div className="others">
                    <span className="article-date">
                      {featuredData[1].data.date}
                    </span>
                    -
                    <span className="article-date">
                      {featuredData[1].data.type}
                    </span>
                  </div>
                </div>
                <img
                  className="of-thumb"
                  src={featuredData[1].data.thumb_img.url}
                  alt={featuredData[1].data.title}
                />
                <Link
                  to={`/news/${featuredData[1].uid}`}
                  className="article-link"
                ></Link>
                <div className="overlay">&nbsp;</div>
              </article>
            </div>
            <div className="of-room">
              <article>
                <div className="article-intro wow fade-in-bottom delay-05s">
                  <Link to={`/news/${featuredData[1].uid}`}>
                    <h3>{featuredData[1].data.title}</h3>
                  </Link>
                  <div className="others">
                    <span className="article-date">
                      {featuredData[2].data.date}
                    </span>
                    -
                    <span className="article-date">
                      {featuredData[2].data.type}
                    </span>
                  </div>
                </div>
                <img
                  className="of-thumb"
                  src={featuredData[2].data.thumb_img.url}
                  alt={featuredData[2].data.title}
                />
                <Link
                  to={`/news/${featuredData[1].uid}`}
                  className="article-link"
                ></Link>
                <div className="overlay">&nbsp;</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BLOG MAIN GLOBAL --> */}
      <section className="bm-global-canvas">
        <div className="bm-global">
          <div className="big-head bmg-title wow fade-in-top delay-1s">
            <h1>Global</h1>
          </div>
          <img
            className="bm-global wow fade-in-bottom delay-1s"
            src={BMGlobal}
            alt="global"
          />
        </div>
      </section>

      {/* <!-- BLOG ARTICLES --> */}
      <section className="blog-articles-canvas">
        <div className="container">
          <div className="blog-articles">
            {data.allPrismicNews.nodes.slice(0, 9).map((item, idx) => (
              <article key={idx}>
                <div className="article-location">
                  <img src={PinIcon} alt="Netherlands" />
                  {item.data.location}
                </div>
                <Link to={`/news/${item.uid}`} className="article-thumb">
                  <img src={item.data.thumb_img.url} alt={item.data.title} />
                </Link>
                <h3>
                  <Link to={`/news/${item.uid}`}>{item.data.title}</Link>
                </h3>
                <p>{item.data.summary}</p>
                <div className="others">
                  <span className="article-date">{item.data.date}</span>-{" "}
                  {item.data.type}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- PRESS REALEASE --> */}
      <section className="press-releases-canvas">
        <div className="big-head pr-title wow fade-in-top delay-1s">
          <h1>Latest</h1>
        </div>
        <div className="container">
          <div className="pr">
            <div className="title-room">
              <h2>
                <img src={RightArrowTitleIcon} alt="Press Releases" />
                Press Releases
              </h2>
            </div>
            <div className="latest-news news-section-loadmore">
              {latestPressReleases.map((item, idx) => (
                <article className="wow fade-in-left" key={idx}>
                  <img
                    className="article-thumb"
                    src={item.data.thumb_img.url}
                    alt={item.data.title}
                  />
                  <div className="article-intro">
                    <h3>{item.data.title}</h3>
                    <span className="article-date">{item.data.date}</span>
                  </div>
                  <Link className="article-link" to={`/news/${item.uid}`}>
                    &nbsp;
                  </Link>
                </article>
              ))}
            </div>
            <div className="loadmore-section">
              <div className="loadmore-room">
                <a
                  className="button button-white bordered loadmore"
                  href="#load"
                >
                  Load More ⟶
                </a>
              </div>
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
    allPrismicNews(sort: { data: { date: DESC } }) {
      nodes {
        _previewable
        data {
          title
          summary
          thumb_img {
            url
          }
          location
          featured
          date
          type
        }
        uid
      }
    }
  }
`

export default NewsPage
