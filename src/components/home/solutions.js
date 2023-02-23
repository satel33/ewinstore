import * as React from "react"
import loadable from "@loadable/component"

import {
  AllStar1,
  AllStar2,
  AllStar3,
  LuminaAqua1,
  LuminaAqua2,
  LuminaEdge,
  LuminaMax1,
  LuminaMax2,
  NebularPhoto,
  SelfCheckoutKiosk1,
  SmartTrolley1,
  SmartTrolley2,
  SpatrolRobot1,
  SpatrolRobot2,
  SpatrolRobot3,
  StellarPro,
  VisightCamera1,
  VisightCamera2,
} from "../../utils/imgImport"
import { Link } from "gatsby"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const Solutions = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 10,
    items: 1,
    lazyLoad: true,
    dots: true,
    nav: true,
  }

  return (
    <section className="solutions-canvas">
      <div className="container">
        <div className="solutions">
          <div className="solutions-head wow fade-in">
            <h2>Solutions</h2>
          </div>
          <div className="solutions-body">
            <div className="solutions-tab-main wow fade-in-top delay-06s">
              <div className="solutions-tabs-nav-room">
                <ul
                  className="solutions-tabs-nav nav nav-tabs"
                  role="presentation"
                >
                  <li className="nav-item">
                    <button
                      className="nav-link active fade-in-right"
                      id="electronic-shelf-labels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#electronic-shelf-labels"
                      type="button"
                      role="tab"
                      aria-controls="electronic-shelf-labels"
                      aria-selected="true"
                    >
                      Electronic Shelf Labels
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link  fade-in-right"
                      id="intelligent-store-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#intelligent-store"
                      type="button"
                      role="tab"
                      aria-controls="intelligent-store"
                      aria-selected="false"
                    >
                      Intelligent Store
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link  fade-in-right"
                      id="ai-plus-solutions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ai-plus-solutions"
                      type="button"
                      role="tab"
                      aria-controls="ai-plus-solutions"
                      aria-selected="false"
                    >
                      AIoT Solutions
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link  fade-in-right"
                      id="all-star-cloud-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all-star-cloud"
                      type="button"
                      role="tab"
                      aria-controls="all-star-cloud"
                      aria-selected="false"
                    >
                      All-Star IoT
                    </button>
                  </li>
                </ul>
              </div>
              <div className="solutions-tabs-content tab-content">
                <div
                  className="tab-pane fade show active "
                  id="electronic-shelf-labels"
                  role="tabpanel"
                  aria-labelledby="electronic-shelf-labels-tab"
                >
                  <div className="st-room">
                    <div className="st-intro fade-in-left delay-08s">
                      <p>
                        Hanshow has developed highly interactive electronic
                        shelf labels (ESL) to facilitate store management, ESLs
                        enhance the consumer shopping experience while improving
                        pricing and promotion management. Our electronic shelf
                        labels offer a range of features that improve
                        operational efficiency, reduce pricing errors and lower
                        labor costs.
                      </p>
                      <div className="st-intro-command">
                        <a
                          href="solutions/category/electronic-shelf-labels"
                          className="button button-primary"
                        >
                          Discover Electronic Shelf Labels ⟶
                        </a>
                      </div>
                    </div>
                    <div className="st-body">
                      <div className="st-body-tabs-navs-room fade-in-left delay-1s">
                        <ul
                          className="st-body-tabs-navs nav nav-tabs"
                          role="presentation"
                        >
                          <li className="nav-item">
                            <button
                              className="nav-link active "
                              id="solution1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution1-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution1"
                              aria-selected="true"
                            >
                              <span className="tab-text">Nebular</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    With the Nebular series, Hanshow is
                                    redefining the future of electronic gondola
                                    labels. Nebular is equipped with the most
                                    advanced technologies in every aspect: a
                                    proprietary SIP processor with lower power
                                    consumption, longer battery life up to 15
                                    years and an ultra-thin unibody design.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>

                          <li className="nav-item">
                            <button
                              className="nav-link  "
                              id="solution2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution2-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution2"
                              aria-selected="false"
                            >
                              <span className="tab-text">Stellar Pro</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Advance to next generation ESL with Stellar
                                    Pro, featuring upgrades on battery life, a
                                    specialized ESL chip, expanded storage, and
                                    improved overall performance. Stellar Pro is
                                    now equipped with the world&#039;s largest
                                    retailers.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="st-body-content tab-content">
                        <div
                          className="tab-pane show active"
                          id="solution1-labels"
                          role="tabpanel"
                          aria-labelledby="solution1-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={NebularPhoto}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          className="tab-pane "
                          id="solution2-labels"
                          role="tabpanel"
                          aria-labelledby="solution2-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={StellarPro}
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

                <div
                  className="tab-pane fade  "
                  id="intelligent-store"
                  role="tabpanel"
                  aria-labelledby="intelligent-store-tab"
                >
                  <div className="st-room">
                    <div className="st-intro fade-in-left delay-08s">
                      <p>
                        The digital marketing solution provides a full range of
                        intelligent marketing functions to solve the problems of
                        high customer acquisition costs and difficult to reach
                        marketing, helping merchants to efficiently achieve
                        sales targets; the smart payment solution provides
                        unmanned self-checkout and mobile payment solutions for
                        all scenarios, increasing efficiency and sales volumes
                        for stores.
                      </p>
                      <div className="st-intro-command">
                        <Link
                          to="/solutions/category/intelligent-store"
                          className="button button-primary"
                        >
                          Discover Intelligent Store ⟶
                        </Link>
                      </div>
                    </div>
                    <div className="st-body">
                      <div className="st-body-tabs-navs-room fade-in-left delay-1s">
                        <ul
                          className="st-body-tabs-navs nav nav-tabs"
                          role="presentation"
                        >
                          <li className="nav-item">
                            <button
                              className="nav-link active "
                              id="solution3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution3-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution3"
                              aria-selected="true"
                            >
                              <span className="tab-text">Lumina Aqua</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    The Lumina Aqua Electronic Shelf Labeling
                                    Solution is designed for Fresh Food Retail
                                    Displays, and is designed to improve store
                                    operational efficiency and aesthetics to
                                    enhance profitability.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>

                          <li className="nav-item">
                            <button
                              className="nav-link  "
                              id="solution4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution4-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution4"
                              aria-selected="false"
                            >
                              <span className="tab-text">Digital Signage</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Transforming a static and tired shelf
                                    display into a vibrant and eye-catching
                                    point of sale for retailers.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>

                          <li className="nav-item">
                            <button
                              className="nav-link  "
                              id="solution5-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution5-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution5"
                              aria-selected="false"
                            >
                              <span className="tab-text">Smart Trolley</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Hanshow’s smart trolley features a built-in
                                    screen and a basket base scale that allows
                                    for easy self-checkout along with in-store
                                    navigation.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>

                          <li className="nav-item">
                            <button
                              className="nav-link  "
                              id="solution6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution6-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution6"
                              aria-selected="false"
                            >
                              <span className="tab-text">Payment Kiosk</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Simple &amp; Compact, integrated with a
                                    variety of mobile payment methods to
                                    alleviate the pressure of the line queues.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="st-body-content tab-content">
                        <div
                          className="tab-pane show active"
                          id="solution3-labels"
                          role="tabpanel"
                          aria-labelledby="solution3-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={LuminaAqua1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={LuminaAqua2}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          className="tab-pane "
                          id="solution4-labels"
                          role="tabpanel"
                          aria-labelledby="solution4-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={LuminaMax1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={LuminaMax2}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={LuminaEdge}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          className="tab-pane "
                          id="solution5-labels"
                          role="tabpanel"
                          aria-labelledby="solution5-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SmartTrolley1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SmartTrolley2}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          className="tab-pane "
                          id="solution6-labels"
                          role="tabpanel"
                          aria-labelledby="solution6-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SelfCheckoutKiosk1}
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

                <div
                  className="tab-pane fade  "
                  id="ai-plus-solutions"
                  role="tabpanel"
                  aria-labelledby="ai-plus-solutions-tab"
                >
                  <div className="st-room">
                    <div className="st-intro fade-in-left delay-08s">
                      <p>
                        Hanshow’s cutting-edge AI monitoring solution was
                        specially developed for retail settings, features stock
                        level monitoring and retail loss prevention.
                      </p>
                      <div className="st-intro-command">
                        <Link
                          to="/solutions/category/ai-plus-solutions"
                          className="button button-primary"
                        >
                          Discover AI + Solutions ⟶
                        </Link>
                      </div>
                    </div>
                    <div className="st-body">
                      <div className="st-body-tabs-navs-room fade-in-left delay-1s">
                        <ul
                          className="st-body-tabs-navs nav nav-tabs"
                          role="presentation"
                        >
                          <li className="nav-item">
                            <button
                              className="nav-link active "
                              id="solution7-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution7-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution7"
                              aria-selected="true"
                            >
                              <span className="tab-text">Inventory Robot</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Hanshow&#039;s inventory robot is able to
                                    roam store aisles to collect shelf
                                    information and provide insightful data.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>

                          <li className="nav-item">
                            <button
                              className="nav-link  "
                              id="solution8-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution8-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution8"
                              aria-selected="false"
                            >
                              <span className="tab-text">Planogram Camera</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    The camera conducts real-time display
                                    monitoring and product recognition, this
                                    solution is suitable for those scenarios
                                    where the display status frequently changes
                                    and real-time detection of display problems
                                    is required.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="st-body-content tab-content">
                        <div
                          className="tab-pane show active"
                          id="solution7-labels"
                          role="tabpanel"
                          aria-labelledby="solution7-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SpatrolRobot1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SpatrolRobot2}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={SpatrolRobot3}
                                  alt=""
                                />
                              </div>
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          className="tab-pane "
                          id="solution8-labels"
                          role="tabpanel"
                          aria-labelledby="solution8-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={VisightCamera1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={VisightCamera2}
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

                <div
                  className="tab-pane fade  "
                  id="all-star-cloud"
                  role="tabpanel"
                  aria-labelledby="all-star-cloud-tab"
                >
                  <div className="st-room">
                    <div className="st-intro fade-in-left delay-08s">
                      <p>
                        Hanshow&#039;s All-Star platform provides customers with
                        a single, centralized and unified IoT solution. From IoT
                        device management to digital operations, this platform
                        enables flexible modular integration: price variation,
                        inventory management, picking, product placement, smart
                        payments, out-of-stock reporting, etc. Devices and
                        networks can now work together in an agile and unified
                        way.
                      </p>
                      <div className="st-intro-command">
                        <Link
                          to="/solutions/category/all-star-cloud"
                          className="button button-primary"
                        >
                          Discover Allstar Platform ⟶
                        </Link>
                      </div>
                    </div>
                    <div className="st-body">
                      <div className="st-body-tabs-navs-room fade-in-left delay-1s">
                        <ul
                          className="st-body-tabs-navs nav nav-tabs"
                          role="presentation"
                        >
                          <li className="nav-item">
                            <button
                              className="nav-link active "
                              id="solution9-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#solution9-labels"
                              type="button"
                              role="tab"
                              aria-controls="solution9"
                              aria-selected="true"
                            >
                              <span className="tab-text">All-Star</span>
                              <span className="tab-desc">
                                <span className="tab-desc-inner">
                                  <span className="tab-caption">
                                    Hanshow developed its All-Star network
                                    platform to solve just such an increasingly
                                    jumbled set of technology and systems.
                                  </span>
                                  <span className="line">&nbsp;</span>
                                </span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="st-body-content tab-content">
                        <div
                          className="tab-pane show active"
                          id="solution9-labels"
                          role="tabpanel"
                          aria-labelledby="solution9-tab"
                        >
                          <div className="stbc-carousel-canvas fade-in-right">
                            <OwlCarousel
                              className="stbc-carousel owl-carousel owl-theme"
                              {...options}
                            >
                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={AllStar1}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={AllStar2}
                                  alt=""
                                />
                              </div>

                              <div className="item">
                                <img
                                  className="owl-lazy"
                                  data-src={AllStar3}
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
      </div>
    </section>
  )
}

export default Solutions
