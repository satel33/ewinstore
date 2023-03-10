import React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import {
  LuminaEdgeAccuracyIcon,
  LuminaEdgeBenefits1,
  LuminaEdgeCreatvidIcon,
  LuminaEdgeHero,
  LuminaEdgeIntro1,
  LuminaEdgeIntro2,
  LuminaEdgePromotionIcon,
  LuminaEdgeVividIcon,
} from "../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const StellarEdgePage = () => {
  return (
    <Layout>
      {/* <!-- MAIN HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Lumina Edge</h1>
            <p className="wow fade-in-left delay-08s">
              Lumina Edge is Hanshow's unique shelf-edge digital marketing
              screen series, transforming a static and tired shelf display into
              a vibrant and eye-catching point of sale for retailers. Lumina Max
              is the biggest screen in the Lumina series, designed for displays
              in large settings.
            </p>
          </div>
          <img src={LuminaEdgeHero} alt="" />
        </div>
      </section>
      {/* <!-- SECTION NAV --> */}
      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul className="justify-content-center">
          <li className="text-center" style={{ flex: "1" }}>
            <a id="x-1" className="active" href="#introduction">
              Lumina Edge
            </a>
          </li>
          <li className="text-center" style={{ flex: "1" }}>
            <a id="x-2" href="/lumina-max#introduction">
              Lumina Max
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- INTRODUCTION --> */}
      <section id="introduction" className="lumina-edge-introduction-canvas">
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Lumina</h1>
        </div>
        <div className="container">
          <div className="lumina-edge-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div className="tab-pane show active" role="tabpanel">
                  <div className="spr-room">
                    <div className="intro">
                      <img
                        className="wow fade-in-top delay-1s"
                        src={LuminaEdgeIntro1}
                        alt=""
                      />
                      <div className="intro-title-box mb-4">
                        <div className="intro-subtitle text-end wow fade-in-left delay-1s">
                          Unique
                          <br />
                          Shelf-Edge
                        </div>
                        <span className="v-line">&nbsp;</span>
                        <h1 className="intro-title wow fade-in-right delay-1s">
                          Lumina Edge
                        </h1>
                      </div>
                      <div className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-1s">
                        <div className="item">
                          <p>
                            Lumina Edge is an LCD screen that can function as a
                            digital price label for products and also as a
                            dynamic content display screen just like the rest of
                            the Lumina series. With installation of the Lumina
                            Edge series brands and retailers can boost sales
                            through new marketing opportunities and targeted
                            promotions, while providing their customers with a
                            fresh and memorable shopping experience.
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
        <div className="banner wow fade-in-top delay-1s">
          <img className="img-fluid" src={LuminaEdgeIntro2} alt="" />
        </div>
      </section>

      {/* <!-- BENEFITS TO CLIENTS --> */}
      <section id="benefits" className="lumina-edge-benefits-canvas">
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Edge</h1>
        </div>
        <div className="ci">
          <div className="container">
            <div className="intro-box">
              <div className="intro text-center">
                <h2 className="wow fade-in-top delay-05s">
                  Unique Selling Points
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
                        <h4>&nbsp;</h4>
                        <h4>Easy Installation</h4>
                        <p>
                          Lumina Edge is easy to install and comes fully loaded
                          with necessary software and content players.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>LifeSpan</h4>
                        <p>Over 30,000 hour lifespan.</p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Display In Sync</h4>
                        <p>
                          Multiple screens on multiple shelves able to sync
                          content.
                        </p>
                        <article>
                          <span className="v-line">&nbsp;</span>
                        </article>
                        <article>
                          <p>&nbsp;</p>
                        </article>
                      </article>
                    </div>
                    <div className="col-lg-6 wow fade-in-left delay-1s">
                      <article>
                        <h4>&nbsp;</h4>
                        <h4>Display</h4>
                        <p>
                          FHD display with &gt;178&deg; viewing angle for
                          continuous views as customers walk by.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Package</h4>
                        <p>
                          Upon purchase, the complete solution with hardware,
                          software, accessories, and tailored size and
                          appearance are all provided by Hanshow.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Fast Update</h4>
                        <p>
                          Easy integration with backend content management
                          systems for fast and automated display updates.
                        </p>
                        <p>&nbsp;</p>
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
                                  src={LuminaEdgeBenefits1}
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
          <div className="slogan">
            <div className="container">
              Hanshow is the world's leading provider of electronic shelf label
              and
              <br />
              omni-channel digital store solutions.
            </div>
          </div>
        </div>
      </section>

      <section className="lumina-edge-entry-canvas">
        <div className="lumina-edge-entry">
          <div className="bc-benefits-canvas">
            <div className="container">
              <div className="bc-benefits">
                <div className="intro">
                  <h4 className="wow fade-in-top delay-06s">
                    Benefits of Lumina Edge to Clients
                  </h4>
                  <h5 className="wow fade-in-top delay-09s">
                    Efficiency and Profit Boosting for Stores.
                  </h5>
                </div>
                <div className="benefits-list">
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaEdgeAccuracyIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Boost Sales
                    </h5>
                    <p>
                      Lumina Edge was designed specifically to boost sales for
                      both retailers and brands.
                    </p>
                  </div>
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaEdgeVividIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Video Promotions
                    </h5>
                    <p>
                      For retailers, Lumina Edge allows for bright, dynamic
                      video promotions on the shelf edge, ensuring customers
                      will not miss promoted deals.
                    </p>
                  </div>
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaEdgePromotionIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Categorize Promotions
                    </h5>
                    <p>
                      Retailers can set deals to be promoted automatically at
                      certain times, used to promote products not selling well
                      or further increase purchases of top selling products.
                    </p>
                  </div>
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaEdgeCreatvidIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Creative Video
                    </h5>
                    <p>
                      Lumina Edge gives product brands a new tool for in-store
                      marketing, enhancing sales and branding through creative
                      video content directly at the physical point of sale.
                    </p>
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

export default StellarEdgePage
