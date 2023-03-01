import * as React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import $ from "jquery"

import Layout from "../components/layout"
import {
  Awards1,
  Awards2,
  Awards4,
  CompanyHero,
  EntryIcon1,
  EntryIcon2,
  EntryIcon3,
  EntryIcon4,
  EntryIcon5,
  EntryIcon6,
  EntryIcon7,
  Featured1,
  Featured2,
  Featured3,
  Featured4,
  Featured5,
  Featured6,
  Featured7,
  Introduction1,
  MapImg,
  MapMobileImg,
  News1,
  News3,
  News4,
} from "../utils/imgImport"

const CompanyPage = () => {
  return (
    <Layout>
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Company</h1>
            <p className="wow fade-in-left delay-08s">
              Hanshow develops solutions that help retailers survive and thrive
              in this era of uncertainty.
            </p>
          </div>
          <img src={CompanyHero} alt="" />
        </div>
      </section>

      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
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
            <a id="x-2" href="#vision">
              Vision
            </a>
          </li>
          <li>
            <a id="x-3" href="#milestones">
              Milestones
            </a>
          </li>
          <li>
            <a id="x-4" href="#awards">
              Awards
            </a>
          </li>
        </ul>
      </nav>

      {/* INTRODUCTION */}
      <section id="introduction" className="com-introduction-canvas">
        <div className="big-head ci-title wow fade-in-top delay-1s">
          <h1>Hanshow</h1>
        </div>
        <div className="com-introduction">
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="intro text-center mx-auto wow fade-in-left delay-05s">
                  <h5>Introduction</h5>
                  <h2>Global Retail Digitalization Partner</h2>
                  <p>
                    Hanshow provides digital technology to help stores and
                    facilities reduce operational costs, increase sales, and
                    deliver a better experience for their customers.
                    <br />
                    <br />
                    As retailers around the world face a range of challenges to
                    remain profitable amidst surging ecommerce and delivery,
                    rising labor costs and turnover rates, and shifting consumer
                    demands, Hanshow develops solutions that help retailers
                    survive and thrive in this era of uncertainty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ci ci-alt">
            <div className="container">
              <div className="intro-box">
                <div className="intro wow fade-in-left delay-05s">
                  <h5>ELECTRONIC SHELF LABELS PIONEER</h5>
                  <p>
                    At the heart of these "digital retail solutions" are the IoT
                    devices known as electronic shelf labels (ESL) that deliver
                    retailers with dramatic gains in efficiency. <br />
                    <br />
                    Hanshow was founded to perfect ESL technology in 2011 and
                    has since expanded its offerings to a wide range of digital
                    solutions from AI shelf monitoring systems to self-checkout
                    devices to shelf edge marketing screens.
                  </p>
                </div>
                <img
                  className="img-fluid wow fade-in-bottom delay-1s"
                  src={Introduction1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="intro text-center mx-auto wow fade-in-left delay-05s">
                  <h5>DIGITAL RETAIL SOLUTIONS GLOBAL LEADER</h5>
                  <p>
                    Hanshow is now one of the global leading providers of
                    digital retail solutions working with over half of the top
                    100 global retail companies and has solutions at over 30,000
                    stores in 50 countries. We work tirelessly to provide
                    responsive service and customized solutions for our wide
                    range of clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="com-vision-canvas">
        <div className="big-head cv-title wow fade-in-top delay-1s">
          <h1>Vision</h1>
        </div>
        <div className="com-vision">
          <div className="container">
            <div className="intro wow fade-in-bottom delay-05s">
              <h5>
                <span style={{ color: "#ffffff" }}>Vision &amp; Values</span>
              </h5>
              <h2>
                <span style={{ color: "#ffffff" }}>
                  Customer-Centric Innovation
                </span>
              </h2>
              <p>
                <span style={{ color: "#ffffff" }}>
                  Since its inception, Hanshow has focused on the highest
                  quality innovation for our customers. This customer-centric
                  approach guides everything we do at Hanshow.{" "}
                </span>
                <br />
                <br />
                <span style={{ color: "#ffffff" }}>
                  Our vision is guide retailers into a new era of efficient and
                  profitable retail management through continuous innovation.{" "}
                </span>
                <br />
                <br />
                <span style={{ color: "#ffffff" }}>
                  Hanshow's core values are to drive business growth with
                  integrity, simplicity, and innovation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section id="milestones" className="com-milestones-canvas">
        <div className="com-milestones">
          <div className="intro wow fade-in-bottom delay-05s">
            <div className="container">
              <h5>Milestones</h5>
              <h2>Global Retail Digitalization Partner</h2>
              <p>
                Hanshow grew into a globally leading retail digital solutions
                provider in a short period of time, but the company's story is
                just getting started. From a company focused only on producing
                top quality electronic shelf labels, Hanshow now works around
                the world to deliver a wide spectrum of digital solutions for
                retailers, continuing to produce groundbreaking new technology
                that opens exciting new potential for businesses.
              </p>
            </div>
          </div>
          <div className="cm-map-canvas d-none d-md-block">
            <div className="cm-map">
              <div className="map-entries">
                <div className="entry entry-2021">
                  <div className="intro wow swing-in-right-fwd delay-1s">
                    <span className="year">2021</span>
                    <p>Established subsidiary in the US</p>
                  </div>
                  <span className="line-path wow fade-in-bottom delay-02s">
                    &nbsp;
                  </span>
                </div>
                <div className="entry entry-2019">
                  <div className="intro wow swing-in-right-fwd delay-1-2s">
                    <span className="year">2019</span>
                    <p>Established EU Operations Base in Amsterdam</p>
                  </div>
                  <span className="line-path wow fade-in-bottom delay-04s">
                    &nbsp;
                  </span>
                </div>
                <div className="entry left entry-2017">
                  <span className="line-path wow fade-in-bottom delay-06s">
                    &nbsp;
                  </span>
                  <div className="intro wow swing-in-left-fwd delay-1-4s">
                    <span className="year">2017</span>
                    <p>
                      Established subsidiaries in France, Germany, and Denmark
                    </p>
                  </div>
                </div>
                <div className="entry left entry-2011">
                  <span className="line-path wow fade-in-bottom delay-08s">
                    &nbsp;
                  </span>
                  <div className="intro wow swing-in-left-fwd delay-1-6s">
                    <span className="year">2011</span>
                    <p>Founded in Beijing</p>
                  </div>
                </div>
                <div className="map-room">
                  <img
                    className="map-bg"
                    draggable="false"
                    src={MapImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ms-entries-canvas d-md-none">
            <div className="container">
              <div className="ms-entries">
                <div className="ms-featured wow fade-in-right delay-2s">
                  <img className="img-fluid" src={MapMobileImg} alt="" />
                </div>
                <div className="ms-slider-canvas ms-slider-canvas1  wow fade-in-left delay-2s">
                  <h2 className="mb-4">Office Expansions</h2>
                  <div className="splide__slide">
                    <span className="year">2011</span>
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon1} alt="" />
                      </span>
                      <p>Founded in Beijing</p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <span className="year">2017</span>
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon2} alt="" />
                      </span>
                      <p>
                        Established subsidiaries in France, Germany, and Denmark
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <span className="year">2019</span>
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon3} alt="" />
                      </span>
                      <p>Established EU Operations Base in Amsterdam</p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <span className="year">2021</span>
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon4} alt="" />
                      </span>
                      <p>Established subsidiary in the US</p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-entries-canvas">
            <div className="container">
              <div className="ms-entries ms-entries2">
                <div className="ms-featured d-none d-md-block wow fade-in-right delay-2s">
                  <img
                    id="company-milestone-featured1"
                    className="fade-in-bottom delay-04s"
                    src={Featured1}
                    alt=""
                  />
                  <img
                    id="company-milestone-featured2"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured2}
                    alt=""
                  />
                  <img
                    id="company-milestone-featured3"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured3}
                    alt=""
                  />
                  <img
                    id="company-milestone-featured4"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured4}
                    alt=""
                  />
                  <img
                    id="company-milestone-featured5"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured5}
                    alt=""
                  />
                  <img
                    id="company-milestone-featured6"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured6}
                    alt=""
                    width="328"
                    height="auto"
                  />
                  <img
                    id="company-milestone-featured7"
                    className="d-none fade-in-bottom delay-04s"
                    src={Featured7}
                    alt=""
                    width="328"
                    height="auto"
                  />
                </div>
                <div className="ms-slider-canvas ms-slider-canvas2 d-none d-md-block wow fade-in-left delay-2s">
                  <Splide
                    className="splide ms-slider ms-slider2"
                    onMove={function () {
                      $(".ms-entries2 .ms-featured img").addClass("d-none")
                      $(".ms-slider-canvas2 .splide__slide").each(function () {
                        if ($(this).hasClass("is-active")) {
                          $("#" + $(this).attr("data-target")).removeClass(
                            "d-none"
                          )
                        }
                      })
                    }}
                    options={{
                      direction: "ttb",
                      height: "24rem",
                      wheel: true,
                      type: "loop",
                      autoplay: true,
                      interval: 4000,
                      easing: "ease-in-out",
                    }}
                  >
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured1"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon1} alt="" />
                        </span>
                        <p>
                          <span className="year">2013</span>Launched first
                          generation ESL
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured2"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon2} alt="" />
                        </span>
                        <p>
                          <span className="year">2017</span>Reached 1 mil+ ESL
                          installed at Wu Mart, China
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured3"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon3} alt="" />
                        </span>
                        <p>
                          <span className="year">2018</span>10 mil ESL shipped
                          in one year
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured4"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon4} alt="" />
                        </span>
                        <p>
                          <span className="year">2020</span>Launched next
                          generation ESL Nebular and Lumina
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured5"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon5} alt="" />
                        </span>
                        <p>
                          <span className="year">2021</span>Reached 10 mil+ ESL
                          managed under one SaaS
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured6"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon6} alt="" />
                        </span>
                        <p>
                          <span className="year">2021</span>Signed strategic
                          partnership with Microsoft
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                    <SplideSlide
                      className="splide__slide"
                      data-target="company-milestone-featured7"
                    >
                      <div className="splide__slide__container">
                        <span className="entry-icon">
                          <img src={EntryIcon7} alt="" />
                        </span>
                        <p>
                          <span className="year">2022</span>Launched Nebular
                          Lux, Hanshow's first solar powered ESL
                        </p>
                        <span className="v-line">&nbsp;</span>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
                <div className="ms-slider-canvas ms-slider-canvas1 mt-5 d-md-none wow fade-in-left delay-2s">
                  <div className="ms-prod-dev">
                    <img
                      className="img-fluid wow fade-in-bottom delay-08s"
                      src={Featured1}
                      alt=""
                    />
                  </div>
                  <h2 className="mb-4">Product Developments</h2>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon1} alt="" />
                      </span>
                      <p>
                        <span className="year">2013</span>Launched first
                        generation ESL
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon2} alt="" />
                      </span>
                      <p>
                        <span className="year">2017</span>Reached 1 mil+ ESL
                        installed at Wu Mart, China
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon3} alt="" />
                      </span>
                      <p>
                        <span className="year">2018</span>10 mil ESL shipped in
                        one year
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon4} alt="" />
                      </span>
                      <p>
                        <span className="year">2020</span>Launched next
                        generation ESL Nebular and Lumina
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon5} alt="" />
                      </span>
                      <p>
                        <span className="year">2021</span>Reached 10 mil+ ESL
                        managed under one SaaS
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon6} alt="" />
                      </span>
                      <p>
                        <span className="year">2021</span>Signed strategic
                        partnership with Microsoft
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                  <div className="splide__slide">
                    <div className="splide__slide__container">
                      <span className="entry-icon">
                        <img src={EntryIcon7} alt="" />
                      </span>
                      <p>
                        <span className="year">2022</span>Launched Nebular Lux,
                        Hanshow's first solar powered ESL
                      </p>
                      <span className="v-line">&nbsp;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="com-awards-canvas">
        <div className="big-head ca-title wow fade-in-top delay-1s">
          <h1>Awards</h1>
        </div>
        <div className="com-awards">
          <div className="intro wow fade-in-bottom delay-05s">
            <div className="container">
              <h5>Awards</h5>
              <h2>Award Winning - Worldwide</h2>
              <p>
                Hanshow has been recognized by partners, clients, and
                governments alike for outstanding products and business
                practices. We are honored to receive a range of awards and
                accolades from so many distinguished companies and
                organizations. Below are just a few examples of Hanshow's award
                winning products and service.
              </p>
            </div>
          </div>
          <div className="intro-news">
            <div className="container">
              <div className="in">
                <h5>Corporate Recognition</h5>
                <article className="wow fade-in-left delay-05s">
                  <a className="thumb-link" href="/#">
                    <img src={News3} alt="" width="300" height="auto" />
                  </a>
                  <div className="news-excerpt">
                    <h6>
                      Microsoft China ISV (Independent Software Vendor) Partner
                      of the Year
                    </h6>
                    <div className="others">
                      <a
                        className="readmore"
                        href="/news/retail-digitalization-becomes-lighter-and-faster-through-hanshow-on-microsoft-cloud-for-retail"
                      >
                        Read more &rarr;
                      </a>
                      <span className="date-cat">
                        18 April 2022 - Company News
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="awards-list">
            <div className="container">
              <h5>Product Awards</h5>
              <div className="award">
                <div className="award-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">Nebular</h2>
                    <span className="line wow delay-1s">&nbsp;</span>
                  </div>
                  <p>
                    Nebular is Hanshow&rsquo;s new cutting-edge electronic shelf
                    label with built-in 7-colour LED light and NFC
                    functionality. Its industry leading IP68-level waterproofing
                    and dust protection design provides outstanding performance
                    while its 7.8 mm ultra-thin design makes it our most stylish
                    model to date.
                    <br />
                    <br />
                    Nebular&rsquo;s highly integrated proprietary ESL chip
                    developed by Hanshow and flexible battery technology also
                    significantly reduces power consumption ensuring an industry
                    leading 15-year battery life, minimizing maintenance for
                    clients.
                  </p>
                  <h5>Awards</h5>
                  <div className="awards-article">
                    <article>
                      <a
                        className="thumb-link"
                        href="/news/hanshow-takes-home-4-if-design-awards"
                      >
                        <img src={News1} alt="" />
                      </a>
                      <div className="others-room">
                        <div className="others">
                          <a
                            className="readmore"
                            href="/news/hanshow-takes-home-4-if-design-awards"
                          >
                            Read more &rarr;
                          </a>{" "}
                          <span className="date-cat">
                            16 April 2022
                            <br />
                            Company News
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <a
                    className="button button-white bordered"
                    href="nebular.html"
                  >
                    Discover Nebular ⟶
                  </a>
                </div>
                <div className="award-image wow fade-in-left delay-1s">
                  <img
                    style={{ float: "right" }}
                    src={Awards1}
                    alt=""
                    width="469"
                    height="371"
                  />
                </div>
              </div>

              <div className="award right">
                <div className="award-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">Lumina</h2>
                    <span className="line wow delay-1s">&nbsp;</span>
                  </div>
                  <p>
                    The Lumina Aqua Electronic Shelf Labeling Solution is
                    designed for fresh food retail scenarios, aiming to improve
                    store operational efficiency and aesthetics to enhance
                    profitability. <br />
                    <br />
                    Lumina Aqua is a full-color LCD electronic shelf label with
                    IP65 water and dust resistance rating, and it supports
                    instant refresh and multiple material display functionality,
                    perfectly suited to fresh food retail scenarios. The
                    solution also includes an adaptive intelligence system to
                    support advertisement customization and editing.
                  </p>
                  <h5>Awards</h5>
                  <div className="awards-article">
                    <article>
                      <a
                        className="thumb-link"
                        href="/news/hanshow-takes-home-4-if-design-awards"
                      >
                        <img src={News1} alt="" />
                      </a>
                      <div className="others-room">
                        <div className="others">
                          <a
                            className="readmore"
                            href="/news/hanshow-takes-home-4-if-design-awards"
                          >
                            Read more &rarr;
                          </a>{" "}
                          <span className="date-cat">
                            16 April 2022
                            <br />
                            Company News
                          </span>
                        </div>
                      </div>
                    </article>
                    <article>
                      <a
                        className="thumb-link"
                        href="/news/hanshow-takes-home-4-good-design-awards"
                      >
                        <img src={News4} alt="" />
                      </a>
                      <div className="others-room">
                        <div className="others">
                          <a
                            className="readmore"
                            href="/news/hanshow-takes-home-4-good-design-awards"
                          >
                            Read more &rarr;
                          </a>{" "}
                          <span className="date-cat">
                            25 Oct 2021
                            <br />
                            Company News
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <a
                    className="button button-white bordered"
                    href="/lumina-aqua"
                  >
                    Discover Lumina ⟶
                  </a>
                </div>
                <div className="award-image wow fade-in-right delay-1s">
                  <img style={{ float: "left" }} src={Awards2} alt="" />
                </div>
              </div>

              <div className="award">
                <div className="award-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">
                      Stellar Pro ESL
                    </h2>
                    <span className="line wow delay-05s">&nbsp;</span>
                  </div>
                  <p>
                    Hanshow&rsquo;s Stellar Pro is an electric shelf label that
                    is designed for today's retail challenges. Stellar Pro
                    synchronizes information in real-time, reviews stock and
                    product status, and displays prices, origin, and campaign
                    information in store. Stellar Pro's display provides higher
                    definition compared to past models while it's designed to be
                    compatible with frequent upgrades. It is also designed to be
                    low consumption and use batteries for 10 years, so it
                    contributes to reduce total management costs and help the
                    environment by replacing disposable paper and plastic
                    shelves. The design is compact and gives a sense of unity
                    that gives stores a sleek modern aesthetic.
                  </p>
                  <h5>Awards</h5>
                  <div className="awards-article">
                    <article>
                      <a
                        className="thumb-link"
                        href="/news/hanshow-takes-home-4-if-design-awards"
                      >
                        <img src={News1} alt="" />
                      </a>
                      <div className="others-room">
                        <div className="others">
                          <a
                            className="readmore"
                            href="/news/hanshow-takes-home-4-if-design-awards"
                          >
                            Read more &rarr;
                          </a>{" "}
                          <span className="date-cat">
                            16 April 2021
                            <br />
                            Company News
                          </span>
                        </div>
                      </div>
                    </article>
                    <article>
                      <a
                        className="thumb-link"
                        href="/news/hanshow-takes-home-4-good-design-awards"
                      >
                        <img src={News4} alt="" />
                      </a>
                      <div className="others-room">
                        <div className="others">
                          <a
                            className="readmore"
                            href="/news/hanshow-takes-home-4-good-design-awards"
                          >
                            Read more &rarr;
                          </a>{" "}
                          <span className="date-cat">
                            25 Oct&nbsp; 2021
                            <br />
                            Company News
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <a
                    className="button button-white bordered"
                    href="/stellar-pro"
                  >
                    Discover Stellar Pro ESL ⟶
                  </a>
                </div>
                <div className="award-image wow fade-in-left delay-1s">
                  <img
                    style={{ float: "right" }}
                    src={Awards4}
                    alt="Stellar Pro ESL Family"
                    width="500"
                    height="352"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CompanyPage
