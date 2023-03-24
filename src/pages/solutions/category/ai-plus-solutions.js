import React from "react"
import loadable from "@loadable/component"
import $ from "jquery"

import Layout from "../../../components/layout"
import {
  AISolutionDesign1,
  AISolutionHero,
  AISolutionIntro1,
  AISolutionProducts1,
  SpatrolIntroProd,
} from "../../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const AIPlusSolutions = () => {
  const options = {
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
  }
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">AI+ Solutions</h1>
            <p className="wow fade-in-left delay-08s">
              Hanshow&rsquo;s AI Solution leads to more Efficient and Profitable
              stores.
            </p>
          </div>
          <img src={AISolutionHero} alt="" />
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul className="ps-nav-list">
          <ul className="ps-nav-list">
            <li>
              <a id="x-1" href="#introduction">
                Introduction
              </a>
            </li>
            <li>
              <a id="x-2" href="#designconcepts">
                Design Concepts
              </a>
            </li>
            <li>
              <a id="x-3" href="#solandprod">
                Solutions and Products
              </a>
            </li>
          </ul>
        </ul>
      </nav>

      {/* <!-- INTRODUCION --> */}
      <section id="introduction" className="aiplus-introduction-canvas">
        <div className="aiplus-introduction">
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="intro wow fade-in-bottom delay-05s text-center">
                  <h1>AI+ Solutions</h1>
                  <p>
                    Today&rsquo;s retail store is a treasure trove of untapped
                    data and insights on the movements of products and
                    customers. Where e-commerce provides endless sales and
                    optimization opportunities through real time data, this is
                    often lost in the physical world due to the limitations of
                    manual labor and the technology needed to monitor activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="row">
                  <div className="position-relative text-center col-lg-7">
                    <img
                      className="img-fluid box-shadow wow fade-in-left delay-05s"
                      src={AISolutionIntro1}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="intro wow fade-in-right delay-05s">
                      <p>
                        With staffing stretched thin across the retail industry,
                        shelves are often not stocked in accordance with
                        planogram requirements, out of stock products results in
                        sales losses, and there is little if any information on
                        customer traffic and product interest. The labor costs
                        to manually and timely track these areas in large retail
                        stores is simply too high for most retailers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DESION CONCEPTS --> */}
      <section id="designconcepts" className="aiplus-designconcepts-canvas">
        <div className="aiplus-designconcepts">
          <div className="container">
            <div className="ci">
              <div className="container">
                <div className="intro-box">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="intro wow fade-in-right delay-05s">
                        <p>
                          There are better ways to address all these pain points
                          through digitalization technology, and Hanshow&rsquo;s
                          cutting-edge AI monitoring solution was specially
                          developed for these retail settings.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                      <div className="intro wow fade-in-left delay-05s">
                        <h1>
                          Hanshow&rsquo;s AI Solution monitors shelves and
                          customer traffic in three ways.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="container">
                <div className="intro-box">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="aps-connector connector-wrapper">
                        <img
                          className="connector-img img-fluid wow fade-in-left delay-05s"
                          src={AISolutionDesign1}
                          alt=""
                        />
                        <ul className="connector-list wow fade-in-right delay-07s">
                          <li>
                            <div className="connector-title">
                              Visight AI Camera
                            </div>
                            <div className="connector-desc">
                              Hanshow&rsquo;s award winning Visight AI Camera,
                              mounted at strategic locations around the store
                              for stationary monitoring of shelves and customer
                              traffic.
                            </div>
                            <div className="connector-1 connector connector-y connector-dot connector-bottom">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-x  connector-dot connector-left">
                              &nbsp;
                            </div>
                            <div className="connector-3 connector connector-y connector-dot connector-bottom">
                              &nbsp;
                            </div>
                          </li>
                          <li>
                            <div className="connector-title">SPatrol Robot</div>
                            <div className="connector-desc">
                              Hanshow&rsquo;s SPatrol Robot features similar
                              monitoring but is able roam store aisles
                              collecting shelf information and feeding it to
                              backend systems.
                            </div>
                            <div className="connector-1 connector connector-y connector-dot connector-top">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-x  connector-dot connector-left">
                              &nbsp;
                            </div>
                          </li>
                          <li>
                            <div className="connector-title">
                              Mobile Phone App
                            </div>
                            <div className="connector-desc">
                              Finally, another way of collecting this shelf
                              information can simply be collected through a
                              mobile phone app.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="container wow fade-in delay-05s">
                <div className="intro-box ai-solutions">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="wow fade-in-top delay-1s">
                        All of these solutions work in tandem with
                        Hanshow&rsquo;s ESL, providing a highly accurate and
                        interconnected feedback loop that slashes out of stock
                        times, ensures proper planogram, and provides a range of
                        insights for sales optimization.
                      </p>
                      <h3 className="wow fade-in-bottom delay-1s">
                        Learn more on Hanshow&rsquo;s AI solution leads to
                        <br />
                        more efficient and profitable stores.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p>&nbsp;</p>
      {/* <!-- SOLUTIONS AND PRODUCTS --> */}
      <section id="solandprod" className="aiplus-product-ranges-canvas">
        <div className="container">
          <div className="aiplus-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div className="tab-pane show active">
                  <div className="spr-room d-block">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="intro mt-5">
                          <OwlCarousel
                            className="spr-carousel mx-auto owl-carousel owl-theme wow fade-in-top delay-05s"
                            // event="translated.owl.carousel"
                            onChange={function (event) {
                              $(
                                ".aiplus-product-ranges-canvas .spr-room img"
                              ).addClass("d-none")
                              $(".spr-carousel .owl-item .item").each(
                                function () {
                                  if (
                                    $(this)
                                      .parent(".owl-item")
                                      .hasClass("active")
                                  ) {
                                    $(
                                      "#" + $(this).attr("data-target")
                                    ).removeClass("d-none")
                                  }
                                }
                              )
                            }}
                            {...options}
                          >
                            <div className="item" data-target="aiplus-product1">
                              <h2 className="wow tracking-in-expand delay-1s">
                                ViSight Camera
                              </h2>
                              <p>
                                Hanshow&rsquo;s ViSight camera features highly
                                accurate detection capacity and edge computing.
                              </p>
                              <div className="d-flex justify-content-center mb-3">
                                <a
                                  className="button button-primary wow fade-in-top delay-05s"
                                  href="/visight"
                                >
                                  Discover More ⟶
                                </a>
                              </div>
                            </div>
                            <div className="item" data-target="aiplus-product2">
                              <h2 className="wow tracking-in-expand delay-1s">
                                SPATROL ROBOT
                              </h2>
                              <p>
                                Mobile solution is ideal for retail settings
                                that do not require high-frequency monitoring.
                              </p>
                              <div className="d-flex justify-content-center mb-3">
                                <a
                                  className="button button-primary wow fade-in-top delay-05s"
                                  href="/spatrol"
                                >
                                  Discover More ⟶
                                </a>
                              </div>
                            </div>
                          </OwlCarousel>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        <img
                          id="aiplus-product1"
                          className="fade-in-left delay-05s"
                          src={AISolutionProducts1}
                          alt=""
                        />
                        <img
                          id="aiplus-product2"
                          className="d-none fade-in-left delay-05s"
                          src={SpatrolIntroProd}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIPlusSolutions
