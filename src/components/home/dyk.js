import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import OwlCarousel from "react-owl-carousel"

const DidYouKnow = () => {
  const { dyk_data } = useStaticQuery(graphql`
    query {
      dyk_data: allPrismicHomepage {
        nodes {
          data {
            dyk_slider {
              dyk_text
            }
          }
        }
      }
    }
  `)

  return (
    <section className="dyk-canvas">
      <div className="container">
        <div className="dyk">
          <div className="section-line-title wow fade-in-bottom delay-03s">
            <h3>Did you know</h3>
            <span className="line">&nbsp;</span>
          </div>
          <div className="dyk-carousel-canvas">
            <OwlCarousel
              className="dyk-carousel full-carousel owl-carousel owl-theme"
              loop={true}
              items={1}
              autoplay={true}
              nav={false}
              margin={0}
            >
              {dyk_data.nodes[0].data.dyk_slider.map((item, idx) => (
                <div className="item" key={idx}>
                  <p>{item.dyk_text}</p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DidYouKnow
