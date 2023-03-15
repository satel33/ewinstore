import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import $ from "jquery"

import Layout from "../components/layout"
import {
  BenefitsCustomers1,
  BenefitsCustomers2,
  BenefitsCustomers3,
  BenefitsCustomers4,
  BenefitsCustomers5,
  BenefitsCustomers6,
  BenefitsCustomers7,
  BenefitsCustomers8,
  BenefitsRetailers,
  SmartTrolleyImg,
  TrolleyHero,
  TrolleyHeroImg1,
  TrolleyIntro,
  UpradingBack,
  UpradingImg,
} from "../utils/imgImport"

const SmartTrolleyPage = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="smart-trolley-page-hero page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-03s">
              <span style={{ fontSize: "24pt" }}>SMART SHOPPING CART</span>
            </h1>
            <p className="wow fade-in-left delay-06s">
              A Screen for In-Store Navigation, Advertising and Promotion
              Features, as well as Self-Checkout Payment directly through the
              Trolley.
            </p>
          </div>
          <div className="page-hero-overlay">&nbsp;</div>
          <img src={TrolleyHero} alt="" />
        </div>
        <img
          className="smart-trolley-page-hero-img img-fluid wow fade-in-right delay-09s"
          src={TrolleyHeroImg1}
          alt=""
        />
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
            <a id="x-2" href="#benefits-retailers">
              Benefits to Retailers
            </a>
          </li>
          <li>
            <a id="x-3" href="#benefits-customers">
              Benefits to Customers
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- SMART TROLLEY - INTRODUCTION --> */}
      <section id="introduction" className="smart-trolley-intro-canvas">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>Smart Trolley</h1>
        </div>
        <div className="container">
          <img
            className="smart-trolley-intro-img intro-img wow fade-in-right delay-06s"
            src={TrolleyIntro}
            alt=""
          />
          <div className="intro-title-box mt-4 wow fade-in-top delay-09s">
            <h4 className="intro-subtitle text-end">
              Multi-function <br />
              screen
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">Smart Trolley</h2>
          </div>
          <div className="intro-wrapper my-5 wow fade-in-top delay-1-2s">
            <p className="intro-desc">
              The unassuming shopping cart is the ideal point to both optimize
              both retailer operations and the customer shopping experience.
            </p>
          </div>
        </div>
        <div className="full-width-container">
          <div className="section-hero">
            <div className="section-hero-content">
              <div className="container">
                <div className="row gx-md-5 pb-5">
                  <div className="col-md-6  wow fade-in-left delay-1-2s">
                    <h2 className="intro-title text-white lh-sm mt-3 mb-5">
                      Upgrading to <br />
                      Smart Trolley Solutions
                    </h2>
                    <p className="intro-desc text-white">
                      Where a traditional shopping cart serves only the function
                      of helping customers transport goods from the shelves to
                      the register,
                    </p>
                    <p className="intro-desc text-white">
                      Hanshow&rsquo;s smart trolley features a built-in screen
                      and a basket base scale that allows for easy self-checkout
                      along with in-store navigation, targeted promotions and
                      advertising, membership benefits, and other store
                      information.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="d-block mx-auto img-fluid wow fade-in-right delay-09s"
                      src={UpradingImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className="section-hero-img" src={UpradingBack} alt="" />
          </div>
        </div>
      </section>

      {/* <!-- SMART TROLLEY - BENEFITS TO RETAILERS --> */}
      <section
        id="benefits-retailers"
        className="smart-trolley-btr-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              Benefits of Smart Trolley to Retailers
            </h2>
          </div>
          <div className="st-btr-slider-wrapper row">
            <div className="col-md-6">
              <Splide
                className="splide st-btr-slider benefits-slider wow fade-in-left delay-06s"
                options={{
                  type: "loop",
                  autoplay: true,
                  interval: 4000,
                  easing: "ease-in-out",
                  pauseOnHover: true,
                  pagination: false,
                }}
              >
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Loss Prevention</h5>
                    <p>
                      A built-in scale in the base of the cart detects when an
                      item has not been scanned or doesn't match the product or
                      quantity that was scanned. A red signal light flashes on
                      the cart if items do not match, ensuring loss prevention
                      for retailers.
                    </p>
                  </div>
                  <div className="splide__slide__container">
                    <h5>Store Membership</h5>
                    <p>
                      The smart trolley's built-in screen allows targeted and
                      direct promotion of store membership.
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Product Recommendations</h5>
                    <p>
                      Customer login provides valuable insights and allows for
                      more targeted advertising and promotions.
                    </p>
                  </div>
                  <div className="splide__slide__container">
                    <h5>Self-checkout</h5>
                    <p>
                      Self-checkout feature eliminates the need for inefficient
                      manual registers
                    </p>
                  </div>
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <div className="splide__slide__container">
                    <h5>Communicate to devices</h5>
                    <p>
                      Communicates with ESL and other IoT devices to allow for
                      targeted promotions
                    </p>
                  </div>
                  <div className="splide__slide__container">
                    <h5>Product Search</h5>
                    <p>
                      Provides valuable data and insights on product searches
                      and other customer behavior
                    </p>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="col-md-6">
              <img
                className="smart-trolley-btr-img img-fluid wow fade-in-right delay-09s"
                src={BenefitsRetailers}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="full-width-container">
          <img
            className="cover-img img-fluid wow fade-in-top delay-03s"
            src={SmartTrolleyImg}
            alt=""
          />
        </div>
      </section>

      {/* <!-- SMART TROLLEY - BENEFITS TO CUSTOMERS --> */}
      <section
        id="benefits-customers"
        className="smart-trolley-btc-canvas section-box"
      >
        <div className="container">
          <div className="intro-wrapper">
            <h2 className="intro-title pb-1 mb-4 wow fade-in-top delay-03s">
              Benefits of Smart Trolley to Customers
            </h2>
            <p className="intro-desc wow fade-in-top delay-06s">
              Hanshow Smart Trolley Solution reshapes retail customer engagement
              and the customer experience, and realizes accessibility to,
              insight into of offline consumers.
            </p>
          </div>
          <div className="st-btc-slider-wrapper position-relative">
            <div className="row gx-5 align-items-center">
              <div className="col-md-5 col-lg-7">
                <div className="st-btc-imgs wow fade-in-left delay-03s">
                  <img
                    id="st-btc-0"
                    className=""
                    src={BenefitsCustomers1}
                    alt=""
                  />
                  <img
                    id="st-btc-1"
                    className="d-none"
                    src={BenefitsCustomers2}
                    alt=""
                  />
                  <img
                    id="st-btc-2"
                    className="d-none"
                    src={BenefitsCustomers3}
                    alt=""
                  />
                  <img
                    id="st-btc-3"
                    className="d-none"
                    src={BenefitsCustomers4}
                    alt=""
                  />
                  <img
                    id="st-btc-4"
                    className="d-none"
                    src={BenefitsCustomers5}
                    alt=""
                  />
                  <img
                    id="st-btc-5"
                    className="d-none"
                    src={BenefitsCustomers6}
                    alt=""
                  />
                  <img
                    id="st-btc-6"
                    className="d-none"
                    src={BenefitsCustomers7}
                    alt=""
                  />
                  <img
                    id="st-btc-7"
                    className="d-none"
                    src={BenefitsCustomers8}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-5">
                <Splide
                  className="splide st-btc-slider benefits-slider wow fade-in-left delay-06s"
                  options={{
                    direction: "ttb",
                    height: "30rem",
                    wheel: true,
                    type: "loop",
                    autoplay: true,
                    interval: 4000,
                    easing: "ease-in-out",
                    pauseOnHover: true,
                    perPage: 4,
                    perMove: 1,
                    pagination: false,
                  }}
                  onMove={function () {
                    $(".st-btc-imgs img").addClass("d-none")
                    $(".st-btc-slider .splide__slide").each(function () {
                      if ($(this).hasClass("is-active")) {
                        $("#" + $(this).attr("data-target")).removeClass(
                          "d-none"
                        )
                      }
                    })
                  }}
                >
                  <SplideSlide className="splide__slide" data-target="st-btc-0">
                    <p>
                      Search Function on cart screen helps obtain product
                      availability and location.
                    </p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-1">
                    <p>
                      Navigation Function provides picking route for shopping
                      list items
                    </p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-2">
                    <p>Membership Deals promoted upon login</p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-3">
                    <p>Personalized Promotions and Advertising</p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-4">
                    <p>
                      Product Scanning and Payment directly on cart. Can leave
                      store with items directly from the shopping cart
                    </p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-5">
                    <p>
                      In-store Location-Based Promotions according to nearby
                      products
                    </p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-6">
                    <p>No need for waiting in long checkout lines</p>
                  </SplideSlide>
                  <SplideSlide className="splide__slide" data-target="st-btc-7">
                    <p>Built-in Phone Charger directly on the shopping cart</p>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SmartTrolleyPage
