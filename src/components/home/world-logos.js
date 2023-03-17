import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import loadable from "@loadable/component"
import { BgGlobe } from "../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const WorldLogos = () => {
  const options = {
    loop: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    lazyLoad: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },
      1200: {
        margin: 20,
        items: 7,
      },
    },
  }

  const staticData = useStaticQuery(graphql`
    query {
      world_logs: allPrismicHomepage {
        nodes {
          _previewable
          data {
            logos {
              logo_img {
                url
              }
            }
          }
        }
      }
    }
  `)
  const { data } = useMergePrismicPreviewData(staticData)
  const { world_logs } = data

  return (
    <section className="world-logos-canvas">
      <div className="world-logos">
        <h3 className="wow fade-in delay-03s">
          Trusted by leading brands worldwide
        </h3>
        <img src={BgGlobe} alt="" />
        <div className="logos-carousel-canvas wow fade-in-top delay-03s">
          <OwlCarousel
            className="logos-carousel owl-carousel owl-theme"
            {...options}
          >
            {world_logs.nodes[0].data.logos.map((item, idx) => (
              <div className="item" key={idx}>
                <img className="owl-lazy" alt="" data-src={item.logo_img.url} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default WorldLogos
