import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import Layout from '../components/layout'

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return 'Not a preview!'

  return <Layout>
    <section className="text-center">
      <p>Loading Preview...</p>
    </section>
  </Layout>
}

export default withPrismicPreviewResolver(PreviewPage)
