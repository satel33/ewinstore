import React from "react"
import loadable from "@loadable/component"
import $ from "jquery"

import Layout from "../../../components/layout"
import {
  IntelligentBenefits1,
  IntelligentHero,
  IntelliStore1,
  IntelliStore2,
  IntelliStore3,
  IntelliStore4,
  IntelProduct1,
  IntelProduct2,
  IntelProduct3,
  IntelProduct4,
  IntelProduct5,
  IntelSelfService1,
  IntelSelfService2,
  IntelSelfService3,
} from "../../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const IntelligentStore = () => {
  const options = {
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
  }
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Intelligent Store</h1>
            <p className="wow fade-in-left delay-08s">
              Digital solutions have the potential to completely transform store
              operations and the customer experience in every way.
            </p>
          </div>
          <img src={IntelligentHero} alt="" />
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <ul>
            <li>
              <a id="x-1" href="#benefits">
                Benefits
              </a>
            </li>
            <li>
              <a id="x-2" href="#instore">
                In-store Marketing Solutions
              </a>
            </li>
            <li>
              <a id="x-3" href="#selfservice">
                Self-Service Solutions
              </a>
            </li>
            <li>
              <a id="x-4" href="#product">
                Products
              </a>
            </li>
          </ul>
        </ul>
      </nav>

      {/* <!-- BENEFITS --> */}
      <section id="benefits" className="intelligent-store-benefits-canvas">
        <div className="intelligent-store-benefits">
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="intro wow fade-in-bottom delay-05s text-center">
                  <h1 className="mb-4">Intelligent Store Benefits</h1>
                  <p>
                    Digital solutions have the potential to completely transform
                    store operations and the customer experience in every way.
                    With electronic shelf labels as the building blocks of
                    retail digitalization, endless and exciting solutions can be
                    integrated into a holistic system of automation,
                    optimization, data, and insights.
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
                      src={IntelligentBenefits1}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="intro wow fade-in-right delay-05s">
                      <p>
                        Hanshow&rsquo;s Intelligent Store solutions include a
                        range of technology that delivers convenience for the
                        customer through self-checkout kiosks and smart trolleys
                        with self-checkout features, along with sales boosting
                        digital signage for retailers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- IN-STORE MARKETING SOLUTIONS --> */}
      <section id="instore" className="intelligent-store-instore-canvas">
        <div className="intelligent-store-instore">
          <div className="container">
            <div className="ci">
              <div className="container">
                <div className="intro-box">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="intro wow fade-in-right delay-05s">
                        <h1>
                          In-store Marketing <br />
                          Solutions:
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="intro wow fade-in-left delay-05s">
                        <p>
                          Hanshow&rsquo;s in-store marketing solution enhance
                          the operating efficiency by bringing a systematic
                          approach of digital signage management. Not only the
                          hardware can be remotely managed, but also the content
                          on screens can be generated through template fed in
                          with the data from the clients&rsquo; database, which
                          minimize the workload of operators at the store place.
                        </p>
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
                      <div className="is-isms-connector is-connector connector-wrapper">
                        <div className="connector-img">
                          <img
                            className="connector-bg img-fluid"
                            src={IntelliStore1}
                            alt=""
                          />
                          <img
                            className="connector-prod le-connector-prod"
                            src={IntelliStore2}
                            alt=""
                          />
                          <img
                            className="connector-prod lm-connector-prod"
                            src={IntelliStore3}
                            alt=""
                          />
                          <img
                            className="connector-prod la-connector-prod"
                            src={IntelliStore4}
                            alt=""
                          />
                          <div className="le-connector-mobile connector-mobile">
                            1
                          </div>
                          <div className="lm-connector-mobile connector-mobile">
                            2
                          </div>
                          <div className="la-connector-mobile connector-mobile">
                            3
                          </div>
                        </div>
                        <ul className="connector-list">
                          <li>
                            <div className="connector-title">
                              <a
                                href="/lumina-edge"
                                target="_blank"
                                rel="noopener"
                              >
                                LUMINA EDGE
                              </a>
                            </div>
                            <div className="connector-desc">
                              Screens that are installed on the edge of the
                              shelves to vividly display product information
                            </div>
                            <div className="connector-1 connector connector-y">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-x">
                              &nbsp;
                            </div>
                            <div className="connector-3 connector connector-y connector-dot connector-bottom">
                              &nbsp;
                            </div>
                          </li>
                          <li>
                            <div className="connector-title">
                              <a
                                href="/lumina-max"
                                target="_blank"
                                rel="noopener"
                              >
                                LUMINA MAX
                              </a>
                            </div>
                            <div className="connector-desc">
                              A solution to facilitate innovative marketing
                              activities in the new retail application
                              scenarios.&nbsp;
                            </div>
                            <div className="connector-1 connector connector-x ">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-y connector-dot connector-top">
                              &nbsp;
                            </div>
                          </li>
                          <li>
                            <div className="connector-title">
                              <a
                                href="/lumina-aqua"
                                target="_blank"
                                rel="noopener"
                              >
                                LUMINA AQUA
                              </a>
                            </div>
                            <div className="connector-desc">
                              Double sided LCD screens to display images and
                              videos of product information on shelf
                            </div>
                            <div className="connector-1 connector connector-x">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-y connector-dot connector-top">
                              &nbsp;
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SELF-SERVICE SOLUTIONS --> */}
      <section
        id="selfservice"
        className="intelligent-store-selfservice-canvas"
      >
        <div className="intelligent-store-selfservice">
          <div className="container">
            <div className="ci">
              <div className="container">
                <div className="intro-box">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="intro wow fade-in-right delay-05s">
                        <h1>
                          Self-Service <br />
                          Solutions:
                        </h1>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="intro wow fade-in-left delay-05s">
                        <p>
                          The self-checkout kiosk allows for retailers to forgo
                          the cost and space intensive manual checkout register
                          while customers no longer need to wait in long lines
                          during peak hours. Hanshow&rsquo;s smart trolley
                          features a screen for in-store navigation, advertising
                          and promotion features, as well as self-checkout
                          payment directly through the trolley.
                        </p>
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
                      <div className="is-sss-connector is-connector connector-wrapper">
                        <div className="connector-img">
                          <img
                            className="connector-bg"
                            src={IntelSelfService1}
                            alt=""
                          />
                          <img
                            className="connector-prod kiosk-connector-prod img-fluid"
                            src={IntelSelfService2}
                            alt=""
                          />
                          <img
                            className="connector-prod trolley-connector-prod  img-fluid"
                            src={IntelSelfService3}
                            alt=""
                          />
                          <div className="kiosk-connector-mobile connector-mobile">
                            1
                          </div>
                          <div className="trolley-connector-mobile connector-mobile">
                            2
                          </div>
                        </div>
                        <ul className="connector-list wow fade-in-right delay-07s">
                          <li>
                            <div className="connector-title">
                              <a
                                href="/self-service-kiosk"
                                target="_blank"
                                rel="noopener"
                              >
                                THE SELF-CHECKOUT KIOSK
                              </a>
                            </div>
                            <div className="connector-desc">
                              Self-service checkout machine for retailers to
                              provide fast and convenient checkout services
                            </div>
                            <div className="connector-1 connector connector-x">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-y connector-dot connector-bottom">
                              &nbsp;
                            </div>
                          </li>
                          <li>
                            <div className="connector-title">
                              <a
                                href="/smart-trolley"
                                target="_blank"
                                rel="noopener"
                              >
                                HANSHOW'S SMART TROLLEY
                              </a>
                            </div>
                            <div className="connector-desc">
                              A built-in screen and a basket base scale that
                              allows for easy self-checkout along with in-store
                              navigation, targeted promotions and advertising,
                              membership benefits, and other store information
                            </div>
                            <div className="connector-1 connector connector-y ">
                              &nbsp;
                            </div>
                            <div className="connector-2 connector connector-x connector-dot connector-left">
                              &nbsp;
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
                <div className="intro-box selfservice">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="wow fade-in-top delay-1s">
                        These devices are all managed under Hanshow&rsquo;s
                        All-Star network allowing for integration across
                        platforms and devices, making seamless store management
                        and customer experience no longer just a possibility.
                      </p>
                      <h3 className="wow fade-in-bottom delay-1s">
                        Retail stores can be so much better.
                        <br />
                        Hanshow&rsquo;s Intelligent Store solutions are how.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- PRODUCT --> */}
      <section
        id="product"
        className="intelligent-store-product-ranges-canvas mb-5"
      >
        <div className="container">
          <div className="intelligent-store-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-content tab-content wow">
                <div className="tab-pane show active">
                  <div className="spr-room">
                    <div className="intro mt-5">
                      <OwlCarousel
                        className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-05s"
                        {...options}
                        onChange={function (event) {
                          $(
                            ".intelligent-store-product-ranges-canvas .spr-room img"
                          ).addClass("d-none")
                          $(".spr-carousel .owl-item .item").each(function () {
                            if (
                              $(this).parent(".owl-item").hasClass("active")
                            ) {
                              $("#" + $(this).attr("data-target")).removeClass(
                                "d-none"
                              )
                            }
                          })
                        }}
                      >
                        <div className="item" data-target="is-prod1">
                          <h2 className="wow tracking-in-expand delay-1s">
                            SELF CHECKOUT KIOSK
                          </h2>
                          <p>
                            Self-checkout kiosks are one of the quickest tools
                            for increasing retail efficiency, and
                            Hanshow&rsquo;s kiosk &ndash; a winner of both the
                            Good Design Award and the Red Dot Design Award
                            &ndash; contains the top functionality on the market
                            for this solution.
                          </p>
                          <a
                            className="button button-primary mb-3 wow fade-in-top delay-05s"
                            href="/self-service-kiosk"
                          >
                            Discover More ⟶
                          </a>
                        </div>
                        <div className="item" data-target="is-prod2">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Lumina Aqua
                          </h2>
                          <p>
                            A truly one-of-a-kind electronic shelf label, Lumina
                            supports vivid displays on an LCD screen that
                            instantly enlivens retail settings.
                          </p>
                          <a
                            className="button button-primary mb-3 wow fade-in-top delay-05s"
                            href="/lumina-aqua"
                          >
                            Discover More ⟶
                          </a>
                        </div>
                        <div className="item" data-target="is-prod3">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Lumina Edge
                          </h2>
                          <p>
                            Lumina Edge is Hanshow's unique shelf-edge digital
                            marketing screen series, transforming a static and
                            tired shelf display into a vibrant and eye-catching
                            point of sale for retailers.
                          </p>
                          <a
                            className="button button-primary mb-3 wow fade-in-top delay-05s"
                            href="/lumina-edge"
                          >
                            Discover More ⟶
                          </a>
                        </div>
                        <div className="item" data-target="is-prod4">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Lumina Max
                          </h2>
                          <p>
                            Lumina Max is the biggest screen in the Lumina
                            series, designed for displays in large settings.
                          </p>
                          <a
                            className="button button-primary mb-3 wow fade-in-top delay-05s"
                            href="/lumina-max"
                          >
                            Discover More ⟶
                          </a>
                        </div>
                        <div className="item" data-target="is-prod5">
                          <h2 className="wow tracking-in-expand delay-1s">
                            Smart Trolley
                          </h2>
                          <p>
                            Hanshow&rsquo;s smart trolley features a built-in
                            screen and a basket base scale that allows for easy
                            self-checkout along with in-store navigation,
                            targeted promotions and advertising, membership
                            benefits, and other store information.
                          </p>
                          <a
                            className="button button-primary mb-3 wow fade-in-top delay-05s"
                            href="/smart-trolley"
                          >
                            Discover More ⟶
                          </a>
                        </div>
                      </OwlCarousel>
                    </div>
                    <img
                      id="is-prod1"
                      className="fade-in-left delay-05s img-fluid"
                      src={IntelProduct1}
                      alt=""
                    />
                    <img
                      id="is-prod2"
                      className="fade-in-left delay-05s img-fluid d-none"
                      src={IntelProduct2}
                      alt=""
                    />
                    <img
                      id="is-prod3"
                      className="fade-in-left delay-05s img-fluid d-none"
                      src={IntelProduct3}
                      alt=""
                    />
                    <img
                      id="is-prod4"
                      className="fade-in-left delay-05s img-fluid d-none"
                      src={IntelProduct4}
                      alt=""
                    />
                    <img
                      id="is-prod5"
                      className="fade-in-left delay-05s img-fluid d-none"
                      src={IntelProduct5}
                      alt=""
                    />
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

export default IntelligentStore
