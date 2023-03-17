import * as React from "react"
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="text-center">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default withPrismicUnpublishedPreview(NotFoundPage)
