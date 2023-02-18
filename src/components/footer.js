import * as React from "react"
import {
  FacebookIcon,
  LinkedinIcon,
  Logo,
  News1,
  News2,
  TwitterIcon,
  YoutubeIcon,
} from "../utils/imgImport"

const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <div className="footer-top">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="solutions/category/electronic-shelf-labels.html">
                SOLUTIONS
              </a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="solutions/category/electronic-shelf-labels.html">
                  Electronic Shelf Labels
                </a>
              </li>
              <li>
                <a href="solutions/category/ai-plus-solutions.html">
                  AIoT Solutions
                </a>
              </li>
              <li>
                <a href="solutions/category/all-star-cloud.html">
                  Hanshow IoT Cloud
                </a>
              </li>
              <li>
                <a href="solutions/category/intelligent-store.html">
                  Intelligent Store
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="business-cases.html">Business Cases</a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="business-cases.html#grocery">Grocery</a>
              </li>
              <li>
                <a href="business-cases.html#diy">DIY</a>
              </li>
              <li>
                <a href="business-cases.html#electronics">
                  Consumer Electronics
                </a>
              </li>
              <li>
                <a href="business-cases.html#drug-store">Drug Store</a>
              </li>
              <li>
                <a href="business-cases.html#manufacturing">Manufacturing</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="news.html">NEWSROOM</a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="news.html">Press Releases</a>
              </li>
              <li>
                <a href="news.html">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="company.html">COMPANY</a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="company.html">About Hanshow</a>
              </li>
              <li>
                <a href="career.html">Career</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="sitemap.html">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-news col-md col-lg-4">
            <div className="footer-heading">
              <a href="news.html">LATEST NEWS</a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-mobile-dropdown-menu">
              <li>
                <img
                  className="footer-news-img img-fluid lazyload"
                  data-src={News1}
                  alt="Microsoft and Sony Semiconductor Solutions Visit Hanshow’s Booth to Discuss the Future of Digital Retail"
                />
                <div>
                  <a
                    href="news/microsoft-and-sony-semiconductor-solutions-visit-hanshow%E2%80%99s-booth-to-discuss-the-future-of-digital-retail.html"
                    className="footer-news-title"
                  >
                    Microsoft and Sony Semiconductor Solutions Visit Hanshow’s
                    Booth to Discuss the Future of Digital Retail
                  </a>
                  <div className="footer-news-date">
                    17-01-2023 - <a href="#Press">Press Releases</a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  className="footer-news-img img-fluid lazyload"
                  data-src={News2}
                  alt="Hanshow Unveils New Generation Protocol and Four-Color ESL at NRF 2023"
                />
                <div>
                  <a
                    href="news/hanshow-unveils-new-generation-protocol-and-four-color-esl-at-nrf-2023.html"
                    className="footer-news-title"
                  >
                    Hanshow Unveils New Generation Protocol and Four-Color ESL
                    at NRF 2023
                  </a>
                  <div className="footer-news-date">
                    16-01-2023 - <a href="#Press">Press Releases</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="/">
          <img className="img-fluid footer-logo" src={Logo} alt="" />
        </a>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/hanshowtechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="facebook" />
          </a>
          <a
            href="https://www.youtube.com/c/HanshowTechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img src={YoutubeIcon} alt="youtube" />
          </a>
          <a
            href="https://www.linkedin.com/company/hanshow/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
          <a
            href="https://twitter.com/hanshowofficial"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright 2023 Hanshow Technology. All Rights Reserved. |{" "}
        <a href="privacy-policy.html">Privacy Policy</a> |{" "}
        <a href="https://beian.miit.gov.cn">浙ICP备14040138号</a>
      </div>
    </div>
  </footer>
)

export default Footer
