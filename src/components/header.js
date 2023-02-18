import * as React from "react"
import {
  AboutIcon,
  AIIcon,
  BlogIcon,
  CareerIcon,
  CEIcon,
  DIYIcon,
  ESLIcon,
  GroceryIcon,
  HRCIcon,
  ISIcon,
  Logo,
  News1,
  News2,
  PharmacyIcon,
  PRIcon,
} from "../utils/imgImport"

const Header = () => (
  <header className="main-header">
    <div className="mh-inner">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="main-menu">
        <nav className="main-nav">
          <ul className="main-links">
            <li>
              <a
                className="main-link"
                href="solutions/category/electronic-shelf-labels.html"
              >
                Solutions
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <div className="mega-submenu">
                <div className="ms-inner">
                  <div className="ms-room">
                    <div className="ms-intro">
                      <p>
                        Discover Hanshow’s comprehensive range of retail
                        digitalization solutions and products.
                      </p>
                    </div>

                    <div className="ms-set">
                      <div className="ms-links">
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={ESLIcon} alt="esl-icon" />
                            </span>
                            <a href="solutions/category/electronic-shelf-labels.html">
                              ELECTRONIC SHELF LABELS
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="nebular.html">NEBULAR</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="stellar-pro.html">STELLAR PRO</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="lumina-aqua.html">LUMINA AQUA</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={ISIcon} alt="esl-icon" />
                            </span>
                            <a href="solutions/category/intelligent-store.html">
                              INTELLIGENT STORE
                            </a>
                          </div>
                          <span className="lg-label">In-store Marketing</span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="lumina-aqua.html">LUMINA AQUA</a>
                            </li>
                            <li>
                              <a href="lumina-edge.html">LUMINA MAX / EDGE</a>
                            </li>
                          </ul>
                          <span className="lg-label">Payment Solutions</span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="smart-trolley.html">SMART TROLLEY</a>
                            </li>
                            <li>
                              <a href="self-service-kiosk.html">
                                SELF-SERVICE TERMINAL
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={AIIcon} alt="esl-icon" />
                            </span>
                            <a href="solutions/category/ai-plus-solutions.html">
                              AIOT Solution
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="spatrol.html">Inventory Robot</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="visight.html">Planogram AI Camera</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={HRCIcon} alt="esl-icon" />
                            </span>
                            <a href="solutions/category/all-star-cloud.html">
                              HANSHOW IOT CLOUD
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="solutions/category/all-star-cloud.html">
                                ALL STAR Platform
                              </a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="main-link" href="business-cases.html">
                Business Cases
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <div className="mega-submenu">
                <div className="ms-inner">
                  <div className="ms-room">
                    <div className="ms-intro">
                      <p>
                        Hanshow’s solutions complement the full range of retail
                        environments.
                      </p>
                    </div>

                    <div className="ms-set">
                      <div className="ms-links">
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={GroceryIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases.html#grocery">GROCERY</a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="case/groupement-les-mousquetaires.html">
                                Intermarché
                              </a>
                            </li>
                            <li>
                              <a href="case/louis-delhaize-group.html">
                                Match Belgium
                              </a>
                            </li>
                            <li>
                              <a href="case/spar-in-france-group-casino.html">
                                SPAR France
                              </a>
                            </li>
                            <li>
                              <a href="case/groupement-syteme-u.html">
                                System U
                              </a>
                            </li>
                            <li>
                              <a href="case/u-express.html">U Express</a>
                            </li>
                          </ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={CEIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases.html#electronics">
                              Consumer Electronics
                            </a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="case/wu-mart.html">Wumart</a>
                            </li>
                          </ul>
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={DIYIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases.html#diy">DIY</a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="case/zo%CC%82dio.html">Zôdio</a>
                            </li>
                          </ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={PharmacyIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases.html#drug-store">
                              DRUG STORE
                            </a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="#PHARMAGEST">PHARMAGEST</a>
                            </li>
                          </ul>
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={BlogIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases.html#manufacturing">
                              MANUFACTURING
                            </a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="case/manufacturer.html">Client A</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="main-link" href="news.html">
                Newsroom
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <div className="mega-submenu">
                <div className="ms-inner">
                  <div className="ms-room">
                    <div className="ms-intro">
                      <p>Latest News</p>
                    </div>

                    <div className="ms-set">
                      <div className="ms-featured">
                        <article className="fade-in-right">
                          <a
                            href="news/microsoft-and-sony-semiconductor-solutions-visit-hanshow%E2%80%99s-booth-to-discuss-the-future-of-digital-retail.html"
                            className="article-thumb"
                          >
                            <img
                              src={News1}
                              alt="Microsoft and Sony Semiconductor Solutions Visit Hanshow’s Booth to Discuss the Future of Digital Retail"
                            />
                          </a>
                          <div className="article-intro">
                            <h2>
                              <a href="news/microsoft-and-sony-semiconductor-solutions-visit-hanshow%E2%80%99s-booth-to-discuss-the-future-of-digital-retail.html">
                                Microsoft and Sony Semiconductor Solutions Visit
                                Hanshow’s Booth to Discuss the Future of Digital
                                Retail
                              </a>
                            </h2>
                            <p>
                              Hanshow invited Mr. Jun Yamasaki and Mr. Yanai
                              Shunsuke to visit its exhibition booth and have a
                              further communication on Partner Enablement
                              Program.
                            </p>
                            <div className="article-others">
                              <span className="article-date">17-01-2023</span>-
                              <a href="#Press" className="article-cat">
                                Press Releases
                              </a>
                            </div>
                          </div>
                        </article>

                        <div className="msf-links fade-in-left">
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={PRIcon} alt="pr-icon" />
                            </span>
                            <a href="news.html">Press Releases</a>
                          </div>
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={BlogIcon} alt="blog-icon" />
                            </span>
                            <a href="news.html">Blog</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="main-link" href="company.html">
                Company
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <div className="mega-submenu">
                <div className="ms-inner">
                  <div className="ms-room">
                    <div className="ms-intro">
                      <p>Learn more about Hanshow Technology</p>
                    </div>

                    <div className="ms-set">
                      <div className="ms-featured">
                        <article className="fade-in-right">
                          <a href="#news" className="article-thumb">
                            <img src={News2} alt="thumb" />
                          </a>
                          <div className="article-intro">
                            <h2>
                              <a href="#founding">
                                Since Founding in 2012, Hanshow has become one
                                of the top three ESL Solutions providers
                              </a>
                            </h2>
                          </div>
                        </article>

                        <div className="msf-links fade-in-left">
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={AboutIcon} alt="about-icon" />
                            </span>
                            <a href="company.html">About Hanshow</a>
                          </div>
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={CareerIcon} alt="career-icon" />
                            </span>
                            <a href="career.html">Career</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <a href="contact.html" className="contact-link">
            Contact
          </a>
        </nav>

        <nav className="mobile-nav">
          <ul className="mobile-main-links">
            <li>
              <a href="solutions/category/electronic-shelf-labels.html">
                Solutions
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="solutions/category/electronic-shelf-labels.html">
                    ELECTRONIC SHELF LABELS
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="nebular.html">NEBULAR</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="stellar-pro.html">STELLAR PRO</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="lumina-aqua.html">LUMINA AQUA</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="solutions/category/intelligent-store.html">
                    INTELLIGENT STORE
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">In-store Marketing</span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="lumina-aqua.html">LUMINA AQUA</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="lumina-edge.html">LUMINA MAX / EDGE</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">Payment Solutions</span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="smart-trolley.html">SMART TROLLEY</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="self-service-kiosk.html">
                        SELF-SERVICE TERMINAL
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="solutions/category/ai-plus-solutions.html">
                    AIOT Solution
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="spatrol.html">Inventory Robot</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="visight.html">Planogram AI Camera</a>
                    </li>
                  </ul>
                  <a href="solutions/category/all-star-cloud.html">
                    HANSHOW IOT CLOUD
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="solutions/category/all-star-cloud.html">
                        ALL STAR Platform
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="business-cases.html">Business Cases</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="business-cases.html#grocery">GROCERY</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/groupement-les-mousquetaires.html">
                        Intermarché
                      </a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/louis-delhaize-group.html">Match Belgium</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/spar-in-france-group-casino.html">
                        SPAR France
                      </a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/groupement-syteme-u.html">System U</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/u-express.html">U Express</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="business-cases.html#electronics">
                    Consumer Electronics
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/wu-mart.html">Wumart</a>
                    </li>
                  </ul>
                  <a href="business-cases.html#diy">DIY</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/zo%CC%82dio.html">Zôdio</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="business-cases.html#drug-store">DRUG STORE</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="#PHARMAGEST">PHARMAGEST</a>
                    </li>
                  </ul>
                  <a href="business-cases.html#manufacturing">MANUFACTURING</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="case/manufacturer.html">Client A</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="news.html">Newsroom</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="news.html">Blog</a>
                </li>
                <li>
                  <a href="news.html">Press Releases</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="company.html">Company</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="company.html">About Hanshow</a>
                </li>
                <li>
                  <a href="career.html">Career</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>

          <a href="contact.html" className="contact-link">
            Contact
          </a>
        </nav>
      </div>

      <div className="mobile-menu-trigger">
        <div className="box">
          <div className="hamburger-button not-active">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
