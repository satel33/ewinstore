import React from "react"
import loadable from "@loadable/component"
import {
  Accenture,
  ArubaNetworks,
  BlueYonder,
  Microsoft,
  SAP,
  TATA,
  Tencent,
} from "../../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const Partners = () => {
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

  const logos = [
    Accenture,
    ArubaNetworks,
    BlueYonder,
    Microsoft,
    SAP,
    TATA,
    Tencent,
  ]
  return (
    <section className="partners-canvas">
      <div className="container-xs">
        <div className="partners">
          <h2 className="wow fade-in-bottom delay-03s">Strategic Partners</h2>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="logos-carousel-canvas wow fade-in-top delay-03s">
            <OwlCarousel
              className="logos-carousel owl-carousel owl-theme"
              {...options}
            >
              {logos.map((item, idx) => (
                <div className="item" key={idx}>
                  <img className="owl-lazy" alt="" data-src={item} />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
