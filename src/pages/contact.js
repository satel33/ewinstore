/* eslint-disable jsx-a11y/control-has-associated-label */

import * as React from "react"

import Layout from "../components/layout"
import {
  AsiaMapMob,
  AustraliaFlag,
  ChinaFlag,
  ChinaMapMob,
  ContactHelpBG,
  ContactHeroImg,
  ContactPamIcon,
  ContactPressBG,
  EuropeMapMob,
  FlagsImg,
  FranceFlag,
  GuideBook,
  HongkongFlag,
  IconFB,
  IconLN,
  IconSearch,
  IconTW,
  IconYB,
  IntroBook,
  MapImg,
  NetherlandsFlag,
  NewzealandFlag,
  NorthAmericaImg,
  UKFlag,
  USAFlag,
} from "../utils/imgImport"

const ContactPage = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">CONTACT</h1>
            <p className="wow fade-in-left delay-08s">
              Take a peek into our map to locate our offices around the world
              and see the list of our global offices and contact information.
            </p>
          </div>
          <img src={ContactHeroImg} alt="" />
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav
        className="page-section-nav wow fade-in-bottom mt-5"
        data-wow-offset="50"
      >
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <li>
            <a id="x-1" href="#contact">
              Contact Form &amp; Social Media
            </a>
          </li>
          <li>
            <a id="x-2" href="#global">
              Global Offices
            </a>
          </li>
          <li>
            <a id="x-3" href="#media">
              Media Request
            </a>
          </li>
          <li>
            <a id="x-4" href="#help">
              Help &amp; Support
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- CONTACT - FORM --> */}
      <section className="contact-form-canvas position-relative" id="contact">
        <div className="big-head wow fade-in-bottom delay-06s">
          <h1>Contact</h1>
        </div>

        <div className="container">
          <div className="intro-wrapper pb-3 mb-5 wow fade-in-top delay-03s">
            <h5 className="intro-subtitle">Contact Form</h5>
            <h2 className="intro-title my-4">Leave us a Message</h2>
            <p className="intro-desc">
              For all Inquiries, please use email us using the form below. Our
              expert support team will answer your questions as soon as
              possible.
            </p>
          </div>

          <div className="row gx-md-5">
            <div className="col-md-6">
              <form
                method="POST"
                action="submit-contact.html"
                acceptCharset="UTF-8"
              >
                <input
                  name="_token"
                  type="hidden"
                  value="OybwVxtwu1LBb2057zYDuMxm3gWzrEET12nksGXv"
                />
                <div className="contact-form wow fade-in-left delay-09s">
                  <div className="mb-4">
                    <label
                      className="form-label text-highlight fs-5 fw-bold"
                      htmlFor="type"
                    >
                      How can we help you?
                    </label>
                    <select className="form-select" name="type" id="type">
                      <option defaultValue="Just leaving a message">
                        Just leaving a message
                      </option>
                      <option defaultValue="Request for Catalog">
                        Request for Catalog
                      </option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label" htmlFor="name">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value=""
                        required
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="last_name">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                        value=""
                        required
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label mb-0" htmlFor="email">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <div className="form-text mb-3">
                      Where you want us to reply.
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      value=""
                      readOnly
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label mb-0" htmlFor="company">
                      Company <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      id="company"
                      value=""
                      readOnly
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="country">
                      Country and Region <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      name="country"
                      id="country"
                      required
                    >
                      <option
                        defaultValue=""
                        label="Select your Country"
                        disabled
                      ></option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="form-label" htmlFor="message">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      id="message"
                      required
                      readOnly
                    ></textarea>
                  </div>

                  <div className="d-md-flex pt-2 captcha-wrap">
                    <div
                      className="h-captcha"
                      data-sitekey="4afc06a5-ec5b-4904-b8cc-1d2b59bd6e18"
                    ></div>
                  </div>

                  <div className="toast-section text-center my-4"></div>
                  <button
                    type="submit"
                    className="button button-primary w-100 py-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 text-highlight pt-5 pt-md-0  wow fade-in-right delay-1-2s">
              <div className="contact-form-right ms-md-5">
                <div className="contact-form-newsletter newsletter-canvas">
                  <div className="newsletter">
                    <div className="newsletter-inner">
                      <div className="subscribe wow fade-in-right delay-05s">
                        <div className="subscribe-inner">
                          <div className="intro">
                            <h3>Stay up to date with Hanshow!</h3>
                            <p>
                              Subscribe to our Newsletter and never miss an
                              update.
                            </p>
                          </div>
                          <form
                            method="POST"
                            action="submit-subscribe.html"
                            acceptCharset="UTF-8"
                          >
                            <input
                              name="_token"
                              type="hidden"
                              value="OybwVxtwu1LBb2057zYDuMxm3gWzrEET12nksGXv"
                            />
                            <div className="subscribe-field">
                              <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                              />
                              <button
                                data-callback="subscribeSubmit"
                                className="h-captcha"
                                data-sitekey="4afc06a5-ec5b-4904-b8cc-1d2b59bd6e18"
                              >
                                Subscribe
                              </button>
                              <button
                                type="submit"
                                id="subscribe-submit-form"
                                className="button button-white d-none"
                              >
                                Subscribe
                              </button>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="subsCheck"
                                required=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="subsCheck"
                              >
                                I have read, agree and accept that the
                                information that I provide will be used as
                                detailed in the{" "}
                                <a href="privacy-policy.html" target="_blank">
                                  Privacy Policy.
                                </a>
                              </label>
                            </div>
                          </form>
                          <p>
                            *We will only share recent news, developments and
                            opportunities and will not share your email address
                            with any third parties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mt-5 mb-4">
                  Stay connected to our Social Media Channels
                </h3>
                <p>
                  We are active online. Follow our social media channels to get
                  updated.
                </p>

                <div className="contact-form-social">
                  <a
                    href="https://www.facebook.com/hanshowtechnology"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={IconFB} alt="" />
                  </a>
                  <a
                    href="https://www.youtube.com/c/HanshowTechnology"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={IconYB} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hanshow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={IconLN} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/hanshowofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={IconTW} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT - GLOBAL --> */}
      <section id="global" className="contact-global-canvas section-box">
        <div className="big-head wow fade-in-bottom delay-06s">
          <h1>Global</h1>
        </div>
        <div className="container">
          <div className="intro-wrapper pb-3 mb-5 wow fade-in-top delay-03s">
            <h5 className="intro-subtitle">Hanshow Global</h5>
            <h2 className="intro-title my-4">Our Offices Around the World</h2>
            <p className="intro-desc">
              Hanshow is the world's leading provider of electronic shelf label
              and omni-channel digital store solutions.
            </p>
          </div>
          {/* <!-- CONTACT - MAP--> */}
          <section className="com-milestones-canvas d-none d-md-block">
            <div className="com-milestones">
              <div className="cm-map-canvas">
                <div className="cm-map">
                  <div className="map-entries">
                    <div className="entry entry-2021">
                      <div className="intro wow swing-in-right-fwd delay-1s">
                        <p>
                          <span className="fs-6">New York</span> <br />
                          USA
                        </p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-02s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry entry-2019">
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>
                          <span className="fs-6">Amsterdam</span> <br />
                          Netherlands
                        </p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry small entry-uk">
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>UK</p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry entry-france">
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>
                          <span className="fs-6">Boulogne-Billancourt</span>{" "}
                          <br />
                          France
                        </p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry left entry-2017 entry-germany">
                      <span className="line-path wow fade-in-bottom delay-06s">
                        &nbsp;
                      </span>
                      <div className="intro wow swing-in-left-fwd delay-1-4s">
                        <p>
                          <span className="fs-6">D&uuml;sseldorf</span> <br />
                          Germany
                        </p>
                      </div>
                    </div>
                    <div className="entry entry-china">
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>
                          Beijing, Shanghai, Wuhan, Shenzhen, Zhejiang, Hong
                          Kong
                          <br />
                          China
                        </p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry entry-australia">
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>
                          <span className="fs-6">North Sydney</span> <br />
                          Australia
                        </p>
                      </div>
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                    </div>
                    <div className="entry left entry-new-zealand">
                      <span className="line-path wow fade-in-bottom delay-04s">
                        &nbsp;
                      </span>
                      <div className="intro wow swing-in-right-fwd delay-1-2s">
                        <p>New Zealand</p>
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
            </div>
          </section>
          <img
            className="contact-mobile-map wow fade-in-bottom delay-03s d-md-none img-fluid"
            src={ChinaMapMob}
            alt=""
            width="100%"
            height="auto"
          />
          <h3 className="mb-5">
            <span style={{ textDecoration: "underline" }}>China</span>
          </h3>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={ChinaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Hanshow <br />
                Technology
              </h5>
              <div className="contact-global-address">
                Floor 4, Building 1, Jiaxing Guangfu Innovation Park, No.1288
                Kanghe Road, Xiuzhou District, Jiaxing City, Zhejiang Province,
                China
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={ChinaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Shanghai Hanshi Information Technology
              </h5>
              <div className="contact-global-address">
                Room 155, Building No.1, No.2399, Zuchongzhi Rd, Pudong New Ara,
                Shanghai, China
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={ChinaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Beijing Hanshow Technology
              </h5>
              <div className="contact-global-address">
                Floor 18, Building C, Ruipu Plaza, No.15 Hongjunying South Rd,
                Beijing, China
              </div>
            </div>
          </div>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={ChinaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">Shenzhen Office</h5>
              <div className="contact-global-address">
                A05, Floor 18, Yicheng Huanzhi Center, No.4020 Renmin Road,
                Longhua District, Shenzhen
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={ChinaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">Wuhan Office</h5>
              <div className="contact-global-address">
                Unit 1403, Floor 14, Anteng International Plaza, No.456
                Zhongshan Road, Wuchang District
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={HongkongFlag}
                alt=""
                width="30"
                height="auto"
              />
              <h5 className="contact-global-location">
                Hanshow Hong Kong Co., Limited
              </h5>
            </div>
          </div>
          <img
            className="contact-mobile-map wow fade-in-bottom delay-03s d-md-none img-fluid"
            src={EuropeMapMob}
            alt=""
            width="100%"
            height="auto"
          />
          <h3 className="mt-3 mb-5">
            <span style={{ textDecoration: "underline" }}>Europe</span>
          </h3>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={NetherlandsFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Hanshow <br />
                Netherlands B.V.
              </h5>
              <div className="contact-global-address">
                Transformatorweg 86, 1014 AK, <br />
                Amsterdam Netherlands
              </div>
              <div className="contact-global-info">
                +31 202249010 <br />
                netherlands@hanshow.com
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={FranceFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Hanshow <br />
                France SAS
              </h5>
              <div className="contact-global-address">
                88 Rue du D&ocirc;me, 92100
                <br />
                Boulogne-Billancourt，France
              </div>
              <div className="contact-global-info">
                +331 40 91 84 73 <br />
                france@hanshow.com
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-04s"
                src={FlagsImg}
                alt="images.png"
                width="30"
                height="18"
              />
              <h5 className="contact-global-location">
                Hanshow <br />
                Germany GmbH
              </h5>
              <div className="contact-global-address">
                Prinzenallee 7, 40549 D&uuml;sseldorf, Germany
              </div>
              <div className="contact-global-info">
                +491737457573 <br />
                germany@hanshow.com
              </div>
            </div>
          </div>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5 ">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={UKFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">Hanshow UK CO., LTD</h5>
            </div>
          </div>
          <img
            className="contact-mobile-map wow fade-in-bottom delay-03s d-md-none img-fluid"
            src={NorthAmericaImg}
            alt=""
            width="100%"
            height="auto"
          />
          <h3 className="mt-3 mb-5">
            <span style={{ textDecoration: "underline" }}>North America</span>
          </h3>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={USAFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Hanshow <br />
                America Inc
              </h5>
              <div className="contact-global-address">
                Unit 502, Camp David Building, 237 36th St, Brooklyn, NY 11232,
                United States
              </div>
              <div className="contact-global-info">americas@hanshow.com</div>
            </div>
          </div>
          <img
            className="contact-mobile-map wow fade-in-bottom delay-03s d-md-none img-fluid"
            src={AsiaMapMob}
            alt=""
            width="100%"
            height="auto"
          />
          <h3 className="mb-5">
            <span style={{ textDecoration: "underline" }}>Asia Pacific</span>
          </h3>
          <div className="row gx-md-5 text-highlight">
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={AustraliaFlag}
                alt=""
                width="30"
                height="30"
              />
              <h5 className="contact-global-location">
                Hanshow Australia <br />
                Pty Ltd
              </h5>
              <div className="contact-global-address">
                Level 32, 101 Miller Street, North Sydney, NSW, Australia 2060
              </div>
              <div className="contact-global-info">
                +61 2 9025 3998 <br />
                australia@hanshow.com
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <img
                className="wow swing-in-left-fwd delay-06s"
                src={NewzealandFlag}
                alt=""
                width="30"
                height="auto"
              />
              <h5 className="contact-global-location">
                Hanshow New Zealand Limited
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT - PRESS & MEDIA--> */}
      <section id="media" className="contact-press-canvas section-box">
        <div className="full-width-container">
          <div className="section-hero mb-5">
            <div className="section-hero-content text-center wow fade-in delay-03s">
              <div className="container">
                <h2 className="fs-1 text-white mb-4">Press &amp; Media</h2>
                <p className="fs-4 text-white mx-auto mb-0">
                  We&rsquo;re going to be partners for the long run. Here you
                  can download assets for our brand.
                </p>
              </div>
            </div>
            <img className="section-hero-img" src={ContactPressBG} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="benefits-item text-center">
                <img
                  className="wow puff-in-center delay-07s"
                  src={ContactPamIcon}
                  alt=""
                />
                <h5 className="text-uppercase mb-4 wow fade-in-bottom delay-05s">
                  Presentation &amp; Company Introduction
                </h5>
                <a
                  className="button button-white bordered text-capitalize mt-3"
                  title="EN_Hanshow intro 2022Q3-0901"
                  href={IntroBook}
                  download=""
                >
                  Download
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefits-item text-center">
                <img
                  className="wow puff-in-center delay-07s"
                  src={ContactPamIcon}
                  alt=""
                />
                <h5 className="text-uppercase mb-4 wow fade-in-bottom delay-05s">
                  Our Brand Kit
                </h5>
                <a
                  className="button button-white bordered text-capitalize mt-3"
                  title="hanshow_brand_guide"
                  href={GuideBook}
                  download=""
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT - HELP & SUPPORT --> */}
      <section className="contact-help-canvas section-box" id="help">
        <div className="section-hero mx-4">
          <div className="section-hero-content text-center">
            <div className="container">
              <h2 className="fs-1 text-white pb-2 mb-4 wow fade-in delay-03s">
                How Can We Help?
              </h2>
              <div className="contact-help-search position-relative col-md-8 px-0 mx-auto">
                <input
                  type="search"
                  id="contact-search"
                  className="form-control border-0 rounded-3 py-3"
                  placeholder="Enter your search from here.."
                />
                <img
                  className="contact-hs-icon"
                  src={IconSearch}
                  alt="search"
                />
                <div className="ch-search-dropdown global-hide"></div>
              </div>
            </div>
          </div>
          <img className="section-hero-img" src={ContactHelpBG} alt="support" />
        </div>

        <div className="container pt-3 my-5">
          <h3 className="mb-3">Frequently Asked Questions</h3>
          <div className="faq-accordion accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-faq-url-1">
                <button
                  className="accordion-button py-4 px-0 bg-white border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-faq-url-1"
                  aria-expanded="true"
                  aria-controls="collapse-faq-url-1"
                >
                  <span className="text-highlight d-block lh-base text-start">
                    What is electronic paper display?
                  </span>
                </button>
              </h2>
              <div
                id="collapse-faq-url-1"
                className=" accordion-collapse border-0 collapse show"
                aria-labelledby="heading-faq-url-1"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 px-0 pb-4">
                  <p>
                    Electronic paper screen is manufactured by electronic ink
                    technology, and electronic ink is composed of millions of
                    microcapsules, the transparent liquid in the capsule
                    suspended black and white positive and negative particles,
                    after the use of electricity, the principle of positive and
                    negative electrodes absorb each other, control the black and
                    white examples to move to the top of the microcapsules, so
                    as to form a black and white examples of the combination of
                    images, so that you can see the corresponding image on the
                    electronic paper screen.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-faq-url-5">
                <button
                  className="accordion-button  collapsed py-4 px-0 bg-white border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-faq-url-5"
                  aria-expanded="false"
                  aria-controls="collapse-faq-url-5"
                >
                  <span className="text-highlight d-block lh-base text-start">
                    What are the use cases of electronic paper display?
                  </span>
                </button>
              </h2>
              <div
                id="collapse-faq-url-5"
                className=" accordion-collapse border-0 collapse "
                aria-labelledby="heading-faq-url-5"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 px-0 pb-4">
                  <p>
                    Electronic paper display can be used in various settings, it
                    is most commonly used in the retail stores as electronic
                    shelf labels to replace the traditional paper price tags.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-faq-url-6">
                <button
                  className="accordion-button  collapsed py-4 px-0 bg-white border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-faq-url-6"
                  aria-expanded="false"
                  aria-controls="collapse-faq-url-6"
                >
                  <span className="text-highlight d-block lh-base text-start">
                    How does Hanshow help retailers to go digital?
                  </span>
                </button>
              </h2>
              <div
                id="collapse-faq-url-6"
                className=" accordion-collapse border-0 collapse "
                aria-labelledby="heading-faq-url-6"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 px-0 pb-4">
                  <p>
                    Renovate, reshape and envision a new generation of retail
                    business with our customer-centric digital store solutions
                    powered by proprietary AI, big data and IoT wireless
                    communication technology. As a fast-growing technology
                    company, Hanshow is proud to be the game accelerator for our
                    customers. With our open AIoT infrastructure, we offer agile
                    and cutting-edge innovations.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-faq-url-2">
                <button
                  className="accordion-button  collapsed py-4 px-0 bg-white border-0 shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-faq-url-2"
                  aria-expanded="false"
                  aria-controls="collapse-faq-url-2"
                >
                  <span className="text-highlight d-block lh-base text-start">
                    What makes the Hanshow solutions different?
                  </span>
                </button>
              </h2>
              <div
                id="collapse-faq-url-2"
                className=" accordion-collapse border-0 collapse "
                aria-labelledby="heading-faq-url-2"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 px-0 pb-4">
                  <p>
                    Hanshow Digital Store Solutions, jointly, are
                    customer-centric,by creating compelling
                    &lsquo;immersive&rsquo; interactions through which customers
                    can experience physical sensations and feelings with
                    different Hanshow digital touchpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-5">
            <div className="col-md-10 mx-auto">
              <div className="contact-help-banner text-center my-5 py-5 wow fade-in-top delay-04s">
                <h4 className="pb-2 mb-4">
                  Can’t find what you’re looking for? Send us a help request.
                </h4>
                <a
                  href="#contact"
                  className="button button-primary text-uppercase py-3 px-4 mx-auto fs-6"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
