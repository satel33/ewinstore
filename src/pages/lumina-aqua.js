/* eslint-disable jsx-a11y/media-has-caption */

import React, { useState } from "react"
import { graphql } from "gatsby"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import loadable from "@loadable/component"
import $ from "jquery"

import Layout from "../components/layout"
import {
  LuminaAquaIntro,
  LuminaBenefits1,
  LuminaBenefits2,
  LuminaBenefits3,
  LuminaBenefits4,
  LuminaFeatures,
  ModelImg1,
  ModelImg2,
  ModelImg3,
  ModelImg4,
  PinIcon,
} from "../utils/imgImport"
import { getCasesWithCategory } from "../utils/helpers"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const LuminaAquaPage = ({ data }) => {
  const case_studies = data.allPrismicBusinessCase.nodes
  const case_categories = data.allPrismicCaseCategory.nodes

  const [selectedCategory, setCategory] = useState(case_categories[0])
  return (
    <Layout>
      {/* <!-- MAIN HERO --> */}
      <section className="main-hero-canvas">
        <div className="main-hero">
          <div className="mh-video-bg-room">
            {" "}
            <video
              className="main-hero-video"
              autoPlay="autoplay"
              loop="loop"
              muted=""
              width="100%"
              height="auto"
            >
              <source
                src="https://www.hanshow.com/storage/videos/lumina-aqua-bg.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mh-volume-toggle">&nbsp;</div>
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <li>
            <a id="x-1" href="#introduction">
              Introduction
            </a>
          </li>
          <li>
            <a id="x-2" href="#models">
              Models
            </a>
          </li>
          <li>
            <a id="x-3" href="#features">
              Features
            </a>
          </li>
          <li>
            <a id="x-4" href="#benefits">
              Benefits to Clients
            </a>
          </li>
          <li>
            <a id="x-5" href="#usecases">
              Use Cases
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- INTRODUCTION --> */}
      <section id="introduction" className="lumina-aqua-introduction-canvas">
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Lumina</h1>
        </div>
        <div className="container">
          <div className="lumina-aqua-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div className="tab-pane show active" role="tabpanel">
                  <div className="spr-room">
                    <div className="intro">
                      <img
                        className="wow fade-in-top delay-1s"
                        src={LuminaAquaIntro}
                        alt=""
                      />
                      <h2 className="wow fade-in-left delay-1s">
                        Lumina | LCD ESL
                      </h2>
                      <div className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-1s">
                        <div className="item">
                          <p>
                            A truly one-of-a-kind electronic shelf label, Lumina
                            supports vivid displays on an LCD screen that
                            instantly enlivens retail settings.
                          </p>
                          <p>
                            Where traditional ESL use ePaper displays powered
                            from batteries, Hanshow's Lumina series is electric
                            powered providing endless bright and dynamic content
                            display options. This allows one screen to deliver
                            marketing content along with product and price
                            information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MODELS --> */}
      <section id="models" className="lumina-aqua-models-canvas">
        <div className="container">
          <div className="lumina-aqua-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div
                  className="tab-pane show active"
                  role="tabpanel"
                  aria-labelledby="nebular-tab"
                >
                  <div className="spr-room">
                    <div className="intro">
                      <OwlCarousel
                        className="model-carousel owl-carousel owl-theme wow fade-in-top delay-05s"
                        items={1}
                        nav={false}
                        dots={true}
                        autoplay={true}
                        loop={true}
                        autoplayHoverPause={true}
                      >
                        <div className="item" data-target="lumina-model-1">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Lumina X1
                          </h2>
                          <p>
                            Lumina comes in a standard model (Lumina X1) for
                            one-sided displays as well as a double-sided screen
                            series Lumina X2 for front and back displays or
                            signage, as frequently seen in produce sections.
                          </p>
                        </div>
                        <div className="item" data-target="lumina-model-2">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Lumina X2
                          </h2>
                          <p>
                            Double the Possibility, Lumina Aqua X2 provides
                            retailers with a double-sided screen for more cost
                            and space efficient solution for one signage device
                            to cover a larger display area. This device is
                            powered through one processor, reducing device power
                            consumption.
                          </p>
                        </div>
                      </OwlCarousel>
                    </div>
                    <img
                      id="lumina-model-1"
                      className=" fade-in-right delay-05s"
                      src={ModelImg1}
                      alt=""
                    />{" "}
                    <img
                      id="lumina-model-2"
                      className="d-none  fade-in-right delay-05s"
                      src={ModelImg2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Display</h1>
        </div>
        <div className="container">
          <div className="display">
            <img
              className="logo wow fade-in-left delay-1s"
              src={ModelImg3}
              alt=""
            />
            <div className="row">
              <div className="title col-lg-5">
                <h2 className="wow fade-in-left delay-1s">
                  High Definition
                  <br />
                  Full-Color Dynamic
                  <br />
                  Display
                </h2>
                <p className="wow fade-in-bottom delay-1s">
                  Full-color IPS LCD screen with 2.5 Dimension glass lens
                  vividly brings display to life.
                </p>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <img
                  className="wow fade-in-right delay-1s img-fluid"
                  src={ModelImg4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FEATURES --> */}
      <section id="features" className="lumina-aqua-features-canvas">
        <div className="ci">
          <div className="full-width-container">
            <div className="section-hero">
              <div className="section-hero-content ps-3 ps-md-5">
                <h2 className=" lh-sm text-white wow fade-in-left delay-05s">
                  <span className="display-6">Why Choose</span> <br />
                  <span className="display-3 fw-semibold">Lumina Aqua</span>
                </h2>
                <Splide
                  className="splide sp-slider wow fade-in-right delay-1s"
                  options={{
                    perPage: 3,
                    rewind: true,
                    rewindByDrag: true,
                    arrows: false,
                    pauseOnHover: true,
                    focus: "center",
                    breakpoints: {
                      991: {
                        perPage: 2,
                      },
                      767: {
                        perPage: 1,
                      },
                    },
                  }}
                  onMove={function () {
                    $(".sp-slider .splide-box").click(function () {
                      var x = $(this).parent().index()
                      $(".sp-slider .splide__pagination__page").eq(x).click()
                    })
                  }}
                >
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        All Around Design
                      </h3>
                      <p className="mt-3">
                        Designed for a versatile range of display options either
                        hanging, standing, or side installation.
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        High Quality Display
                      </h3>
                      <p className="mt-3">
                        Lumina's large LCD screen shows crystal clear images and
                        can play videos, adding new life to fresh foods displays
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        IP65 Protection
                      </h3>
                      <p className="mt-3">
                        An IP65 protection rating, ensuring in functions
                        normally in messy conditions. Scratch free with 3H
                        screen hardness.
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        lifespan of 5 years
                      </h3>
                      <p className="mt-3">
                        A lifespan of 5 years when on for 16 hours straight
                        daily (&gt;30,000 hours)
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        Connects through store's Wi-Fi system
                      </h3>
                      <p className="mt-3">
                        Connects through store's Wi-Fi system, allowing instant
                        updates to products without battery-powered ESL
                        constraints.
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        full dynamic display options
                      </h3>
                      <p className="mt-3">
                        Electronic shelf label functionality along with full
                        dynamic display options
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        working temperature
                      </h3>
                      <p className="mt-3">
                        Functions normally between 0&deg;C and 50&deg;C,
                        ensuring every location in a store can be covered.
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        beautiful templates
                      </h3>
                      <p className="mt-3">
                        Hanshow provides hundreds of beautiful templates suited
                        for any retail scenario
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="splide__slide">
                    <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                      <h3 className="text-uppercase fs-5 lh-sm mb-0">
                        Winner of iF Design Award
                      </h3>
                      <p className="mt-3">
                        Winner of iF Design Award and Good Design Award
                      </p>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
              <img className="section-hero-img" src={LuminaFeatures} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BENEFITS TO CLIENTS --> */}
      <section id="benefits" className="lumina-aqua-benefits-canvas">
        <div className="ci">
          <div className="container">
            <div className="intro-box">
              <div className="intro text-center">
                <h2 className="wow fade-in-top delay-05s">
                  Benefits of Lumina Aqua to Clients
                </h2>
                <p className="wow fade-in-top delay-1s">&nbsp;</p>
              </div>
            </div>
            <div className="benefits">
              <div className="row">
                <div className="col-lg-6 articles">
                  <div className="row">
                    <div className="col-lg-6 wow fade-in-left delay-1s">
                      <article>
                        <h4>Attracts Customers</h4>
                        <p>
                          Lumina attracts customer attention in the fast-moving
                          fresh foods section of grocery retail.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Display</h4>
                        <p>
                          Provides more information to the customer, accentuates
                          promotions, and provides a more vivid product display.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Compatibility</h4>
                        <p>
                          Transforms aesthetics of the produce section into more
                          modern, colorful, and informative setting.
                        </p>
                      </article>
                    </div>
                    <div className="col-lg-6 wow fade-in-left delay-1s">
                      <article>
                        <h4>Reduces Costs</h4>
                        <p>Reduces Point of Sale Marketing (POSM) costs.</p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Recommendations</h4>
                        <p>
                          Can display pairing recommendations or recipes to
                          drive more sales.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Revenue</h4>
                        <p>
                          Eliminates need for paper and disposable plastic price
                          tags for lifespan of the product saving both costs and
                          resources.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Engagement</h4>
                        <p>
                          Improves customer experience, making shopping more
                          memorable and enjoyable.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="spr-tab-main">
                    <div className="spr-tabs-content tab-content wow">
                      <div className="tab-pane show active" role="tabpanel">
                        <div className="spr-room">
                          <div className="intro">
                            <OwlCarousel
                              className="sb-carousel owl-carousel owl-theme wow fade-in-top delay-1s"
                              items={1}
                              nav={false}
                              dots={true}
                              autoplay={true}
                            >
                              <div className="item">
                                <img
                                  className="img-fluid"
                                  src={LuminaBenefits1}
                                  alt=""
                                />
                              </div>
                              <div className="item">
                                <img
                                  className="img-fluid"
                                  src={LuminaBenefits2}
                                  alt=""
                                />
                              </div>
                              <div className="item">
                                <img
                                  className="img-fluid"
                                  src={LuminaBenefits3}
                                  alt=""
                                />
                              </div>
                              <div className="item">
                                <img
                                  className="img-fluid"
                                  src={LuminaBenefits4}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- USE CASES --> */}
      <section id="usecases" className="nebular-usecases-canvas section-box">
        <div className="container">
          <div className="intro-wrapper mb-5">
            <h2 className="intro-title mb-4 wow fade-in-top delay-03s">
              Wide Range of Use Cases
            </h2>
            <p className="intro-desc wow fade-in-top delay-06s ">
              Nebular is ideal for many types of store environments where
              industry leading lifespan, functionality, and durability are
              desired.
            </p>
          </div>
        </div>
        <div className="uc-tabs" id="usecases">
          <ul className="nav ">
            {case_categories.map((item, idx) => (
              <li key={item.uid}>
                <a
                  id={`pills-${item.data.category}-tab`}
                  className={idx === 0 ? "active" : ""}
                  data-bs-toggle="pill"
                  data-bs-target={`#pills-${item.data.category}`}
                  type="button"
                  role="tab"
                  aria-controls={`pills-${item.data.category}`}
                  aria-selected="true"
                  onClick={() => setCategory(item)}
                  href={`#${item.uid}`}
                >
                  {item.data.category}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content" id="pills-tabContent">
            {case_categories.map((item, idx) => (
              <div
                className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
                id={`pills-${item.uid}`}
                role="tabpanel"
                aria-labelledby={`pills-${item.uid}-tab`}
                key={idx}
              >
                <div className="uc-tabs-hero ">
                  <div className="uc-tabs-overlay"></div>
                  <p className="text-center">{item.data.description}</p>
                  <img
                    className="hero-img"
                    src={selectedCategory.data.cover_img.url}
                    alt={item.data.category}
                  />
                </div>

                <div className="uc-tabs-title">
                  <span className="v-line wow fade-in-top delay-03s">
                    &nbsp;
                  </span>

                  <div className="big-head wow fade-in-top delay-06s">
                    <h1>{selectedCategory.data.category}</h1>
                  </div>
                </div>

                <div className="container py-5 mt-5">
                  <div className="news-cat-section-loadmore-3 pa-0 ma-0">
                    <div className="row">
                      {getCasesWithCategory(
                        case_studies,
                        selectedCategory.uid
                      ).map((businessCase, idx) => (
                        <div className="col-md-6" key={idx}>
                          <article className="bc-article">
                            <div className="bc-article-location">
                              <img
                                src={PinIcon}
                                alt={businessCase.data.location}
                              />
                              {businessCase.data.location}
                            </div>
                            <a
                              href={`/case/${businessCase.uid}`}
                              className="bc-article-thumb"
                            >
                              <img
                                src={businessCase.data.case_image.url}
                                alt={businessCase.data.heading}
                              />
                            </a>
                            <h3>
                              <a href={`/case/${businessCase.uid}`}>
                                {businessCase.data.heading}
                              </a>
                            </h3>
                            <p>{businessCase.data.summary}</p>
                            <div className="bc-article-others">
                              <span className="bc-article-date">
                                {businessCase.data.date}
                              </span>{" "}
                              - {item.data.category}
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="cat-loadmore-section-3 pa-0 ma-0">
                    <div className="d-flex justify-content-center mt-3">
                      <a
                        className="button button-white bordered news-cat-loadmore news-cat-3"
                        data-offset="4"
                        data-catid="3"
                        href="#learn"
                      >
                        Load More ⟶
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPrismicCaseCategory {
      nodes {
        uid
        data {
          category
          cover_img {
            url
          }
          description
        }
      }
    }
    allPrismicBusinessCase {
      nodes {
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
        }
      }
    }
  }
`

export default LuminaAquaPage
