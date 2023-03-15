import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import Layout from "../components/layout"
import {
  AnalyzesShelvesDataIcon,
  AssuranceIcon,
  DesignConceptImg1,
  DesignConceptImg5,
  OutOfStockIcon,
  PowerfulDetectionIcon,
  ProperLabelingIcon,
  ReduceLaborCostsIcon,
  SpatrolHeroBG,
  SpatrolHeroProd1,
  SpatrolHeroProd2,
  SpatrolIntroProd,
  SpatrolPHProd,
} from "../utils/imgImport"

const SpatrolPage = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="spatrol-hero-canvas page-hero-canvas">
        <div className="page-hero">
          <div className="intro w-100">
            <div className="row">
              <div className="col-md-6">
                <h1 className="wow fade-in-left delay-03s">SPatrol Robot</h1>
                <p className="wow fade-in-left delay-05s">
                  SPatrol is able to roam store aisles, collect shelf
                  information and analyze out of stock status automatically to
                  provide insightful data on the backend.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid ms-0 ms-lg-5 me-5 wow fade-in-top delay-07s"
                  src={SpatrolHeroProd1}
                  alt=""
                />{" "}
                <img
                  className="img-fluid wow fade-in-bottom delay-09s"
                  src={SpatrolHeroProd2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <img src={SpatrolHeroBG} alt="" />
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav
        className="page-section-nav wow fade-in-bottom delay-1-4s"
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
            <a id="x-2" href="#design-concept">
              Design Concept
            </a>
          </li>
          <li>
            <a id="x-3" href="#product-highlights">
              Product Highlights
            </a>
          </li>
          <li>
            <a id="x-4" href="#benefits-retailers">
              Benefits to Retailers
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- SPATROL - INTRODUCTION --> */}
      <section id="introduction" className="spatrol-intro-canvas">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>SPatrol</h1>
        </div>
        <div className="container">
          <img
            className="spatrol-intro-img intro-img wow fade-in-top delay-07s"
            src={SpatrolIntroProd}
            alt=""
          />
          <div className="intro-title-box mt-5 wow fade-in-top delay-09s">
            <h4 className="intro-subtitle text-end">
              The Mobile <br />
              Solution
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">SPatrol Robot</h2>
          </div>
          <div className="intro-wrapper my-5 wow fade-in-top delay-1-2s">
            <p className="intro-desc">
              In a large busy store, employees often do not have the time to
              roam the aisles monitoring product status, let alone the ability
              to store and analyze this monitoring data over time. But this is
              exactly what Hanshow&rsquo;s SPatrol does, all day, every day.{" "}
              <span className="fw-semibold">
                This mobile solution is ideal for retail settings that require
                high-frequency monitoring, and need to cover a large store area
                and wide range of products.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* <!-- SPATROL - DESIGN CONCEPT --> */}
      <section id="design-concept" className="spatrol-dc-canvas section-box">
        <div className="container">
          <div className="intro-wrapper">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              SPatrol Robot Design Concept
            </h2>
          </div>
          <div className="splide spatrol-dc-slider spatrol-slider wow fade-in-bottom delay-09s">
            <div className="splide__track">
              <div className="splide__list">
                <div className="splide__slide">
                  <div className="splide__slide__container">
                    <img
                      className="d-block mx-auto img-fluid wow fade-in-top delay-06s"
                      src={DesignConceptImg1}
                      alt=""
                    />
                  </div>
                </div>
                <div className="splide__slide">
                  <div className="splide__slide__container">
                    <img
                      className="d-block mx-auto img-fluid wow fade-in-top delay-06s"
                      style={{ fontSize: "1rem" }}
                      src={DesignConceptImg5}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SPATROL - PRODUCT HIGHLIGHTS --> */}
      <section
        id="product-highlights"
        className="spatrol-ph-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              SPatrol Product Highlights
            </h2>
          </div>
          <div className="spatrol-ph-slider-box row">
            <div className="col-md-6">
              <img
                className="spatrol-ph-prod d-block mx-auto mb-5 mb-md-0 img-fluid wow fade-in-left delay-09s"
                src={SpatrolPHProd}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <Splide
                className="splide spatrol-slider spatrol-ph-slider ms-md-5 wow fade-in-right delay-1-2s"
                options={{
                  direction: "ttb",
                  height: "35rem",
                  wheel: true,
                  type: "loop",
                  autoplay: true,
                  interval: 4000,
                  easing: "ease-in-out",
                  pauseOnHover: true,
                  breakpoints: {
                    991: {
                      height: "25rem",
                    },
                  },
                }}
              >
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Accuracy</h5>
                  </div>
                  <p>
                    Highly accurate product recognition by algorithm fusion of
                    product and ESL information with accuracy rates of 95%.
                  </p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Secured Data Transfer</h5>
                  </div>
                  <p>
                    Powerful edge computing minimizing data transfer security
                    concerns.
                  </p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>High Detection</h5>
                  </div>
                  <p>
                    SPatrol&rsquo;s high detection accuracy allows for quick
                    training and adaption for changing retail environments.
                  </p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Easy installation</h5>
                  </div>
                  <p>
                    Easy installation with simple network configuration for low
                    implementation and maintenance costs
                  </p>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  SPATROL - BENEFITS TO RETAILERS --> */}
      <section
        id="benefits-retailers"
        className="spatrol-btr-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              Benefits of SPatrol to Retailers
            </h2>
            <p className="intro-desc mb-5 wow fade-in-top delay-06s">
              This mobile solution to cover a large store area and wide range of
              products.
            </p>
          </div>
          <div className="benefits-cols-6 row gx-0 justify-content-center">
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={PowerfulDetectionIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">
                Powerful Detection
              </h5>
              <p className="wow fade-in-bottom delay-09s">
                Detects product shortages, reducing loss of sales from these
                shortages.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={ReduceLaborCostsIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">
                Reduce Labor Costs
              </h5>
              <p className="wow fade-in-bottom delay-09s">
                Reduces shelf monitoring labor costs.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={OutOfStockIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">Out of Stock</h5>
              <p className="wow fade-in-bottom delay-09s">
                Reduces out of stock occurrences by 65% in month-long trials.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={ProperLabelingIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">Proper Labeling</h5>
              <p className="wow fade-in-bottom delay-09s">
                Recognizes products and ESL information to ensure products are
                placed properly with corresponding price label.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={AssuranceIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">Assurance</h5>
              <p className="wow fade-in-bottom delay-09s">
                Ensures planogram compliance by 8% in month-long trials.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={AnalyzesShelvesDataIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">
                Analyzes Shelves Data
              </h5>
              <p className="wow fade-in-bottom delay-09s">
                Collects and analyzes shelf data over time to improve
                operations, displays, and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SpatrolPage
