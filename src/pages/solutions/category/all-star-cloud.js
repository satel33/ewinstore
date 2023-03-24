import React from "react"

import Layout from "../../../components/layout"
import {
  AllStarBGLogo,
  AllStarHero,
  AllStarIntro1,
  AllStarIntro2,
  AllStarShilpc1,
  AllStarShilpc2,
  AllStarSolution1,
  AllStarSolution2,
  AllStarSolution3,
  AllStarSolution4,
  AllStarSolution5,
} from "../../../utils/imgImport"

const AllStarCloud = () => {
  return (
    <Layout>
      {/* <!-- PAGE HERO --> */}
      <section class="page-hero-canvas">
        <div class="page-hero">
          <div class="intro">
            <h1 class="wow fade-in-left delay-05s">All Star Cloud</h1>
            <p class="wow fade-in-left delay-08s">
              Devices and networks can now all operate together.
            </p>
          </div>
          <img src={AllStarHero} alt="" />
        </div>
      </section>

      {/* <!-- SECTION NAV --> */}
      <nav class="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div class="psn-mobile">
          Go to
          <div class="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul class="ps-nav-list">
          <ul class="ps-nav-list">
            <li>
              <a id="x-1" href="#introduction">
                INTRODUCTION
              </a>
            </li>
            <li>
              <a id="x-2" href="#solution">
                SOLUTIONS
              </a>
            </li>
            <li>
              <a id="x-3" href="#shilpc">
                HiLPC
              </a>
            </li>
          </ul>
        </ul>
      </nav>

      {/* <!-- INTRODUCTION --> */}
      <section id="introduction" class="asc-introduction-canvas">
        <div class="asc-introduction">
          <div class="ci">
            <div class="container">
              <div class="intro-box">
                <div class="intro wow fade-in-bottom delay-05s text-center">
                  <h1>Why All Star?</h1>
                  <p>
                    As stores increase their level of digitalization through
                    additional layers of IoT devices, systems, and networks, it
                    can quickly become a complex and disconnected web of
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="ci">
            <div class="container">
              <div class="intro-box">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="asc-connector connector-wrapper">
                      <img
                        class="connector-img img-fluid wow fade-in-left delay-05s"
                        src={AllStarIntro1}
                        alt=""
                      />
                      <ul class="connector-list wow fade-in-right delay-07s">
                        <li>
                          <div class="connector-title">
                            <strong>Fast data transmission</strong>
                          </div>
                          <div class="connector-desc">
                            Hanshow's self-developed communication protocol can
                            transmit data efficiently in dense environment, and
                            the number of concurrent devices in a single base
                            station can exceed 3,000.
                          </div>
                          <div class="connector-1 connector connector-x connector-dot connector-right">
                            &nbsp;
                          </div>
                          <div class="connector-2 connector connector-y  connector-dot connector-bottom">
                            &nbsp;
                          </div>
                        </li>
                        <li>
                          <div class="connector-title">
                            <strong>Flexible deployment</strong>
                          </div>
                          <div class="connector-desc">
                            Provide SaaS service and private deployment options,
                            both deployment methods support unified user
                            authentication and third-party application access
                            integration.
                          </div>
                          <div class="connector-1 connector connector-x connector-dot connector-right">
                            &nbsp;
                          </div>
                          <div class="connector-2 connector connector-y  connector-dot connector-top">
                            &nbsp;
                          </div>
                        </li>
                        <li>
                          <div class="connector-title">
                            <strong>powerful performance</strong>
                          </div>
                          <div class="connector-desc">
                            Integrated processing for millions of data.
                          </div>
                          <div class="connector-1 connector connector-x connector-dot connector-right">
                            &nbsp;
                          </div>
                          <div class="connector-2 connector connector-y  connector-dot connector-top">
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
          <div class="ci">
            <div class="container">
              <div class="intro-box">
                <div class="row">
                  <div class="col-lg-5 pe-lg-5">
                    <div class="intro wow fade-in-left delay-05s">
                      <h2 class="mb-4 mt-5">
                        Hanshow Developed All-Star Platform&nbsp;
                      </h2>
                      <p>
                        <span style={{ fontSize: "12pt" }}>
                          All-Star can help customers quickly build up a large
                          number of IoT device management capabilities and
                          flexibly support system integration, secondary
                          development of third-party applications, and
                          customized solution development, ultimately achieving
                          the goal of promoting the upgrade of retail digital
                          stores with technology empowerment.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="position-relative text-center col-lg-7">
                    <img
                      class="intro-img img-fluid wow fade-in-right delay-1s"
                      src={AllStarIntro2}
                      alt=""
                    />
                    <img
                      class="bg-logo img-fluid wow fade-in delay-05s"
                      src={AllStarBGLogo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SOLUTION --> */}
      <section id="solution" class="asc-solution-canvas">
        <div class="asc-solution">
          <div class="container">
            <div class="ci">
              <div class="container">
                <div class="intro-box">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="intro wow fade-in-left delay-05s">
                        <h2>
                          The suite of Hanshow digital solutions for retailers
                          can be separated into three main units
                        </h2>
                      </div>
                    </div>
                    <div class="col-lg-4 offset-lg-2">
                      <div class="intro wow fade-in-right delay-05s">
                        <p>
                          Each of these units contain a multitude of different
                          devices that work in sync to deliver solutions for
                          retailers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="intro wow fade-in-bottom delay-1s text-center">
              <div class="row">
                <div class="col-lg-4 col-sm-6 wow fade-in-left delay-1s">
                  <div class="solution-item">
                    <h4>Electronic shelf labels</h4>
                    <div class="photo">
                      <img class="img-fluid" src={AllStarSolution1} alt="" />
                    </div>
                    <a
                      class="button"
                      href="/solutions/category/electronic-shelf-labels"
                    >
                      Discover More⟶
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 wow fade-in-bottom delay-1s">
                  <div class="solution-item">
                    <h4>Intelligent store solutions</h4>
                    <div class="photo">
                      <img class="img-fluid" src={AllStarSolution2} alt="" />
                    </div>
                    <a
                      class="button"
                      href="/solutions/category/intelligent-store"
                    >
                      Discover More⟶
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 wow fade-in-right delay-1s">
                  <div class="solution-item">
                    <h4>AI solutions</h4>
                    <div class="photo">
                      <img class="img-fluid" src={AllStarSolution3} alt="" />
                    </div>
                    <a
                      class="button"
                      href="/solutions/category/ai-plus-solutions"
                    >
                      Discover More⟶
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ci">
              <div class="container">
                <div class="intro-box">
                  <div class="row">
                    <div class="position-relative text-center col-lg-7">
                      <img
                        class="img-fluid box-shadow wow fade-in-left delay-05s"
                        src={AllStarSolution4}
                        alt=""
                      />
                    </div>
                    <div class="col-lg-5">
                      <div class="intro wow fade-in-right delay-05s">
                        <p style={{ textAlign: "left" }}>
                          <span style={{ fontSize: "18pt" }}>
                            Lowering the threshold for retail digital store
                            transformation and comprehensively improving
                            operational efficiency
                          </span>
                        </p>
                        <p style={{ textAlign: "left" }}>&nbsp;</p>
                        <p style={{ textAlign: "left" }}>
                          <span style={{ fontSize: "18pt" }}>
                            Flexibility to build business applications according
                            to user needs, integrate customized business
                            connections
                          </span>
                        </p>
                        <p style={{ textAlign: "left" }}>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ci">
              <div class="container">
                <div class="intro-box">
                  <div class="row">
                    <div class="col-lg-5 pe-md-5">
                      <div class="intro wow fade-in-left delay-05s">
                        <h2 class="mb-4 mt-5">
                          Cost Saving and Efficiency Improvement
                        </h2>
                        <p>
                          Retail stores with multiple devices and systems need a
                          lot of deployment costs and human learning and
                          management costs, All-Star IoT platform integrated
                          management can save human learning, system deployment
                          and other costs
                        </p>
                      </div>
                    </div>
                    <div class="position-relative text-center col-lg-7">
                      <img
                        class="intro-img img-fluid wow fade-in-right delay-1s"
                        src={AllStarSolution5}
                        alt=""
                      />
                      <img
                        class="bg-logo img-fluid wow fade-in delay-05s"
                        src={AllStarBGLogo}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SHILPC --> */}
      <section id="shilpc" class="asc-shilpc-canvas">
        <div class="asc-shilpc">
          <div class="container">
            <div class="ci">
              <div class="container">
                <div class="intro-box">
                  <div class="row">
                    <div class="position-relative text-center col-lg-6">
                      <img
                        class="img-fluid wow fade-in-left delay-05s"
                        src={AllStarShilpc1}
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <div class="intro text-center wow fade-in-right delay-05s">
                        <h1>HiLPC</h1>
                        <p>
                          What&rsquo;s more, Hanshow has developed an
                          industry-first communications protocol that uses one
                          transmission frequency to communicate with all
                          Hanshow&rsquo;s IoT devices, easing the burden on the
                          range of signal frequencies previously needed. This
                          new network communications protocol is called HiLPC
                          (or high-density low power cellular network).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ci">
              <div class="container">
                <div class="intro-box">
                  <div class="row">
                    <div class="col-lg-5 pe-lg-5">
                      <div class="intro wow fade-in-left delay-05s">
                        <h2 class="mb-4 mt-5">Centralized Management</h2>
                        <p>
                          Provides a rich out-of-the-box solution through
                          flexible modular integration that enables pricing
                          variation, inventory management, picking and
                          positioning, smart payments and out-of-stock
                          monitoring.
                        </p>
                      </div>
                    </div>
                    <div class="position-relative text-center col-lg-7">
                      <img
                        class="intro-img img-fluid wow fade-in-right delay-1s"
                        src={AllStarShilpc2}
                        alt=""
                      />
                      <img
                        class="bg-logo img-fluid wow fade-in delay-05s"
                        src={AllStarBGLogo}
                        alt=""
                      />
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

export default AllStarCloud
