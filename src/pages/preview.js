import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import Layout from '../components/layout'

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return 'Not a preview!'

  return <Layout>
    <section className="text-center">
      <h1>Loading Preview...</h1>
    </section>
  </Layout>
}

export default withPrismicPreviewResolver(PreviewPage)
