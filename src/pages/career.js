/* eslint-disable jsx-a11y/media-has-caption */

import * as React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import {
  Activities1,
  Activities2,
  Activities3,
  Activities4,
  CareersAbout1,
  CareersAbout2,
  CareersAbout3,
  CareersHero,
  CareersVideoThumb,
  CoreValues1,
  Develop1,
  Develop2,
  Develop3,
  Develop4,
  IconTalent1,
  IconTalent2,
  IconTalent3,
  Offices1,
  Offices2,
  Offices3,
  Team1,
} from "../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const CompanyPage = () => {
  const options1 = {
    items: 1,
    nav: false,
    dots: true,
    dotData: true,
    dotsEach: true,
    dotsContainer: ".activities-dots",
  }
  const options2 = {
    items: 1,
    margin: 20,
    nav: false,
    dots: true,
    dotData: true,
    dotsEach: true,
    dotsContainer: ".products-dots",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  }
  return (
    <Layout>
      <section className="page-hero-canvas">
        <div className="page-hero">
          <div className="intro">
            <h1 className="wow fade-in-left delay-05s">Careers</h1>
            <p className="wow fade-in-left delay-08s">
              Take A One Step Closer To Your New Job.
            </p>
          </div>
          <img src={CareersHero} alt="" />
        </div>
      </section>

      <nav className="page-section-nav wow fade-in-bottom" data-wow-offset="50">
        <div className="psn-mobile">
          Go to
          <div className="psn-mobile-dropdown">&nbsp;</div>
        </div>
        <ul>
          <li>
            <a id="x-1" href="#recruitment">
              Recruitment
            </a>
          </li>
          <li>
            <a id="x-2" href="#corevalues">
              Core Values
            </a>
          </li>
          <li>
            <a id="x-3" href="#development">
              Development &amp; Benefits
            </a>
          </li>
          <li>
            <a id="x-4" href="#activities">
              Activities &amp; Life
            </a>
          </li>
          <li>
            <a id="x-5" href="#offices">
              Facilities &amp; Offices
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- RECRUITMENT --> */}
      <section id="recruitment" className="car-recruitment-canvas">
        <div className="big-head ci-title wow fade-in-top delay-1s">
          <h1>Watch</h1>
        </div>
        <div className="car-recruitment">
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="intro wow fade-in-bottom delay-05s text-center">
                  <h1>Joining Hanshow, Now is the Future</h1>
                  <p>
                    We create the new era of retail industry and our solutions
                    <br />
                    help our clients realize the true digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="intro wow fade-in-left delay-05s">
                      <h1>
                        Invaluable
                        <br />
                        and
                        <br />
                        Incredible
                      </h1>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <video
                      id="video"
                      poster={CareersVideoThumb}
                      preload="auto"
                      autoPlay="autoplay"
                      muted=""
                      controls="controls"
                      width="100%"
                      height="100%"
                    >
                      <source
                        src="https://www.hanshow.com/storage/videos/Career/hanshow%20people%20%20employee%20video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ci">
            <div className="container">
              <div className="intro-box">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row wow fade-in-left delay-05s">
                      <div className="col-sm-12 mb-4">
                        <img className="img-fluid" src={CareersAbout1} alt="" />
                      </div>
                      <div className="col-sm-8">
                        <img className="img-fluid" src={CareersAbout2} alt="" />
                      </div>
                      <div className="col-sm-4">
                        <img className="img-fluid" src={CareersAbout3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="intro wow fade-in-right delay-1s">
                      <h1>
                        Looking for a Job?
                        <br />
                        Let&rsquo;s Get Started
                      </h1>
                    </div>
                    <div className="job-item">
                      <h4>Experienced Professionals</h4>
                      <p>
                        Explore job opportunities and take your career to the
                        next level.
                      </p>
                      <p>(Coming soon...)</p>
                    </div>
                    <div className="job-item">
                      <h4>Internships and Graduates</h4>
                      <p>
                        Find entry level job for new college graduates and
                        degree professional.
                      </p>
                      <p>(Coming soon...)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- COREVALUES --> */}
      <section id="corevalues" className="car-corevalues-canvas">
        <div className="corevalues-vision">
          <div className="container">
            <div className="intro wow fade-in-bottom delay-05s">
              <div className="career-cv-connector">
                <div className="career-cv-img">
                  <img
                    className="d-block mx-auto img-fluid"
                    src={CoreValues1}
                    alt=""
                  />
                  <div className="career-cv-text">Core Values</div>
                </div>
                <ul>
                  <li className="wow fade-in-left delay-03s">
                    Customer Oriented Innovation
                    <div className="connector connector-x connector-dot connector-left">
                      &nbsp;
                    </div>
                    <div className="connector connector-y connector-dot connector-bottom">
                      &nbsp;
                    </div>
                  </li>
                  <li className="wow fade-in-right delay-06s">
                    Be Results-Driven
                    <div className="connector connector-x connector-dot connector-right">
                      &nbsp;
                    </div>
                    <div className="connector connector-y connector-dot connector-bottom">
                      &nbsp;
                    </div>
                  </li>
                  <li className="wow fade-in-left delay-09s">
                    Strive to be the Best
                    <div className="connector connector-y connector-dot connector-top">
                      &nbsp;
                    </div>
                    <div className="connector connector-x connector-dot connector-right">
                      &nbsp;
                    </div>
                  </li>
                  <li className="wow fade-in-right delay-1-2s">
                    A Culture of Integrity, Sharing, Excellence and Openness
                    <div className="connector connector-y connector-dot connector-top">
                      &nbsp;
                    </div>
                    <div className="connector connector-x connector-dot connector-left">
                      &nbsp;
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="intro wow fade-in-bottom delay-1s text-center">
              <h1 className="mb-5">The View of Talents</h1>
              <div className="row">
                <div className="col-lg-4 col-sm-6 wow fade-in-bottom delay-1s">
                  <div className="corevalues-item">
                    <div className="icon">
                      <img src={IconTalent1} alt="talent icon" />
                    </div>
                    <h5>
                      Talents who Share
                      <br />
                      the Same Core Values
                    </h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 wow fade-in-bottom delay-1s">
                  <div className="corevalues-item">
                    <div className="icon">
                      <img src={IconTalent2} alt="talent icon" />
                    </div>
                    <h5>
                      Talents who have the
                      <br />
                      Capability of Iterative
                      <br />
                      Learning
                    </h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 wow fade-in-bottom delay-1s">
                  <div className="corevalues-item">
                    <div className="icon">
                      <img src={IconTalent3} alt="talent icon" />
                    </div>
                    <h5>
                      Talents who have
                      <br />
                      the Persistent and
                      <br />
                      Long-Termism
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DEVELOPMENT --> */}
      <section id="development" className="car-development-canvas">
        <div className="big-head ca-title wow fade-in-top delay-1s">
          <h1>Success</h1>
        </div>
        <div className="car-benefits">
          <div className="intro wow fade-in-bottom delay-05s">
            <div className="container">
              <h1>Development and Benefits</h1>
            </div>
          </div>
          <div className="benefits-list">
            <div className="container">
              <div className="benefits right">
                <div className="benefits-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">
                      1Growth and development
                    </h2>
                  </div>
                  <ul className="wow fade-in-right delay-03s">
                    <li>Clear Career Paths</li>
                    <li>Comprehensive Training Programs</li>
                    <li>Mentor Program</li>
                    <li>High Potential Program</li>
                    <li>Internship Program</li>
                  </ul>
                </div>
                <div className="benefits-image wow fade-in-right delay-03s">
                  <img className="img-fluid" src={Develop1} alt="" />
                </div>
              </div>
              <div className="benefits">
                <div className="benefits-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">
                      2Rewards and Recognition
                    </h2>
                  </div>
                  <ul className="wow fade-in-right delay-03s">
                    <li>CEO Granted Award</li>
                    <li>New Employee of the Year Award</li>
                    <li>Outstanding Employee of the Year Award</li>
                    <li>Manager of the Year Award</li>
                    <li>QC Award</li>
                  </ul>
                </div>
                <div className="benefits-image wow fade-in-right delay-03s">
                  <img className="img-fluid" src={Develop2} alt="" />
                </div>
              </div>
              <div className="benefits right">
                <div className="benefits-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">
                      3Perks and Benefits
                    </h2>
                  </div>
                  <ul className="wow fade-in-right delay-03s">
                    <li>Paid Vacation</li>
                    <li>Insurance and Housing Fund Benefits</li>
                    <li>Holiday Allowance</li>
                    <li>Monthly Birthday Party</li>
                    <li>Sports Clubs</li>
                  </ul>
                </div>
                <div className="benefits-image wow fade-in-right delay-03s">
                  <img className="img-fluid" src={Develop3} alt="" />
                </div>
              </div>
              <div className="benefits">
                <div className="benefits-intro">
                  <div className="ai-title">
                    <h2 className="wow fade-in-left delay-03s">
                      4Inclusive Environment
                    </h2>
                  </div>
                  <ul className="wow fade-in-right delay-03s">
                    <li>Respect for Diversity</li>
                    <li>Trusted Leadership</li>
                    <li>Employee Feedback Program</li>
                    <li>Hanshow Corporate Magazine</li>
                    <li>Team Building Events</li>
                  </ul>
                </div>
                <div className="benefits-image wow fade-in-right delay-03s">
                  <img className="img-fluid" src={Develop4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ACTIVITIES --> */}
      <section id="activities" className="car-activities-canvas">
        <div className="car-activities">
          <div className="intro mb-5 wow fade-in-bottom delay-05s">
            <div className="container">
              <h1 className="text-center">Activities and Life</h1>
            </div>
          </div>
          <div className="container">
            <div className="sb-carousel-canvas wow fade-in-top delay-06s">
              <OwlCarousel
                className="sb-carousel owl-carousel owl-theme"
                {...options1}
              >
                <div
                  className="item"
                  data-dot={
                    <button>
                      <img
                        src="https://www.hanshow.com/storage/images/pages/careers/activities/thumb-1.jpg"
                        className="thumb"
                        alt=""
                      />
                      Festival Celebrations
                    </button>
                  }
                >
                  <div className="benefit-block">
                    <img src={Activities1} alt="" />
                    <div className="intro">
                      We always dedicated to create a diversified and inclusive
                      environment. Every team member is welcome to our Festival
                      Celebrations.
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="<button><img src='https://www.hanshow.com/storage/images/pages/careers/activities/thumb-2.jpg' className='thumb' />Birthday Party</button>"
                >
                  <div className="benefit-block">
                    <img src={Activities2} alt="" />
                    <div className="intro">
                      We have Birthday Parties arrange for our team members
                      every month.
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="<button><img src='https://www.hanshow.com/storage/images/pages/careers/activities/thumb-3.jpg' className='thumb' />Annual Running Activities</button>"
                >
                  <div className="benefit-block">
                    <img src={Activities3} alt="" />
                    <div className="intro">
                      We always advocate a healthy lifestyle. The Long-Distance
                      Running Activity is organized annually.
                    </div>
                  </div>
                </div>
                <div
                  className="item"
                  data-dot="<button><img src='https://www.hanshow.com/storage/images/pages/careers/activities/thumb-4.jpg' className='thumb' />Group Activities</button>"
                >
                  <div className="benefit-block">
                    <img src={Activities4} alt="" />
                    <div className="intro">
                      We encourage every team member to explore more fascinating
                      and exciting Group Activities.
                    </div>
                  </div>
                </div>
              </OwlCarousel>
              <div className="owl-dots activities-dots">
                <div className="owl-dot active">
                  <button>
                    <img
                      src="https://www.hanshow.com/storage/images/pages/careers/activities/thumb-1.jpg"
                      className="thumb"
                      alt=""
                    />
                    Festival Celebrations
                  </button>
                </div>
                <div className="owl-dot">
                  <button>
                    <img
                      src="https://www.hanshow.com/storage/images/pages/careers/activities/thumb-2.jpg"
                      className="thumb"
                      alt=""
                    />
                    Birthday Party
                  </button>
                </div>
                <div className="owl-dot">
                  <button>
                    <img
                      src="https://www.hanshow.com/storage/images/pages/careers/activities/thumb-3.jpg"
                      className="thumb"
                      alt=""
                    />
                    Annual Running Activities
                  </button>
                </div>
                <div className="owl-dot">
                  <button>
                    <img
                      src="https://www.hanshow.com/storage/images/pages/careers/activities/thumb-4.jpg"
                      className="thumb"
                      alt=""
                    />
                    Group Activities
                  </button>
                </div>
              </div>
            </div>
            <div className="team">
              <div className="row mt-5">
                <div className="col-lg-5 col-sm-6 wow fade-in-left delay-05s">
                  <img className="img-fluid" src={Team1} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-center col-lg-6 offset-lg-1 col-sm-6 wow fade-in-right delay-1s text-center">
                  <OwlCarousel
                    className="spr-carousel owl-carousel owl-theme wow fade-in-top delay-05s"
                    {...options2}
                  >
                    <div
                      className="item"
                      data-dot="<button><div className='photo'><img className='img-fluid' src='https://www.hanshow.com/storage/images/pages/careers/activities/bruno-liard.png' alt='' /></div>
                      <div className='desc'>
                        <h4>Bruno LIARD</h4>
                        Project Manager</div></button>"
                    >
                      <h5 className="mb-3">
                        It's my pleasure to work in such an international
                        company with warm and friendly atmosphere. In Hanshow,
                        everyone shares ideas and working experience. Different
                        culture backgrounds brings variety, which improves our
                        working skills and promotes the development of business.
                        And the working atmosphere here is very important for
                        me, all my colleagues work with passion and we
                        collaborate perfectly.
                      </h5>
                    </div>
                    <div
                      className="item"
                      data-dot={
                        <button>
                          <div className="photo">
                            <img
                              className="img-fluid"
                              src="https://www.hanshow.com/storage/images/pages/careers/activities/hongjie-dou.png"
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <h4>Hongjie Dou</h4>
                            Technical Director
                          </div>
                        </button>
                      }
                    >
                      <h5 className="mb-3">
                        In this team, there are many top experts in various
                        fields, and each member shows the spirits of Hanshow:
                        persistence, resolution, passion, and mutual vision. We
                        can challenge and stretch our thinking, enrich the
                        experiences here.
                      </h5>
                    </div>
                  </OwlCarousel>
                  <div className="owl-dots products-dots">
                    <div className="owl-dot">
                      <button>
                        <div className="photo">
                          <img
                            className="img-fluid"
                            src="https://www.hanshow.com/storage/images/pages/careers/activities/bruno-liard.png"
                            alt=""
                          />
                        </div>
                        <div className="desc">
                          <h4>Bruno LIARD</h4>
                          Project Manager
                        </div>
                      </button>
                    </div>
                    <div className="owl-dot active">
                      <button>
                        <div className="photo">
                          <img
                            className="img-fluid"
                            src="https://www.hanshow.com/storage/images/pages/careers/activities/hongjie-dou.png"
                            alt=""
                          />
                        </div>
                        <div className="desc">
                          <h4>Hongjie Dou</h4>
                          Technical Director
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- OFFICES --> */}
      <section id="offices" className="car-offices-canvas">
        <div className="car-offices">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="intro mb-5 wow fade-in-left delay-05s">
                  <h1>
                    Facilities
                    <br />
                    and
                  </h1>
                  <h1>Offices</h1>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row wow fade-in-right delay-1s">
                  <div className="col-lg-12 mb-4">
                    <div className="wow fade-in-down office-item delay-1s">
                      <img className="img-fluid" src={Offices1} alt="" />
                      <div className="office-title">Head Quarters</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="wow fade-in-left office-item delay-1s">
                      <img className="img-fluid" src={Offices2} alt="" />
                      <div className="office-title">Office</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="wow fade-in-right office-item delay-1s">
                      <img className="img-fluid" src={Offices3} alt="" />
                      <div className="office-title">Office</div>
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

export default CompanyPage
