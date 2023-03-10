import React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import {
  LuminaEdgeHero,
  LuminaMaxBenefits1,
  LuminaMaxEntry,
  LuminaMaxIntro1,
  LuminaMaxInventoryIcon,
  LuminaMaxPromotionIcon,
  LuminaMaxSpeedIcon,
} from "../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const StellarMaxPage = () => {
  return (
    <Layout>
      {/* <!-- MAIN HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Lumina Max</h1>
            <p className="wow fade-in-left delay-08s">
              With vivid high-definition screen display, Lumina Max solution
              empowers the new retail business to preset item features, and
              promotion in a much better way
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
            <a id="x-1" href="/lumina-edge#introduction">
              Lumina Edge
            </a>
          </li>
          <li className="text-center" style={{ flex: "1" }}>
            <a id="x-2" className="active" href="#introduction">
              Lumina Max
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- INTRODUCTION --> */}
      <section id="introduction" className="lumina-max-introduction-canvas">
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Lumina</h1>
        </div>
        <div className="container">
          <div className="lumina-max-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div className="tab-pane show active" role="tabpanel">
                  <div className="spr-room">
                    <div className="intro">
                      <img
                        className="wow fade-in-top delay-1s"
                        src={LuminaMaxIntro1}
                        alt=""
                      />
                      <div className="intro-title-box mb-4 wow fade-in-top delay-1s">
                        <h4 className="intro-subtitle text-end">
                          Displays in <br />
                          Large Settings
                        </h4>
                        <span className="v-line">&nbsp;</span>
                        <h1 className="intro-title">Lumina Max</h1>
                      </div>
                      <OwlCarousel
                        className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-1s"
                        items={1}
                        nav={false}
                        dots={true}
                        autoplay={true}
                      >
                        <div className="item">
                          <p>
                            Lumina Max is the biggest screen in the Lumina
                            series, designed for displays in large settings.
                          </p>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slogan">
          <div className="container">
            Lumina Max can be thought of as a versatile 55 inch TV screen that
            can be used for anything from important store announcements to menu
            offerings.
          </div>
        </div>
      </section>

      {/* <!-- BENEFITS TO CLIENTS --> */}
      <section id="benefits" className="lumina-max-benefits-canvas">
        <div className="big-head ci-title wow fade-in-top delay-05s">
          <h1>Max</h1>
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
                        <h4>Double Sided Screen</h4>
                        <p>
                          55 inch double sided screen powered by one microchip
                          processor. Each screen can display its own unique
                          content.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Ultra Slim Screen</h4>
                        <p>
                          Ultra slim design, only 2.4 cm thick for a 55 inch
                          screen.
                        </p>
                      </article>
                    </div>
                    <div className="col-lg-6 wow fade-in-left delay-1s">
                      <article>
                        <h4>Package</h4>
                        <p>
                          Screens arrive fully loaded with software and content
                          players.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>Content In Sync</h4>
                        <p>
                          Multiple screens can display synced content through
                          Hanshow's integrated All Star platform.
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </article>
                      <article>
                        <h4>LifeSpan</h4>
                        <p>Over 30,000-hour lifespan.</p>
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
                                  src={LuminaMaxBenefits1}
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
        <div className="slogan">
          <div className="container">
            A solution to facilitate innovative marketing activities in the New
            Retail Scenarios. Composed of software, hardware, system and
            communication.
          </div>
        </div>
      </section>

      <section className="lumina-max-entry-canvas mb-5">
        <div className="lumina-max-entry">
          <div className="bc-benefits-canvas">
            <div className="container">
              <div className="bc-benefits">
                <div className="intro">
                  <h4 className="wow fade-in-top delay-06s">
                    Benefits of Lumina Max to Clients
                  </h4>
                  <h5 className="wow fade-in-top delay-09s">
                    Efficiency and Profit Boosting for Stores.
                  </h5>
                </div>
                <div className="benefits-list">
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaMaxSpeedIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Fast Updates
                    </h5>
                    <p>
                      Easy content updates for all store screens through remote
                      backend system.
                    </p>
                  </div>
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaMaxPromotionIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Advertisement
                    </h5>
                    <p>Advertisement platform integration.</p>
                  </div>
                  <div className="ben">
                    <img
                      className="wow puff-in-center delay-06s"
                      src={LuminaMaxInventoryIcon}
                      alt=""
                    />
                    <h5 className="wow fade-in-bottom delay-04s">
                      Dynamic Price Update
                    </h5>
                    <p>
                      Serves as a dynamic, easily updated price board display.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner wow fade-in-top delay-1s">
          <img className="img-fluid" src={LuminaMaxEntry} alt="" />
        </div>
      </section>
    </Layout>
  )
}

export default StellarMaxPage
