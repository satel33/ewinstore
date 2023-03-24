import React, { useState } from "react"
import { graphql } from "gatsby"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import loadable from "@loadable/component"
import $ from "jquery"

import Layout from "../../../components/layout"
import {
  ElectronicShelfBG,
  SolutionsAdvantages1,
  SolutionsAdvantages2,
  SolutionsAdvantages3,
  SolutionsBenefits1,
  SolutionsBenefits2,
  SolutionsBenefits3,
  SolutionsBenefits4,
  SolutionsBenefits5,
  SolutionsBenefits6,
  SolutionsBenefits7,
  SolutionsFeatured1,
  SolutionsFeatured2,
  SolutionsFeatured3,
  SolutionsFeatured4,
  SolutionsFeatured5,
  SolutionsFeatured6,
  SolutionsFeatured7,
  SolutionsNebular,
  SolutionsStellarPro,
} from "../../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const ElectronicShelfLabels = ({ data }) => {
  const categories = data.allPrismicCaseCategory.nodes
  const [selectedTab, setSelectTab] = useState(categories[0].uid)
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">
              Electronic Shelf
              <br />
              Labels
            </h1>
            <p className="wow fade-in-left delay-08s">
              Hanshow has set the industry standard in ESL quality.
            </p>
          </div>
          <img src={ElectronicShelfBG} alt="" />
          <div className="page-hero-overlay">&nbsp;</div>
        </div>
      </section>
      <p>&nbsp;</p>

      {/* <!-- SECTION NAV --> */}
      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <li>
            <a id="x-1" href="#benefits">
              Benefits
            </a>
          </li>
          <li>
            <a id="x-2" href="#advantages">
              Hanshow Advantages
            </a>
          </li>
          <li>
            <a id="x-3" href="#product-ranges">
              ESL Product Ranges
            </a>
          </li>
          <li>
            <a id="x-4" href="#use-cases">
              Use Cases
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- BENEFITS --> */}
      <section id="benefits" className="sol-benefits-canvas">
        <div className="container">
          <div className="sol-benefits">
            <div className="intro wow fade-in-bottom delay-03s">
              <div className="intro-box">
                <h2>Why Electronic Shelf Labels?</h2>
                <p>
                  Electronic shelf labels (ESL), provide retail stores with a
                  range of features that improve operational efficiency, reduce
                  pricing errors, and reduce labor costs by allowing for remote
                  updates of entire labeling systems from centralized servers as
                  well as many other benefits:
                </p>
              </div>
            </div>
            <div className="sb-carousel-canvas wow fade-in-top delay-06s">
              <OwlCarousel
                className="sb-carousel owl-carousel owl-theme"
                items={1}
                nav={false}
                dots={false}
              >
                <div className="item">
                  <div className="benefit-block">
                    <img src={SolutionsBenefits1} alt="" />
                    <div className="intro">
                      <h4>Accuracy:</h4>
                      <p>
                        Price accuracy and eliminating pricing discrepancy
                        between the label and the register.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Delivery Order Picker Efficiency&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits2} alt="" />
                    <div className="intro">
                      <h4>Delivery Order Picking Efficiency:</h4>
                      <p>
                        Navigation and LED lighting for order picking &ndash;
                        generating a picking route with flashing lights helping
                        delivery order pickers quickly find their next item.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Product Info&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits3} alt="" />
                    <div className="intro">
                      <h4>Product Info:</h4>
                      <p>
                        More product information for customers can be provided
                        through expanded display options.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Employee Well-being&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits4} alt="" />
                    <div className="intro">
                      <h4>Employee Well-being:</h4>
                      <p>
                        Improves employee well-being by removing menial tasks
                        and allowing staff to engage in more meaningful work.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Waste Reduction&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits5} alt="" />
                    <div className="intro">
                      <h4>Waste Reduction:</h4>
                      <p>
                        Reduces waste by eliminating need for paper labels, and
                        increasingly long ESL product lifecycles now see devices
                        such as Hanshow&rsquo;s Nebular or Stellar Pro series
                        with a lifecycle of 10 years.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Improve Store Appearance&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits6} alt="" />
                    <div className="intro">
                      <h4>Modern Store Appearance:</h4>
                      <p>
                        Improves store appearance by providing a more modern,
                        sleek aesthetic.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="&lt;button&gt;Retail Digitalization&lt;/button&gt;"
                >
                  <div className="benefit-block">
                    <img src={SolutionsBenefits7} alt="" />
                    <div className="intro">
                      <h4>Retail Digitalization:</h4>
                      <p>
                        Serves as the building block IoT device for
                        communication with expanded retail digitalization
                        technology from AI shelf monitoring to just-walk-out
                        fully autonomous stores.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ADVANTAGES --> */}
      <section id="advantages" className="sol-advantages-canvas">
        <div className="container">
          <div className="sol-advantages">
            <div className="adv-canvas">
              <div className="adv-featured">
                <div className="af-title">
                  <h2 className="wow fade-in-left delay-03s">
                    Hanshow's Advantages
                  </h2>
                  <span className="line wow delay-05s">&nbsp;</span>
                </div>
                <img
                  id="hanshow-adv-1"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured1}
                  alt=""
                />
                <img
                  id="hanshow-adv-2"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured2}
                  alt=""
                />
                <img
                  id="hanshow-adv-3"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured3}
                  alt=""
                />
                <img
                  id="hanshow-adv-4"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured4}
                  alt=""
                />
                <img
                  id="hanshow-adv-5"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured5}
                  alt=""
                />{" "}
                <img
                  id="hanshow-adv-6"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured6}
                  alt=""
                />{" "}
                <img
                  id="hanshow-adv-7"
                  className="fade-in-bottom delay-08s"
                  src={SolutionsFeatured7}
                  alt=""
                />
              </div>
              <div className="sa-slider-canvas wow fade-in-left delay-08s">
                <Splide
                  className="splide sa-slider"
                  options={{
                    direction: "ttb",
                    height: "26rem",
                    wheel: true,
                    type: "loop",
                    autoplay: true,
                    interval: 4000,
                    easing: "ease-in-out",
                  }}
                  onMove={function () {
                    $(".sol-advantages-canvas .splide__slide").each(
                      function () {
                        if ($(this).hasClass("is-active")) {
                          $(".adv-featured  img").hide()
                          $("#" + $(this).attr("data-target")).show()
                        }
                      }
                    )
                  }}
                >
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-1"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages1} alt="" />
                      <h5>Battery Life</h5>
                    </div>
                    <p>Up to 15-year battery life</p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-2"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages2} alt="" />
                      <h5>Protection</h5>
                    </div>
                    <p>
                      Highest dust and water protection ratings on the market
                    </p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-3"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages3} alt="" />
                      <h5>Award Winning</h5>
                    </div>
                    <p>
                      Award winning design (iF Design Award, Good Design Award,
                      IDEA Design Award)
                    </p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-4"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages1} alt="" />
                      <h5>Trusted</h5>
                    </div>
                    <p>Trusted by over 30,000 stores around the world</p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-5"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages2} alt="" />
                      <h5>Reduced Energy Consumption</h5>
                    </div>
                    <p>
                      Proprietary chip processor and flexibly ion battery for
                      reduced energy consumption
                    </p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-6"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages3} alt="" />
                      <h5>Durable</h5>
                    </div>
                    <p>Durable anti-scratch screen</p>
                  </SplideSlide>
                  <SplideSlide
                    className="splide__slide"
                    data-target="hanshow-adv-7"
                  >
                    <div className="splide__slide__container">
                      <img src={SolutionsAdvantages1} alt="" />
                      <h5>Thinnest ESL</h5>
                    </div>
                    <p>One of thinnest ESL on at the market at 7.8 mm</p>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-md-10 mx-auto">
            <div className="contact-help-banner text-center my-5 py-5 wow fade-in-top delay-04s">
              <h4 className="pb-2 mb-4">
                Choose the right ESL for your business.
              </h4>
              <a
                className="button button-primary text-uppercase py-3 px-4 mx-auto fs-6"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ESL PRODUCT RANGES--> */}
      <section id="product-ranges" className="sol-product-ranges-canvas">
        <div className="container">
          <div className="sol-product-ranges">
            <div className="spr-tab-main">
              <div className="spr-tabs-nav-room">
                <ul className="spr-nav nav nav-tabs" role="presentation">
                  <li className="nav-item">
                    <button
                      id="nebular-tab"
                      className="nav-link active wow fade-in-bottom delay-05s"
                      role="tab"
                      type="button"
                      data-bs-toggle="tab"
                      data-bs-target="#nebular"
                      aria-controls="nebular"
                      aria-selected="true"
                    >
                      Nebular
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      id="stellar-pro-tab"
                      className="nav-link wow tracking-in-expand delay-1s"
                      role="tab"
                      type="button"
                      data-bs-toggle="tab"
                      data-bs-target="#stellar-pro"
                      aria-controls="stellar-pro"
                      aria-selected="false"
                    >
                      Stellar Pro
                    </button>
                  </li>
                </ul>
              </div>
              <div className="spr-tabs-content tab-content wow">
                <div
                  id="nebular"
                  className="tab-pane show active"
                  role="tabpanel"
                  aria-labelledby="nebular-tab"
                >
                  <div className="spr-room">
                    <div className="intro">
                      <h2 className="wow tracking-in-expand delay-1s">
                        Nebular
                      </h2>
                      <OwlCarousel
                        className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-05s"
                        items={1}
                        nav={false}
                        dots={true}
                        autoplay={true}
                      >
                        <div className="item">
                          <p>
                            Redefine the future of ESL solutions with Hanshow's
                            newest technology and innovation, Nebular is an
                            upgrade in every way, with proprietary SIP ultra-low
                            power design, extended battery life, and sleek
                            unibody design.
                          </p>
                        </div>
                      </OwlCarousel>
                      <a
                        className="button button-primary wow fade-in-top delay-05s"
                        href="/nebular"
                      >
                        Discover Nebular ⟶
                      </a>
                    </div>
                    <img
                      className="fade-in-left delay-05s"
                      src={SolutionsNebular}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="stellar-pro"
                  className="tab-pane"
                  role="tabpanel"
                  aria-labelledby="stellar-pro-tab"
                >
                  <div className="spr-room">
                    <div className="intro">
                      <h2 className="tracking-in-expand delay-1s">
                        Stellar Pro
                      </h2>
                      <OwlCarousel
                        className="spr-carousel owl-carousel owl-theme fade-in-top delay-05s"
                        items={1}
                        nav={false}
                        dots={true}
                        autoplay={true}
                      >
                        <div className="item">
                          <p>
                            Hanshow&rsquo;s classic ESL has become one of the
                            best-selling digital labels in the world, powering
                            some of the industry&rsquo;s largest retailers.
                          </p>
                        </div>
                      </OwlCarousel>
                      <a
                        className="button button-primary fade-in-top delay-05s"
                        href="/stellar-pro"
                      >
                        Discover Stellar Pro ⟶
                      </a>
                    </div>
                    <img
                      className="fade-in-left delay-05s"
                      src={SolutionsStellarPro}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- USE CASES --> */}
      <section id="use-cases" className="sol-use-cases-canvas">
        <div className="container">
          <div className="sol-use-cases">
            <div className="uc-head wow fade-in">
              <h2>Hanshow's ESL Solutions are Perfect for:</h2>
            </div>
            <div className="uc-body">
              <div className="uc-tab-main wow fade-in-top delay-06s">
                <div className="uc-tabs-nav-room">
                  <ul className="uc-tabs-nav nav nav-tabs" role="presentation">
                    {categories.map((item, idx) => (
                      <li className="nav-item" key={idx}>
                        <button
                          id={`${item.uid}-tab`}
                          className={`nav-link fade-in-right ${
                            selectedTab === item.uid ? "active" : ""
                          }`}
                          role="tab"
                          type="button"
                          onClick={() => setSelectTab(item.uid)}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.uid}`}
                          aria-controls={item.uid}
                          aria-selected={
                            selectedTab === item.uid ? "true" : "false"
                          }
                        >
                          {item.data.category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="uc-tabs-content tab-content">
                  {categories.map((item, idx) => (
                    <div
                      id={item.uid}
                      className={`tab-pane fade show ${
                        selectedTab === item.uid ? "active" : ""
                      }`}
                      role="tabpanel"
                      aria-labelledby={`${item.category}-tab`}
                      key={idx}
                    >
                      <div className="uc-content">
                        <img src={item.data.cover_img.url} alt={item.uid} />
                        <div className="intro">
                          <p>{item.data.heading}</p>
                          <a
                            className="button button-text"
                            href={`/business-cases#${item.uid}`}
                          >
                            Learn More ⟶
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-md-10 mx-auto">
            <div className="contact-help-banner text-center my-5 py-5 wow fade-in-top delay-04s">
              <h4 className="pb-2 mb-4">
                Implement Hanshow ESL solution to digitize your store today.
              </h4>
              <a
                className="button button-primary text-uppercase py-3 px-4 mx-auto fs-6"
                href="/contact"
              >
                Contact Us
              </a>
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
        data {
          category
          cover_img {
            url
          }
          heading
          description
        }
        uid
      }
    }
  }
`

export default ElectronicShelfLabels
