import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import Layout from "../components/layout"
import {
  AnalyzesShelvesDataIcon,
  AssuranceIcon,
  OutOfStockIcon,
  PowerfulDetectionIcon,
  ProperLabelingIcon,
  ReduceLaborCostsIcon,
  VisightPhProd,
  VsightHeroBg,
  VsightIntroLogos,
  VsightIntroProd,
  VsightIntroSlide1,
  VsightIntroSlide3,
  VsightIntroSlide4,
} from "../utils/imgImport"

const VisightPage = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-03s">ViSight Camera</h1>
            <p className="wow fade-in-left delay-06s">
              Monitor shelf status and sales volume through Hanshow's planogram
              camera solution
            </p>
          </div>
          <img src={VsightHeroBg} alt="" />
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
            <a id="x-2" href="#product-highlights">
              Product HighlIghts
            </a>
          </li>
          <li>
            <a id="x-3" href="#benefits-retailers">
              Benefits to Retailers
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- VISIGHT - INTRODUCTION --> */}
      <section id="introduction" className="visight-intro-canvas">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>ViSight</h1>
        </div>
        <div className="container">
          <img
            className="visight-intro-img intro-img wow fade-in-top delay-07s"
            src={VsightIntroProd}
            alt=""
          />
          <div className="intro-title-box my-5 wow fade-in-top delay-09s">
            <h4 className="intro-subtitle text-end">
              Smart your <br />
              Store
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">ViSight Camera</h2>
          </div>
          <div className="intro-wrapper pt-3 pb-5 wow fade-in-top delay-1-2s">
            <p className="intro-desc  mb-5">
              Winner of the 2021 iF Design Awards, Hanshow&rsquo;s ViSight
              camera features highly accurate detection capacity and edge
              computing. The camera conducts real-time display monitoring and
              product recognition while collecting and analyzing data. The fixed
              camera solution is suitable for those scenarios where the display
              status frequently changes and real-time detection of display
              problems is required.
            </p>
          </div>
          <img
            className="visight-intro-logos intro-img w-100 pb-5 mb-5 img-fluid wow fade-in-top delay-07s"
            src={VsightIntroLogos}
            alt=""
          />
        </div>
        <div className="splide visight-intro-slider spatrol-dc-slider spatrol-slider wow fade-in-bottom delay-09s">
          <Splide
            className="splide visight-intro-slider spatrol-dc-slider spatrol-slider wow fade-in-bottom delay-09s"
            options={{
              type: "loop",
              autoplay: true,
              interval: 4000,
              easing: "ease-in-out",
              pauseOnHover: true,
              perPage: 1,
            }}
          >
            <SplideSlide className="splide__slide__container">
              <img
                className="d-block wow fade-in-top delay-06s"
                src={VsightIntroSlide1}
                alt=""
              />
            </SplideSlide>
            <SplideSlide className="splide__slide">
              <div className="splide__slide__container">
                <img
                  className="d-block wow fade-in-top delay-06s"
                  src={VsightIntroSlide3}
                  alt=""
                />
              </div>
            </SplideSlide>
            <SplideSlide className="splide__slide">
              <div className="splide__slide__container">
                <img
                  className="d-block wow fade-in-top delay-06s"
                  src={VsightIntroSlide4}
                  alt=""
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>

      {/* <!-- VISIGHT - PRODUCT HIGHLIGHTS --> */}
      <section
        id="product-highlights"
        className="visight-ph-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper pb-5">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              ViSight Camera Product Highlights
            </h2>
            <p>&nbsp;</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                className="ntro-img mb-5 mb-md-0 img-fluid wow fade-in-left delay-09s"
                src={VisightPhProd}
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
                    ViSight&rsquo;s high detection accuracy allows for quick
                    training and adaption for changing retail environments
                  </p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>easy installation</h5>
                  </div>
                  <p>
                    Easy installation with simple network configuration for low
                    implementation and maintenance costs
                  </p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Image Sensor</h5>
                  </div>
                  <p>1 TB AI processor with hi-def 8M image sensor</p>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>dust and water resistance</h5>
                  </div>
                  <p>IP67 dust and water resistance protection rating</p>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  VISIGHT - BENEFITS TO RETAILERS --> */}
      <section
        id="benefits-retailers"
        className="visight-btr-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper pb-5">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              Benefits of ViSight Camera to Retailers
            </h2>
            <p className="intro-desc mb-5 wow fade-in-top delay-06s">
              Hanshow Award winning ViSight Camera, mounted at strategic
              locations around the store for stationary monitoring of shelves
              and customer traffic.
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
                Reduces out of stock occurrences.
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
                Ensures planogram compliance.
              </p>
            </div>
            <div className="benefits-item col-md-4">
              <img
                className="wow puff-in-center delay-03s"
                src={AnalyzesShelvesDataIcon}
                alt=""
              />
              <h5 className="wow fade-in-bottom delay-06s">
                Real time Backend
              </h5>
              <p className="wow fade-in-bottom delay-09s">
                Provides real time backend view of shelves for managers at both
                local and remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VisightPage
