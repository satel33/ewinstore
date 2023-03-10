/* eslint-disable jsx-a11y/media-has-caption */

import React, { useState } from "react"
import { graphql } from "gatsby"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import Layout from "../components/layout"
import {
  AccuracyStellarIcon,
  CompatibilityStellarIcon,
  EngagementStellarIcon,
  InventoryStellarIcon,
  PinIcon,
  ReducesIcon,
  RemoteIcon,
  RevenueIcon,
  Stellar1020,
  Stellar154,
  Stellar213,
  Stellar213F,
  Stellar266,
  Stellar266F,
  Stellar290,
  Stellar420,
  Stellar583,
  Stellar750,
  StellarBg,
  StellarIntroBanner,
  StellarIntroProd,
} from "../utils/imgImport"
import { getCasesWithCategory } from "../utils/helpers"

const NowaPage = ({ data }) => {
  const case_studies = data.allPrismicBusinessCase.nodes
  const case_categories = data.allPrismicCaseCategory.nodes

  const [selectedCategory, setCategory] = useState(case_categories[0])
  return (
    <Layout>
      {/* <!-- MAIN HERO --> */}
      <section className="main-hero-canvas">
        <div className="main-hero">
          <div className="mh-video-bg-room">
            <video
              className="main-hero-video"
              autoPlay="autoplay"
              loop="loop"
              muted=""
              width="300"
              height="150"
            >
              <source
                src="https://www.hanshow.com/storage/videos/stellar-pro-bg.mp4"
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
            <a id="x-1" href="#introduction">
              Introduction
            </a>
          </li>
          <li>
            <a id="x-2" href="#features">
              Features
            </a>
          </li>
          <li>
            <a id="x-3" href="#benefits">
              Benefits to Clients
            </a>
          </li>
          <li>
            <a id="x-4" href="#usecases">
              Usecases
            </a>
          </li>
          <li>
            <a id="x-5" href="#specifications">
              Specifications
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- STELLAR PRO - INTRODUCTION --> */}
      <section id="introduction" className="sp-intro-canvas position-relative">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>Stellar</h1>
        </div>
        <div className="container">
          <img
            className="sp-intro-prod intro-img wow fade-in-top delay-06s"
            src={StellarIntroProd}
            alt=""
          />
          <div className="intro-title-box mt-4 mb-5 wow fade-in-top delay-09s">
            <h4 className="intro-subtitle text-end">
              The trusted <br />
              standard
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">Stellar Pro</h2>
          </div>
          <div className="intro-wrapper pb-5 mb-5 wow fade-in-top delay-1-2s">
            <p className="intro-desc mb-5">
              The electronic shelf label that put Hanshow on the map. Stellar is
              our classic series, trusted by thousands of stores around the
              world. Stellar has everything stores need from their digital price
              tags; durability, stability, clear displays, fast update speeds,
              and a batteries optimized for longevity.
            </p>
            <p className="intro-desc">
              Now the Stellar series has advanced to its next generation ESL
              with Stellar Pro, featuring upgrades on battery life, a
              specialized ESL chip, expanded storage, and improved overall
              performance.
            </p>
          </div>
        </div>
        <div className="full-width-container">
          <img
            className="cover-img d-block w-100 h-auto wow fade-in-top delay-1-2s"
            src={StellarIntroBanner}
            alt=""
          />
        </div>
      </section>

      {/* <!-- STELLAR PRO - FEATURES --> */}
      <section id="features" className="sp-features-canvas section-box">
        <div className="full-width-container">
          <div className="section-hero">
            <div className="section-hero-content ps-3 ps-md-5">
              <h2 className=" lh-sm text-white wow fade-in-left delay-05s">
                <span className="display-6">Why Choose</span> <br />
                <span className="display-3 fw-semibold">Stellar Pro</span>
              </h2>
              <Splide
                className="splide sp-slider wow fade-in-right delay-1s"
                aria-label="Splide Basic HTML Example"
                options={{
                  perPage: 3,
                  perMove: 1,
                  rewind: true,
                  rewindByDrag: true,
                  arrows: false,
                  interval: 4000,
                  focus: "center",
                  pagination: false,
                  breakpoints: {
                    991: {
                      perPage: 2,
                    },
                    767: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      Battery Life
                    </h3>
                    <p className="mt-3">
                      Stellar Pro doubles the battery life from previous Stellar
                      series now lasting up to 10 years.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      Working <br />
                      Temperature
                    </h3>
                    <p className="mt-3">
                      Freezer model is specially designed for functioning at
                      -25&deg;C to 0&deg;C. Standard model functions best at
                      0&deg;C to 40&deg;C
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      IP65 <br />
                      Protection
                    </h3>
                    <p className="mt-3">
                      Increased lens hardness for extra durability and IP65
                      protection rating
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      ESL chip improves functionality
                    </h3>
                    <p className="mt-3">
                      Specialized ESL chip improves functionality for faster
                      responses consuming less energy
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      Laser engraved barcode
                    </h3>
                    <p className="mt-3">
                      Laser engraved barcode keeps precise scanning even after
                      years of wear and tear
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      Sizing ranges from tablet sized to mini sized labels
                    </h3>
                    <p className="mt-3">
                      Sizing ranges from tablet sized to mini sized labels
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide-box px-3 py-3 py-md-4 px-md-5">
                    <h3 className="text-uppercase fs-5 lh-sm mb-0">
                      Winner of 2021 Good Design Award
                    </h3>
                    <p className="mt-3">Winner of 2021 Good Design Award</p>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <img className="section-hero-img" src={StellarBg} alt="" />
          </div>
        </div>
      </section>

      {/* <!--  STELLAR PRO - BENEFITS --> */}
      <section id="benefits" className="sp-benefits-canvas section-box">
        <div className="container">
          <div className="intro-wrapper">
            <h4 className="intro-title mb-4 wow fade-in-top delay-03s">
              Benefits of Stellar Pro to Clients
            </h4>
            <p className="intro-desc pb-3 mb-5 wow fade-in-top delay-06s">
              Efficiency and Profit Boosting for Stores.
            </p>
          </div>
          <div className="benefits-cols-7 row gx-0 justify-content-center">
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={RemoteIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Remote Updates</h5>
              <p>
                Stellar allows for remote price updates, eliminating inefficient
                and costly manual price changes.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={ReducesIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Reduces Costs</h5>
              <p>
                Stellar digital labels eliminate need for paper price tags over
                its 10 year lifespan, saving both costs and resources.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={InventoryStellarIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Inventory</h5>
              <p>
                Stellar's high res screen allows for more information to be
                displayed, including inventory management.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={RevenueIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Revenue</h5>
              <p>
                7 color LED light signals allow for faster order picking,
                increasing online sales revenue.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={EngagementStellarIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Engagement</h5>
              <p>
                Customers receive more product information and can be directed
                to online orders through QR codes on Stellar's colorful, high
                res display screen.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={CompatibilityStellarIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Compatibility</h5>
              <p>
                Designed for compatibility with other digitalization systems,
                serving as the building blocks of holistic digitalization.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-06s"
                src={AccuracyStellarIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-04s">Accuracy</h5>
              <p>
                Strong signal and system communication keeps Stellar embedded in
                ERP networks, ensuring price accuracy between the label and
                register, and improving the customer experience.
              </p>
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

      {/* <!-- STELLAR PRO - SPECIFICATIONS --> */}
      <section id="specifications" className="sp-specs-canvas section-box">
        <div className="container">
          <h2 className="intro-title text-center pb-3 mb-5">
            Stellar Pro Specifications
          </h2>
          <div className="sp-specs-tabs row align-items-start my-5">
            <div
              id="v-pills-tab"
              className="col-md-3 nav flex-md-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                id="stellar-pro-154-tab"
                className="nav-link active"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-154"
                aria-controls="stellar-pro-154"
                aria-selected="true"
              >
                Stellar Pro - 154
              </button>{" "}
              <button
                id="stellar-pro-213-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-213"
                aria-controls="stellar-pro-213"
                aria-selected="false"
              >
                Stellar Pro - 213
              </button>{" "}
              <button
                id="stellar-pro-266-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-266"
                aria-controls="stellar-pro-266"
                aria-selected="false"
              >
                Stellar Pro - 266
              </button>{" "}
              <button
                id="stellar-pro-290-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-290"
                aria-controls="stellar-pro-290"
                aria-selected="false"
              >
                Stellar Pro - 290
              </button>{" "}
              <button
                id="stellar-pro-420-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-420"
                aria-controls="stellar-pro-420"
                aria-selected="false"
              >
                Stellar Pro - 420
              </button>{" "}
              <button
                id="stellar-pro-583-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-583"
                aria-controls="stellar-pro-583"
                aria-selected="false"
              >
                Stellar Pro - 583
              </button>{" "}
              <button
                id="stellar-pro-750-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-750"
                aria-controls="stellar-pro-750"
                aria-selected="false"
              >
                Stellar Pro - 750
              </button>{" "}
              <button
                id="stellar-pro-1020-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-1020"
                aria-controls="stellar-pro-1020"
                aria-selected="false"
              >
                Stellar Pro - 1020
              </button>{" "}
              <button
                id="stellar-pro-213F-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-213F"
                aria-controls="stellar-pro-213F"
                aria-selected="false"
              >
                Stellar Pro - 213F
              </button>{" "}
              <button
                id="stellar-pro-266F-tab"
                className="nav-link"
                role="tab"
                type="button"
                data-bs-toggle="pill"
                data-bs-target="#stellar-pro-266F"
                aria-controls="stellar-pro-266F"
                aria-selected="false"
              >
                Stellar Pro - 266F
              </button>
            </div>
            <div
              id="v-pills-tabContent"
              className="col-md-9 tab-content ps-4 mt-5 mt-md-0"
            >
              <div
                id="stellar-pro-154"
                className="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="stellar-pro-154-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar154}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>48.2*35.2*13.2</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>27.0*27.0</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>21.1</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>5 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0℃~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP54</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-213"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-213-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar213}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>70.0*35.2*13.4</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>48.6*23.7</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>34.6</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP54</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-266"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-266-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar266}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>84.1*41.1*13.2</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>60.1*30.7</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>40.7</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP54</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-290"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-290-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar290}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>90.1*41.2*13.3</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>66.9*29.1</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>45.0</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP54</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-420"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-420-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar420}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>104.8*94.0*12.0</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>84.8*63.6</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>107.0</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP65</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-583"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-583-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar583}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>138.2*113.6*12.3</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>118.8*88.2</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>160.0</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>5.8</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP65</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-750"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-750-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar750}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>183.0*125.3*12.5</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>163.0*98.0</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>234.0</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
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
                      <td>126</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP65</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-1020"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-583-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar1020}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>235.5*174.0*12.5</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>215.5*143.7</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>353.8</td>
                    </tr>
                    <tr>
                      <td>Case Color</td>
                      <td>Elegant white/ customized</td>
                    </tr>
                    <tr>
                      <td>Display Size (inch)</td>
                      <td>10.2</td>
                    </tr>
                    <tr>
                      <td>Resolution (pixel)</td>
                      <td>960*640</td>
                    </tr>
                    <tr>
                      <td>DPI</td>
                      <td>113</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>0%~40&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP65</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-213F"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-213F-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar213F}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>70.1*35.3*14.7</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>48.6*23.7</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>30.8</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>-25%~0&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP67</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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
                id="stellar-pro-266F"
                className="tab-pane fade"
                role="tabpanel"
                aria-labelledby="stellar-pro-266F-tab"
              >
                <img
                  className="sp-specs-img img-fluid"
                  src={Stellar266F}
                  alt=""
                />
                <table className="sp-specs-table table">
                  <tbody>
                    <tr>
                      <td>Product Dimensions (mm*mm*mm)</td>
                      <td>84.0*41.0*13.1</td>
                    </tr>
                    <tr>
                      <td>Active Display Area (mm*mm)</td>
                      <td>60.1*30.7</td>
                    </tr>
                    <tr>
                      <td>Weight (g)</td>
                      <td>36.0</td>
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
                      <td>Usable Pages</td>
                      <td>Support 8 pages</td>
                    </tr>
                    <tr>
                      <td>LED Flash</td>
                      <td>Support 7 colors</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>10 years (2 updates/ day)</td>
                    </tr>
                    <tr>
                      <td>Battery Spec</td>
                      <td>LiMnO2</td>
                    </tr>
                    <tr>
                      <td>Changeable Battery</td>
                      <td>Battery pack</td>
                    </tr>
                    <tr>
                      <td>Temperature/ Humidity</td>
                      <td>-25%~0&deg;C/ 45%-65% (Non-condensing)</td>
                    </tr>
                    <tr>
                      <td>Protection Level</td>
                      <td>IP67</td>
                    </tr>
                    <tr>
                      <td>Wireless Firmware Update</td>
                      <td>Yes</td>
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

export default NowaPage
