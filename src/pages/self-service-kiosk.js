/* eslint-disable jsx-a11y/media-has-caption */

import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import Layout from "../components/layout"
import {
  EasyCheckoutIcon,
  InventoryIcon,
  OneStopShoppingIcon,
  QualityScannerIcon,
  ReducesCostsIcon,
  ScHeroBG,
  ScIntroBenefitsBg,
  ScIntroBenefitsProd,
  ScIntroProd,
  UserFriendlyIcon,
} from "../utils/imgImport"

const SelfServiceKioskPage = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Self Checkout Kiosk</h1>
            <p className="wow fade-in-left delay-08s">
              Self-checkout kiosks are one of the quickest tools for increasing
              retail efficiency, and Hanshow&rsquo;s kiosk &ndash; a winner of
              both the Good Design Award and the Red Dot Design Award &ndash;
              contains the top functionality on the market for this solution.
            </p>
          </div>
          <img src={ScHeroBG} alt="" />
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
            <a id="x-2" href="#benefits-retailers">
              Benefits for Retailers
            </a>
          </li>
          <li>
            <a id="x-3" href="#benefits-customers">
              Benefits for Customers
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- SELF CHECKOUT - INTRODUCTION --> */}
      <section id="introduction" className="sc-intro-canvas">
        <div className="big-head wow fade-in-top delay-03s">
          <h1>Kiosk</h1>
        </div>
        <div className="container">
          <img
            className="sc-intro-img intro-img wow fade-in-top delay-06s"
            src={ScIntroProd}
            alt=""
          />
          <div className="intro-title-box mt-5 wow fade-in-top delay-06s">
            <h4 className="intro-subtitle text-end">
              The trusted <br />
              standard
            </h4>
            <span className="v-line">&nbsp;</span>
            <h2 className="intro-title">
              Self Checkout <br />
              Kiosk
            </h2>
          </div>
          <div className="intro-wrapper  my-5 wow fade-in-top delay-04s">
            <p className="intro-desc">
              Often the worst part of a shopper&rsquo;s experience is heading to
              checkout only to find a couple registers open and long slow lines
              at each. This makes for a frustrating customer experience and is
              stressful for store employees as well. But there are simple
              solutions at hand that not only solve this problem but also opens
              even more opportunities for retailers.
            </p>
          </div>
        </div>
      </section>

      {/* <!--  SELF CHECKOUT - BENEFITS TO RETAILERS --> */}
      <section
        id="benefits-retailers"
        className="sc-benefits-retailers section-box pt-5"
      >
        <div className="full-width-container">
          <div className="section-hero">
            <div className="section-hero-content">
              <div className="container">
                <div className="intro-subtitle mb-3">Introducing</div>
                <h2 className="intro-title text-white text-start pb-3 mb-5">
                  Benefits to our Clients
                </h2>
                <div className="row">
                  <div className="col-md-6">
                    <Splide
                      className="splide sc-btr-slider nebular-esl-slider blue-slider wow fade-in-left delay-04s"
                      options={{
                        direction: "ttb",
                        height: "40rem",
                        wheel: true,
                        type: "loop",
                        autoplay: true,
                        interval: 4000,
                        easing: "ease-in-out",
                        pauseOnHover: true,
                        perPage: 3,
                        perMove: 3,
                        pagination: false,
                      }}
                    >
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Reducing Checkout Lines</h5>
                        </div>
                        <p>
                          Adaptable for counter tops or wall installation,
                          dramatically increasing usable floor space by 30% and
                          reducing customer density from checkout lines.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Reduces Labor Costs</h5>
                        </div>
                        <p>
                          Reduces labor costs by 40% by removing the need for
                          staff to manage each individual register, freeing them
                          to perform other tasks throughout the store.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Promotions</h5>
                        </div>
                        <p>
                          Provides interactive experiences for the customer,
                          better promotion of membership benefits and
                          promotional deals.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Retail Setting Design</h5>
                        </div>
                        <p>
                          Adaptable design fits across a range of retail
                          settings from supermarkets to convenience stores to
                          apparel or food &amp; beverage.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Connections</h5>
                        </div>
                        <p>
                          Easily adapts to other devices and networks with
                          Ethernet, WiFi, USB, and serial port connectivity.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Synced data</h5>
                        </div>
                        <p>
                          Seamlessly integrates with ERP and price labeling
                          systems, staying in sync with electronic shelf labels
                          to ensure accuracy between the price tag and the
                          register.
                        </p>
                      </SplideSlide>
                      <SplideSlide className="splide__slide">
                        <div className="splide__slide__container">
                          <h5>Integradted designs</h5>
                        </div>
                        <p>
                          Sturdy and integrated design gives the kiosk high
                          protection against dust, water, and collisions,
                          ensuring a long and productive lifespan.
                        </p>
                      </SplideSlide>
                    </Splide>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="img-fluid px-md-5 pt-5 fade-in-right delay-08s"
                      src={ScIntroBenefitsProd}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="section-hero-img rounded-0"
              src={ScIntroBenefitsBg}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <!--  SELF CHECKOUT - BENEFITS FOR CUSTOMERS --> */}
      <section
        id="benefits-customers"
        className="sc-benefits-customers section-box pt-5"
      >
        <div className="full-width-container">
          <div className="benefits-blue-box">
            <div className="container">
              <h2 className="text-center text-white fs-1 pb-2 mb-5 wow fade-in-top delay-03s">
                Benefits for Customers
              </h2>
              <div className="row justify-content-center">
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={EasyCheckoutIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">SPEED</h5>
                  <p className="wow fade-in-bottom delay-09s">
                    No need to wait in long slow checkout lines or wait for
                    stores to staff a register.
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={UserFriendlyIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    User-friendly
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Interactive screen allows for easy membership login and
                    membership benefits selection.
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="wow puff-in-center delay-03s"
                    src={QualityScannerIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Quality Scanner
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Highly advanced 180&deg; scanner instantly recognizes
                    barcodes and QR codes for seamless product scanning or
                    digital payments.
                  </p>
                </div>
                <div className="w-100">&nbsp;</div>
                <div className="benefits-item col-md-4">
                  <img
                    className="mt-3 wow puff-in-center delay-03s"
                    src={InventoryIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Scan Checkouts
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Scanning, payment, and receipt printing is all completed on
                    one small device making checkout a fast and simple
                    experience.
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="mt-3 wow puff-in-center delay-03s"
                    src={ReducesCostsIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    Payment Methods
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Connectivity with POS devices allow for credit card payments
                    at the kiosk in addition to digital payment methods.
                  </p>
                </div>
                <div className="benefits-item col-md-4">
                  <img
                    className="mt-3 wow puff-in-center delay-03s"
                    src={OneStopShoppingIcon}
                    alt=""
                  />
                  <h5 className="wow fade-in-bottom delay-06s">
                    one stop shopping
                  </h5>
                  <p className="wow fade-in-bottom delay-09s">
                    Connectivity with other external devices such as digital
                    scales allow for one-stop shopping with pricing and payments
                    all completed at the register.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SelfServiceKioskPage
