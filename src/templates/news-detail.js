import * as React from "react"
import { graphql, Link } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

import Layout from "../components/layout"
import Newsletter from "../components/newsletter"
import {
  FacebookShareIcon,
  FeedIcon,
  GoogleShareIcon,
  LinkedinShareIcon,
  TwitterShareIcon,
} from "../utils/imgImport"

const NewsDetailPage = ({ data }) => {
  const { newsData, newsList } = data

  return (
    <Layout>
      {/* <!-- ARTICLE HERO --> */}
      <section className="article-hero-canvas">
        <div className="article-hero">
          <div className="article-head wow fade-in-top delay-07s">
            <div className="ah-inner">
              <h2>News &amp; Blog</h2>
              <div className="next-article">
                {/* <span>&gt;&gt; Next Article: </span>
                <a href="hanshow-celebrates-two-years-of-aiot-innovation-with-microsoft.html">
                  {newsData.data.title}
                </a> */}
              </div>
            </div>
          </div>
          <div className="article-intro-room wow fade-in delay-03s">
            <div className="article-intro">
              <h1>{newsData.data.title}</h1>
              <div className="others">
                <span className="article-date">{newsData.data.date}</span>-
                <a href={`#${newsData.data.type}`} className="article-cat">
                  {" "}
                  {newsData.data.type}
                </a>
                -<span className="article-author"> Hanshow</span>
              </div>
            </div>
          </div>
          <div className="share-article wow fade-in-bottom delay-07s">
            <span>Share this article:</span>
            <div className="share-links">
              <ul>
                <li>
                  <a href="#feed">
                    <img src={FeedIcon} alt="feed" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.hanshow.com/news/aeon-set-to-open-its-first-%E2%80%9Csmart-store%E2%80%9D,-featuring-ai-technology-from-hanshow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinShareIcon} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/share?url=https://www.hanshow.com/news/aeon-set-to-open-its-first-%E2%80%9Csmart-store%E2%80%9D,-featuring-ai-technology-from-hanshow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GoogleShareIcon} alt="google" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/share?url=https://www.hanshow.com/news/aeon-set-to-open-its-first-%E2%80%9Csmart-store%E2%80%9D,-featuring-ai-technology-from-hanshow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TwitterShareIcon} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/sharer.php?u=https://www.hanshow.com/news/aeon-set-to-open-its-first-%E2%80%9Csmart-store%E2%80%9D,-featuring-ai-technology-from-hanshow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={FacebookShareIcon} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="overlay">&nbsp;</div>
          <img
            className="article-image"
            src={newsData.data.article_img.url}
            alt="article"
          />
        </div>
      </section>

      {/* <!-- ARTICLE MAIN --> */}
      <section className="article-main-canvas">
        <div className="article-main">
          <div className="article-body">
            <PrismicRichText field={newsData.data.content.richText} />
          </div>
        </div>
      </section>

      {/* <!-- MORE NEWS --> */}
      <section className="case-studies-canvas">
        <div className="container">
          <div className="case-studies">
            <div className="cs-head">
              <h2>More News:</h2>
              <Link to="/news" className="button button-text">
                Go to News ⟶
              </Link>
            </div>
            <div className="cs-articles">
              <div className="row">
                {newsList.nodes.map((article, idx) => (
                  <div className="col-xs-12 col-md-3" key={idx}>
                    <article>
                      <Link to={`/news/${article.uid}`} className="cs-thumb">
                        <img
                          src={article.data.thumb_img.url}
                          alt={article.data.title}
                        />
                      </Link>
                      <h3>
                        <Link to={`/news/${article.uid}`}>
                          {article.data.title}
                        </Link>
                      </h3>
                      <p>{article.data.summary}</p>
                      <span className="article-date">{article.data.date}</span>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicNewsDetail($id: String) {
    newsData: prismicNews(id: { eq: $id }) {
      uid
      _previewable
      data {
        title
        type
        date
        article_img {
          url
        }
        content {
          richText
        }
      }
    }
    newsList: allPrismicNews(limit: 3, sort: { data: { date: DESC } }) {
      nodes {
        uid
        _previewable
        data {
          title
          summary
          thumb_img {
            url
          }
          date
        }
      }
    }
  }
`

export default withPrismicPreview(NewsDetailPage)
