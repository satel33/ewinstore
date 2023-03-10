/* eslint-disable jsx-a11y/media-has-caption */

import React, { useState } from "react"
import { graphql } from "gatsby"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import $ from "jquery"

import Layout from "../components/layout"
import {
  AccuracyIcon,
  CompatibilityIcon,
  EngagementIcon,
  EslConnector,
  EslProd0,
  EslProd1,
  EslProd2,
  EslProd3,
  EslProd4,
  EslProd5,
  EslProd6,
  InventoryIcon,
  Nebular154,
  Nebular213,
  Nebular213F,
  Nebular266,
  Nebular266F,
  Nebular290,
  Nebular346,
  Nebular350,
  Nebular350F,
  Nebular420,
  Nebular583,
  Nebular750,
  NebularLuxProduct,
  OrderPickingIcon,
  PinIcon,
  ReducesCostsIcon,
  SolarBg,
  SpeedIcon,
  VividDisplayIcon,
  WhyChooseProd,
} from "../utils/imgImport"
import { getCasesWithCategory } from "../utils/helpers"

const NebularPage = ({ data }) => {
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
            <div className="overlay left dark">&nbsp;</div>{" "}
            <video
              id="hero-video"
              className="main-hero-video"
              autoPlay="autoplay"
              loop="loop"
              muted=""
              width="100%"
              height="auto"
            >
              <source
                src="https://www.hanshow.com/storage/videos/nebular-product-video.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg.html" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mh-volume-toggle">&nbsp;</div>
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav
        className="page-section-nav mb-0 wow fade-in-bottom delay-1-4s"
        data-wow-offset="50"
      >
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <li>
            <a id="x-1" href="#whychoose">
              Why Choose Nebular
            </a>
          </li>
          <li>
            <a id="x-2" href="#benefits">
              Benefits to Retailers
            </a>
          </li>
          <li>
            <a id="x-3" href="#usecases">
              Use Cases
            </a>
          </li>
          <li>
            <a id="x-4" href="#specifications">
              Specifications
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- NEBULAR - WHY CHOOSE --> */}
      <section id="whychoose" className="nebular-choose-canvas">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>Nebular</h1>
        </div>
        <div className="container">
          <img
            className="nebular-intro-img intro-img wow fade-in-top delay-06s"
            src={WhyChooseProd}
            alt="why-choose-prod.png"
            width="486"
            height="286"
          />
          <div className="intro-title-box mb-0 wow fade-in-top delay-09s">
            <h4 className="intro-subtitle text-end">
              The trusted <br />
              standard
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">Nebular</h2>
          </div>
          <div className="intro-wrapper wow fade-in-top delay-1-2s">
            <p className="intro-desc my-5 ">
              If you expect more from an electronic shelf label, Nebular will
              still exceed your expectations. This top-end digital price label
              is the best you will find on the market. Nebular is Hanshow's next
              generation ESL with industry leading lifespan, functionality, and
              durability.
            </p>
            <p className="intro-desc">
              Nebular features a unibody design, completely encasing flexible
              ion battery, reducing its power consumption and increasing its
              lifespan for up to 15 years.
            </p>
          </div>
        </div>
        <div className="nebular-solar-canvas">
          <div className="big-head wow fade-in-top delay-06s">
            <h1>Solar</h1>
          </div>
          <div className="nebular-solar-inner">
            <div className="section-hero">
              <div className="section-hero-content">
                <div className="container">
                  <div className="row gx-md-5 pb-5">
                    <div className="col-md-6  wow fade-in-left delay-1-2s">
                      <div className="intro-subtitle">Introducing</div>
                      <h3 className="intro-title text-white mt-3 mb-5">
                        Nebular Lux
                      </h3>
                      <p className="intro-desc text-white mb-5">
                        Hanshow's newest member to the Nebular product line is
                        its revolutionary solar powered ESL Nebular Lux.
                        Featuring all the functionality of its cousin, Nebular
                        Lux has a small battery constantly recharged from both
                        natural and florescent light through its protogalactic
                        cells.
                      </p>
                      <p className="intro-desc text-white">
                        This not only reduces power consumption even more
                        extending the life and usage of the ESL, it also reduces
                        battery waste and signals the eventual phasing out of
                        batteries altogether from IoT devices.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        className="d-block mt-5 mx-auto img-fluid wow fade-in-right delay-09s"
                        src={NebularLuxProduct}
                        alt="nebular lux product.png"
                        width="450"
                        height="456"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="section-hero-img rounded-0"
                src={SolarBg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="nebular-esl-canvas">
          <div className="container">
            <div className="intro-wrapper">
              <h2 className="intro-title mb-4 wow fade-in-top delay-03s">
                The Next Generation ESL
              </h2>
              <p className="intro-desc wow fade-in-top delay-06s ">
                Electronic Shelf Labels (ESL) improve operational efficiency,
                reduce pricing errors and labor costs by remotely updating
                entire labeling systems from centralized servers as well as many
                other benefits.
              </p>
            </div>
            <div className="nebular-esl-slider-wrapper position-relative">
              <img
                className="nebular-esl-connector d-block wow fade-in-right delay-09s"
                src={EslConnector}
                alt=""
              />
              <div className="row gx-5 align-items-center">
                <div className="col-md-7 col-lg-8">
                  <div className="nebular-esl-prods wow fade-in-left delay-03s">
                    <img
                      id="nebular-esl-0"
                      className="fade-in-left delay-03s"
                      src={EslProd0}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-1"
                      className=" fade-in-left delay-03s"
                      src={EslProd1}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-2"
                      className=" fade-in-left delay-03s"
                      src={EslProd2}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-3"
                      className=" fade-in-left delay-03s"
                      src={EslProd3}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-4"
                      className=" fade-in-left delay-03s"
                      src={EslProd4}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-5"
                      className=" fade-in-left delay-03s"
                      src={EslProd5}
                      alt=""
                    />{" "}
                    <img
                      id="nebular-esl-6"
                      className=" fade-in-left delay-03s"
                      src={EslProd6}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <Splide
                    className="splide nebular-esl-slider blue-slider wow fade-in-left delay-06s"
                    options={{
                      direction: "ttb",
                      height: "30rem",
                      wheel: true,
                      type: "loop",
                      autoplay: true,
                      interval: 4000,
                      easing: "ease-in-out",
                      pauseOnHover: true,
                      pagination: false,
                    }}
                    onMove={function () {
                      $(".nebular-esl-canvas .splide__slide").each(function () {
                        /* alert($(this).attr('data-target')); */
                        if ($(this).hasClass("is-active")) {
                          $(".nebular-esl-prods img").hide()
                          $("#" + $(this).attr("data-target")).show()
                        }
                      })
                    }}
                  >
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-0"
                    >
                      <div className="splide__slide__container">
                        <h5>Powerful</h5>
                      </div>
                      <p>
                        Nebular contains a proprietary integrated circuit,
                        allowing for improvements across ESL performance, from
                        power consumption to stability.
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-1"
                    >
                      <div className="splide__slide__container">
                        <h5>All Temperature</h5>
                      </div>
                      <p>
                        The Nebular digital price label functions normally in
                        temperatures as low as 0&deg;C and as high as 40&deg;C
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-2"
                    >
                      <div className="splide__slide__container">
                        <h5>battery lasts up to 15 years</h5>
                      </div>
                      <p>
                        Nebular's specially designed battery lasts up to 15
                        years
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-3"
                    >
                      <div className="splide__slide__container">
                        <h5>IP68 Protection</h5>
                      </div>
                      <p>
                        The highest industrial protection rating, IP68, keeps
                        Nebular's internal components resistant against the
                        elements
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-4"
                    >
                      <div className="splide__slide__container">
                        <h5>Nebular's sleek appearance</h5>
                      </div>
                      <p>
                        At only 7.8mm thick Nebular's sleek appearance drives
                        shelf aesthetics to a new level
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-5"
                    >
                      <div className="splide__slide__container">
                        <h5>Nebular features 7 color LED</h5>
                      </div>
                      <p>
                        For route mapping and picking by light, Nebular features
                        7 color LED light flashing capabilities
                      </p>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="nebular-esl-6"
                    >
                      <div className="splide__slide__container">
                        <h5>Winner of 2021 iF Design Award</h5>
                      </div>
                      <p>Winner of 2021 iF Design Award</p>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  NEBULAR - BENEFITS --> */}
      <section
        id="benefits"
        className="nebular-benefits-canvas section-box pt-5"
      >
        <div className="full-width-container">
          <div className="benefits-blue-box">
            <div className="container">
              <h2 className="fs-1 text-center text-white pb-2 mb-5 wow fade-in-top delay-03s">
                Benefits to Retailers
              </h2>
              <div className="row justify-content-center">
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={SpeedIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">SPEED</h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Lightning-fast remote price updates eliminate manual price
                    changes
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={AccuracyIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">Accuracy</h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Ensure price accuracy between the label and register,
                    improving the customer experience
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={EngagementIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">Engagement</h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Provides more information to the customer, accentuates
                    promotions, and a more vivid product display
                  </p>
                </div>
                <div className="w-100">&nbsp;</div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={VividDisplayIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    System upgrades
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    All models of Nebular ESL support OTA (Over the Air)
                    firmware upgrades to ensure seamless updates as technology
                    advances
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={ReducesCostsIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Reduces Costs
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Eliminates need for paper price tags for lifespan of the
                    product saving both costs and resources
                  </p>
                </div>
                <div className="w-100">&nbsp;</div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={CompatibilityIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Compatibility
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Designed for compatibility with other digitalization
                    systems, serving as building blocks of holistic
                    digitalization
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={OrderPickingIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Order Picking
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Order picking times significantly reduced, adding more
                    online sales
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={InventoryIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">Inventory</h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Inventory management information displayed on ESL to assist
                    in tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--NEBULAR - USE CASES --> */}
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

      {/* <!-- NEBULAR - SPECIFICATIONS --> */}
      <section id="specifications" className="nebular-specs-canvas section-box">
        <div className="container">
          <h2 className="intro-title text-center pb-2 mb-5">
            Nebular Specifications
          </h2>
          <div className="sp-specs-tabs row align-items-start my-5">
            <div
              id="v-pills-tab"
              className="col-md-3 nav flex-md-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                id="v-pills-nebular-154-tab"
                className="nav-link active"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-154"
                aria-controls="v-pills-nebular-154"
                aria-selected="true"
              >
                Nebular-154
              </button>{" "}
              <button
                id="v-pills-nebular-213-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-213"
                aria-controls="v-pills-nebular-213"
                aria-selected="false"
              >
                Nebular-213
              </button>{" "}
              <button
                id="v-pills-nebular-266-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-266"
                aria-controls="v-pills-nebular-266"
                aria-selected="false"
              >
                Nebular-266
              </button>{" "}
              <button
                id="v-pills-nebular-290-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-290"
                aria-controls="v-pills-nebular-290"
                aria-selected="false"
              >
                Nebular-290
              </button>{" "}
              <button
                id="v-pills-nebular-346-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-346"
                aria-controls="v-pills-nebular-346"
                aria-selected="false"
              >
                Nebular-346
              </button>{" "}
              <button
                id="v-pills-nebular-350-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-350"
                aria-controls="v-pills-nebular-350"
                aria-selected="false"
              >
                Nebular-350
              </button>{" "}
              <button
                id="v-pills-nebular-420-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-420"
                aria-controls="v-pills-nebular-420"
                aria-selected="false"
              >
                Nebular-420
              </button>{" "}
              <button
                id="v-pills-nebular-583-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-583"
                aria-controls="v-pills-nebular-583"
                aria-selected="false"
              >
                Nebular-583
              </button>{" "}
              <button
                id="v-pills-nebular-750-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-750"
                aria-controls="v-pills-nebular-750"
                aria-selected="false"
              >
                Nebular-750
              </button>{" "}
              <button
                id="v-pills-nebular-213F-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-213F"
                aria-controls="v-pills-nebular-213F"
                aria-selected="false"
              >
                Nebular-213F
              </button>{" "}
              <button
                id="v-pills-nebular-266F-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-266F"
                aria-controls="v-pills-nebular-266F"
                aria-selected="false"
              >
                Nebular-266F
              </button>{" "}
              <button
                id="v-pills-nebular-350F-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nebular-350F"
                aria-controls="v-pills-nebular-350F"
                aria-selected="false"
              >
                Nebular-350F
              </button>
            </div>
            <div
              id="v-pills-tabContent"
              className="col-md-9 tab-content ps-4 mt-5 mt-md-0"
            >
              <div
                id="v-pills-nebular-154"
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-154-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular154}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>46.7*35.8*10.0</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>27.0*27.0</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>1.54</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>200*200</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>188</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-213"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-213-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular213}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>69.7*33.2*7.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>48.6*23.7</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>2.13</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>250*122</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>131</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-266"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-266-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular266}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>82.3*40.3*7.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>60.1*30.7</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>2.66</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>296*152</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>125</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-290"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-290-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular290}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>89.5*40.7*7.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>66.9*29.1</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>2.9</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>296*128</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>112</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-346"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-346-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular346}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>107.0*42.2*9.2</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>82.6*30.3</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>3.46</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>480*176</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>148</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-350"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-350-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular350}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>105.8*52.0*9.2</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>79.7*38.2</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>3.5</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>384*184</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-420"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-420-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular420}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>100.1*88.0*9.5</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>84.8*63.6</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>4.2</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>400*300</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-583"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-583-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular583}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>132.8*112.2*9.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>118.8*88.2</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>5.83</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>648*480</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>138</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-750"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-750-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular750}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>178.1*125.7*10.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>163.2*97.9</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>White</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>7.5</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>800*480</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>125</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BWR</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>15 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>0~40</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-213F"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-213F-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular213F}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>69.7*33.2*7.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>48.6*23.7</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Blue</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>2.13</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>250*122</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>131</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BW</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>-25~0</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-266F"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-266F-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular266F}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>82.3*40.3*7.8</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>60.1*30.7</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Blue</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>2.66</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>296*152</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>125</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BW</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>-25~0</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="v-pills-nebular-350F"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="v-pills-nebular-350F-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Nebular350F}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>105.8*52.0* 9.2</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>79.7*38.2</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Blue</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>3.5</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>384*184</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Display Color</td>
                      <td>BW</td>
                    </tr>
                    <tr>
                      <td>NFC</td>
                      <td>Support</td>
                    </tr>
                    <tr>
                      <td>Multiple Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates per day)</td>
                    </tr>
                    <tr>
                      <td>Battery Type</td>
                      <td>LiMnO2 battery</td>
                    </tr>
                    <tr>
                      <td>Working Temperature (˚C)</td>
                      <td>-25~0</td>
                    </tr>
                    <tr>
                      <td>Working Humidity (%RH)</td>
                      <td>45~65</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP68</td>
                    </tr>
                    <tr>
                      <td>Certification</td>
                      <td>RoHS, CE Standards, FCC, MIC</td>
                    </tr>
                    <tr>
                      <td>RF Wireless Communication</td>
                      <td>
                        <div className="d-md-flex">
                          <div className="pe-md-3 mb-2 md-md-0">
                            Working frequency:
                            <br />
                            2402MHz~2480MHz
                          </div>
                          <div className="px-md-3">
                            System throughput: <br />
                            Up to 60,000 labels per hour
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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

export default NebularPage
