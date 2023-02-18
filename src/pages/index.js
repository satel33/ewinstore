import * as React from "react"
import DidYouKnow from "../components/home/dyk"
import HomeHero from "../components/home/home-hero"
import WorldLogos from "../components/home/world-logos"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <DidYouKnow />
    <WorldLogos />
  </Layout>
)

export default IndexPage
