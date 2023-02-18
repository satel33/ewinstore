import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import loadable from "@loadable/component"
import { HeroBG, HeroBGMobile } from "../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const HomeHero = () => {
  const { hero_data } = useStaticQuery(graphql`
    query {
      hero_data: allPrismicHomepage {
        nodes {
          data {
            hero_text_slider {
              slider_text
              slider_title
              learn_more_link
            }
          }
        }
      }
    }
  `)

  return (
    <section className="home-hero-canvas main-hero-canvas">
      <div className="main-hero">
        <div className="mh-carousel-canvas">
          <OwlCarousel
            className="mh-carousel owl-carousel owl-theme"
            loop={true}
            dots={true}
            items={1}
            autoplay={true}
            nav={false}
            autoplayTimeout={7000}
            margin={0}
            smartSpeed={900}
          >
            {hero_data.nodes[0].data.hero_text_slider.map((item, idx) => (
              <div className="slide-item" key={idx}>
                <div className="intro">
                  <h1 className="fade-in-bottom">{item.slider_title}</h1>
                  <p className="fade-in-top">{item.slider_text}</p>
                  <Link to={item.learn_more_link} className="button-hero">
                    Learn More ⟶
                  </Link>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>

        <div className="mh-video-bg-room">
          <div className="overlay left dark">&nbsp;</div>
          <video autoPlay loop muted playsInline controlsList="nodownload">
            <track kind="captions" srcLang="en" label="english_captions" />
            <source
              src={HeroBG}
              type="video/mp4"
              media="screen and (min-width:768px)"
            />
            <source
              src={HeroBGMobile}
              type="video/mp4"
              media="screen and (max-width:767px)"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
