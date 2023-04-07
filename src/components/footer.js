import { Link } from "gatsby"
import * as React from "react"
import {
  FacebookIcon,
  LinkedinIcon,
  Logo,
  TwitterIcon,
  YoutubeIcon,
} from "../utils/imgImport"

const Footer = ({ navNews }) => (
  <footer className="main-footer">
    <div className="container">
      <div className="footer-top">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="/solutions/category/electronic-shelf-labels">
                SOLUTIONS
              </a>{" "}
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="/solutions/category/electronic-shelf-labels">
                  Electronic Shelf Labels
                </a>
              </li>
              <li>
                <a href="/solutions/category/ai-plus-solutions">
                  AIoT Solutions
                </a>
              </li>
              <li>
                <a href="/solutions/category/all-star-cloud">
                  Hanshow IoT Cloud
                </a>
              </li>
              <li>
                <a href="/solutions/category/intelligent-store">
                  Intelligent Store
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="/business-cases">Business Cases</a>
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="/business-cases#grocery">Grocery</a>
              </li>
              <li>
                <a href="/business-cases#diy">DIY</a>
              </li>
              <li>
                <a href="/business-cases#electronics">Consumer Electronics</a>
              </li>
              <li>
                <a href="/business-cases#drug-store">Drug Store</a>
              </li>
              <li>
                <a href="/business-cases#manufacturing">Manufacturing</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="/news">NEWSROOM</a>
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="/news">Press Releases</a>
              </li>
              <li>
                <a href="/news">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg">
            <div className="footer-heading">
              <a href="/company">COMPANY</a>
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-links footer-mobile-dropdown-menu">
              <li>
                <a href="/company">About Hanshow</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-news col-md col-lg-4">
            <div className="footer-heading">
              <a href="/news">LATEST NEWS</a>
              <span className="footer-mobile-dropdown"></span>
            </div>
            <ul className="footer-mobile-dropdown-menu">
              {navNews.map((item, idx) => (
                <li key={idx}>
                  <img
                    className="footer-news-img img-fluid lazyload"
                    data-src={item.data.thumb_img.url}
                    alt={item.data.title}
                  />
                  <div>
                    <Link
                      to={`/news/${item.uid}`}
                      className="footer-news-title"
                    >
                      {item.data.title}
                    </Link>
                    <div className="footer-news-date">
                      {item.data.date} - <a href="#Press">{item.data.type}</a>
                    </div>
                  </div>
                </li>
              ))}
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
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="https://beian.miit.gov.cn">浙ICP备14040138号</a>
      </div>
    </div>
  </footer>
)

export default Footer
