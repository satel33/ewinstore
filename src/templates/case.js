/* eslint-disable jsx-a11y/media-has-caption */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PrismicRichText } from "@prismicio/react"
import Newsletter from "../components/newsletter"
import Achievements from "../components/achievements"
import {
  FacebookShareIcon,
  FeedIcon,
  GoogleShareIcon,
  LinkedinShareIcon,
  PinIcon,
  TwitterShareIcon,
} from "../utils/imgImport"

const CaseDetailPage = ({ data }) => {
  const caseData = data.prismicBusinessCase.data
  const moreCases = data.allPrismicBusinessCase.nodes
  const categories = data.allPrismicCaseCategory.nodes

  return (
    <Layout>
      <section className="article-hero-canvas">
        <div className="article-hero">
          <div className="article-head wow fade-in-top delay-07s">
            <div className="ah-inner">
              <h2>Business Cases:</h2>
              <div className="next-article"></div>
            </div>
          </div>
          <div className="article-intro-room wow fade-in delay-03s">
            <div className="article-intro">
              <div className="d-inline-flex align-items-center">
                <img
                  className="img-white me-2"
                  src={PinIcon}
                  alt={caseData.location}
                />
                <span className="text-white ls-05 fw-semibold text-uppercase">
                  {caseData.location}
                </span>
              </div>

              <h1>{caseData.heading}</h1>
              <div className="others">
                <span className="article-date">23-11-2022</span>
                <span className="text-white mx-2">|</span>
                <a href="#grocery" className="article-cat">
                  {" "}
                  Grocery
                </a>
              </div>
            </div>
          </div>
          <div className="share-article wow fade-in-bottom delay-07s">
            <span>Share this Article:</span>
            <div className="share-links">
              <ul>
                <li>
                  <a href="#feed">
                    <img src={FeedIcon} alt="feed" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.hanshow.com/case/jumbo-and-hanshow-announce-a-new-partnership-to-digitize-over-700-stores"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinShareIcon} alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com/share?url=https://www.hanshow.com/case/jumbo-and-hanshow-announce-a-new-partnership-to-digitize-over-700-stores"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GoogleShareIcon} alt="google" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/share?url=https://www.hanshow.com/case/jumbo-and-hanshow-announce-a-new-partnership-to-digitize-over-700-stores"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TwitterShareIcon} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/sharer.php?u=https://www.hanshow.com/case/jumbo-and-hanshow-announce-a-new-partnership-to-digitize-over-700-stores"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={FacebookShareIcon} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="overlay"></div>

          <img
            className="article-image"
            src={caseData.case_image.url}
            alt="aritcle img"
          />
        </div>
      </section>
      <section className="bcindv-info-canvas">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="bcindv-info-logo px-3 py-5 mb-4">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <img
                  src={caseData.business_logo.url}
                  alt="Jumbo food market company logo.png"
                  width="200"
                  height="56"
                />
              </div>
              <ul>
                {caseData.sector && (
                  <li className="mb-3">
                    <div className="text-highlight text-uppercase">
                      <strong>Sector:</strong>
                    </div>
                    {caseData.sector}
                  </li>
                )}
                {caseData.headquarters && (
                  <li className="mb-3">
                    <div className="text-highlight text-uppercase">
                      <strong>Headquarters:</strong>
                    </div>
                    {caseData.headquarters}
                  </li>
                )}
                {caseData.stores_installed && (
                  <li className="mb-3">
                    <div className="text-highlight text-uppercase">
                      <strong>Stores installed:</strong>
                    </div>
                    {caseData.stores_installed}
                  </li>
                )}
                {caseData.solutions && (
                  <li className="text-highlight mb-3">
                    <strong>
                      <span className="text-uppercase">Solutions:</span>
                    </strong>{" "}
                    <br />
                    <span style={{ color: "#000000" }}>
                      <span className="me-3">{caseData.solutions}</span>
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-md-8">
              <PrismicRichText field={caseData.about_business.richText} />
              <div className="bcindv-info-box p-3 py-5 mt-5 mb-4">
                <PrismicRichText field={caseData.detail.richText} />
              </div>
            </div>
          </div>
          <div className="bcindv-info-vid ratio ratio-16x9">
            <video controls="controls" width="1000" height="500">
              <source src={caseData.intro_video.url} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <div className="bcindv-info-border mx-auto">&nbsp;</div>
      <section className="article-main-canvas">
        <div className="article-main">
          <div className="article-body">
            <PrismicRichText
              field={caseData.content.richText}
              components={{
                preformatted: ({ children }) => (
                  <p className="quote">
                    <span>
                      <em>{children}</em>
                    </span>
                  </p>
                ),
              }}
            />
            {caseData.quote ? (
              <blockquote>
                <p>{caseData.quote}</p>
                <span className="credit">- {caseData.credit}</span>
              </blockquote>
            ) : (
              <>
                <hr />
                <p>
                  <strong>About Hanshow</strong>
                </p>
                <p>
                  Hanshow is a global leader in developing and manufacturing
                  electronic shelf labels and digital store solutions, offering
                  global customers a series of world-class customized IoT
                  touchpoints and digital store solutions that deliver
                  customer-centric insights. Hanshow&rsquo;s solutions are used
                  by over 30,000 stores in more than 50 countries, helping
                  retailers streamline operations, optimize pricing strategies,
                  and offer consumers a more personalized experience.&nbsp;
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* <!-- MORE NEWS --> */}
      <section className="bc-entry-canvas case-studies-canvas">
        <div className="bc-entry">
          <div className="container">
            <div className="case-studies">
              <div className="cs-head">
                <h2>Discover More</h2>
                <a href="../business-cases.html" className="button button-text">
                  Go to Business Cases →
                </a>
              </div>
            </div>

            <div className="row">
              {moreCases.map((item, idx) => (
                <div className="col-md-6" key={idx}>
                  <article className="bc-article">
                    <a href={`/case/${item.uid}`} className="bc-article-thumb">
                      <img
                        src={item.data.case_image.url}
                        alt={item.data.heading}
                      />
                    </a>
                    <h3>
                      <a href={`/case/${item.uid}`}>{item.data.heading}</a>
                    </h3>
                    <p>{item.data.summary}</p>
                    <div className="bc-article-others">
                      <span className="bc-article-date">{item.data.date}</span>{" "}
                      -{" "}
                      {
                        categories.filter(
                          category =>
                            category.uid === item.data.case_category.uid
                        )[0].data.category
                      }
                    </div>
                  </article>
                </div>
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

export default CaseDetailPage

export const query = graphql`
  query PrismicBusinessCase($id: String) {
    allPrismicBusinessCase(limit: 4, sort: { data: { date: DESC } }) {
      nodes {
        uid
        data {
          case_image {
            url
          }
          heading
          summary
          date
          case_category {
            uid
          }
        }
      }
    }
    allPrismicCaseCategory {
      nodes {
        uid
        data {
          category
        }
      }
    }
    prismicBusinessCase(id: { eq: $id }) {
      uid
      data {
        case_category {
          uid
        }
        case_image {
          url
        }
        heading
        summary
        date
        location
        business_logo {
          url
        }
        intro_video {
          url
        }
        about_business {
          richText
        }
        detail {
          richText
        }
        content {
          richText
        }
        sector
        headquarters
        stores_installed
        solutions
        numbers_of_esl_installed
        deployment_date
        referencing_agreement_date
        credit
        quote
      }
    }
  }
`
