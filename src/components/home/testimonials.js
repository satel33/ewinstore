import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'
import loadable from "@loadable/component"
import { BgTestimonials, BigHLogo } from "../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const Testimonials = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    dots: true,
  }

  const staticData = useStaticQuery(graphql`
    query {
      testimonials: allPrismicHomepage {
        nodes {
          _previewable
          data {
            t_heading
            t_description
            testimonials {
              quote
              credit
            }
          }
        }
      }
    }
  `)
  const { data } = useMergePrismicPreviewData(staticData)
  const { testimonials } = data

  return (
    <section className="testimonials-canvas">
      <div className="container">
        <div className="testimonials">
          <div className="t-main">
            <div className="t-head">
              <h2>What makes the Hanshow difference?</h2>
              <p>
                Time and again our partners tell us that no one gives them more
                customer attention and support than Hanshow.
              </p>
            </div>

            <div className="testimonials-carousel-canvas">
              <OwlCarousel
                className="testimonials-carousel owl-carousel owl-theme"
                {...options}
              >
                {testimonials.nodes[0].data.testimonials.map((item, idx) => (
                  <div className="item" key={idx}>
                    <blockquote>
                      <p>{item.quote}</p>
                      <span className="credit">{item.credit}</span>
                    </blockquote>
                  </div>
                ))}
              </OwlCarousel>
            </div>

            <Link to="/business-cases" className="button button-white">
              See Partner Testimonials ⟶
            </Link>
          </div>

          <img className="big-h" src={BigHLogo} alt="logo" />
        </div>
      </div>
      <div className="t-bg  wow fade-in-right delay-03s">
        <img
          className="img-fluid lazyload"
          data-src={BgTestimonials}
          alt="testimonial"
        />
      </div>
    </section>
  )
}

export default Testimonials
