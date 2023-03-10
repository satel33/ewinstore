import { Link } from "gatsby"
import * as React from "react"
import { getCasesWithCategory } from "../utils/helpers"
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
  News2,
  PharmacyIcon,
  PRIcon,
} from "../utils/imgImport"

const Header = ({ navCases, navNews }) => (
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
                href="/solutions/category/electronic-shelf-labels"
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
                            <a href="/solutions/category/electronic-shelf-labels">
                              ELECTRONIC SHELF LABELS
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/nebular">NEBULAR</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/stellar-pro">STELLAR PRO</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/lumina-aqua">LUMINA AQUA</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/nowa">NOWA</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={ISIcon} alt="esl-icon" />
                            </span>
                            <a href="/solutions/category/intelligent-store">
                              INTELLIGENT STORE
                            </a>
                          </div>
                          <span className="lg-label">In-store Marketing</span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/lumina-aqua">LUMINA AQUA</a>
                            </li>
                            <li>
                              <a href="/lumina-edge">LUMINA MAX / EDGE</a>
                            </li>
                          </ul>
                          <span className="lg-label">Payment Solutions</span>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/smart-trolley">SMART TROLLEY</a>
                            </li>
                            <li>
                              <a href="/self-service-kiosk">
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
                            <a href="/solutions/category/ai-plus-solutions">
                              AIOT Solution
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/spatrol">Inventory Robot</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/visight">Planogram AI Camera</a>
                            </li>
                          </ul>
                          <ul className="fade-in-left delay-03s"></ul>
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={HRCIcon} alt="esl-icon" />
                            </span>
                            <a href="/solutions/category/all-star-cloud">
                              HANSHOW IOT CLOUD
                            </a>
                          </div>
                          <ul className="fade-in-left delay-03s">
                            <li>
                              <a href="/solutions/category/all-star-cloud">
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
              <a className="main-link" href="/business-cases">
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
                            <a href="/business-cases#grocery">GROCERY</a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            {getCasesWithCategory(navCases, "grocery").map(
                              item => (
                                <li key={item.uid}>
                                  <Link to={`/case/${item.uid}`}>
                                    {item.data.featured_client}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={CEIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases#electronics">
                              Consumer Electronics
                            </a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            {getCasesWithCategory(navCases, "electronics").map(
                              item => (
                                <li key={item.uid}>
                                  <Link to={`/case/${item.uid}`}>
                                    {item.data.featured_client}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={DIYIcon} alt="esl-icon" />
                            </span>
                            <a href="business-cases#diy">DIY</a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            {getCasesWithCategory(navCases, "diy").map(item => (
                              <li key={item.uid}>
                                <Link to={`/case/${item.uid}`}>
                                  {item.data.featured_client}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="links">
                          <div className="head-link fade-in-top">
                            <span className="hl-icon">
                              <img src={PharmacyIcon} alt="esl-icon" />
                            </span>
                            <a href="/business-cases#drug-store">DRUG STORE</a>
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
                            <a href="/business-cases#manufacturing">
                              MANUFACTURING
                            </a>
                          </div>
                          <span className="lg-label">
                            Featured Client Case Studies
                          </span>
                          <ul className="fade-in-left delay-03s">
                            {getCasesWithCategory(
                              navCases,
                              "manufacturing"
                            ).map(item => (
                              <li key={item.uid}>
                                <Link to={`/case/${item.uid}`}>
                                  {item.data.featured_client}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="main-link" href="/news">
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
                          <Link
                            to={`/news/${navNews.uid}`}
                            className="article-thumb"
                          >
                            <img
                              src={navNews.data.thumb_img.url}
                              alt={navNews.data.title}
                            />
                          </Link>
                          <div className="article-intro">
                            <h2>
                              <Link to={`/news/${navNews.uid}`}>
                                {navNews.data.title}
                              </Link>
                            </h2>
                            <p>{navNews.data.summary}</p>
                            <div className="article-others">
                              <span className="article-date">
                                {navNews.data.date}
                              </span>
                              -
                              <a href="#Press" className="article-cat">
                                {navNews.data.type}
                              </a>
                            </div>
                          </div>
                        </article>

                        <div className="msf-links fade-in-left">
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={PRIcon} alt="pr-icon" />
                            </span>
                            <a href="/news">Press Releases</a>
                          </div>
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={BlogIcon} alt="blog-icon" />
                            </span>
                            <a href="/news">Blog</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="main-link" href="/company">
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
                          <a href="/sitemap" className="article-thumb">
                            <img src={News2} alt="thumb" />
                          </a>
                          <div className="article-intro">
                            <h2>
                              <a href="/sitemap">
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
                            <a href="/company">About Hanshow</a>
                          </div>
                          <div className="head-link">
                            <span className="hl-icon">
                              <img src={CareerIcon} alt="career-icon" />
                            </span>
                            <a href="/career">Career</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <a href="/contact" className="contact-link">
            Contact
          </a>
        </nav>

        <nav className="mobile-nav">
          <ul className="mobile-main-links">
            <li>
              <a href="/solutions/category/electronic-shelf-labels">
                Solutions
              </a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="/solutions/category/electronic-shelf-labels">
                    ELECTRONIC SHELF LABELS
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/nebular">NEBULAR</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/stellar-pro">STELLAR PRO</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/lumina-aqua">LUMINA AQUA</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/solutions/category/intelligent-store">
                    INTELLIGENT STORE
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">In-store Marketing</span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/lumina-aqua">LUMINA AQUA</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/lumina-edge">LUMINA MAX / EDGE</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">Payment Solutions</span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/smart-trolley">SMART TROLLEY</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/self-service-kiosk">SELF-SERVICE TERMINAL</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/solutions/category/ai-plus-solutions">
                    AIOT Solution
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/spatrol">Inventory Robot</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/visight">Planogram AI Camera</a>
                    </li>
                  </ul>
                  <a href="/solutions/category/all-star-cloud">
                    HANSHOW IOT CLOUD
                  </a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <a href="/solutions/category/all-star-cloud">
                        ALL STAR Platform
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/business-cases">Business Cases</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="/business-cases#grocery">GROCERY</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/groupement-les-mousquetaires">
                        Intermarché
                      </a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/louis-delhaize-group">Match Belgium</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/spar-in-france-group-casino">
                        SPAR France
                      </a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/groupement-syteme-u">System U</a>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/u-express">U Express</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/business-cases#electronics">Consumer Electronics</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/wu-mart">Wumart</a>
                    </li>
                  </ul>
                  <a href="/business-cases#diy">DIY</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/zo%CC%82dio">Zôdio</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/business-cases#drug-store">DRUG STORE</a>
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
                  <a href="/business-cases#manufacturing">MANUFACTURING</a>
                  <ul>
                    <li className="fade-in-right delay-02s">
                      <span className="sub-label">
                        Featured Client Case Studies
                      </span>
                    </li>
                    <li className="fade-in-right delay-02s">
                      <a href="/case/manufacturer">Client A</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/news">Newsroom</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="/news">Blog</a>
                </li>
                <li>
                  <a href="/news">Press Releases</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/company">Company</a>
              <span className="sub-trigger">
                <span className="pm-icon">&nbsp;</span>
              </span>
              <ul className="sub-links">
                <li>
                  <a href="/company">About Hanshow</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <a href="/contact" className="contact-link">
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
