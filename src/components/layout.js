import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          src={withPrefix("js/ewinstore.min.js")}
          type="text/javascript"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="back-to-top" style={{ display: "block" }}>
        <span className="back-to-top-text">Back to Top</span>
        <span className="back-to-top-box">↑</span>
      </div>
    </>
  )
}

export default Layout
