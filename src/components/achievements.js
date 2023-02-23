import * as React from "react"
import loadable from "@loadable/component"
import {
  ClientsIcon,
  CountriesIcon,
  EeslIcon,
  StoresIcon,
} from "../utils/imgImport"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const Achievements = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  }

  const data = [
    {
      icon: CountriesIcon,
      value: "50+",
      label: "Countries",
    },
    {
      icon: ClientsIcon,
      value: "550+",
      label: "Clients",
    },
    {
      icon: StoresIcon,
      value: "30,000+",
      label: "Stores Digitalized",
    },
    {
      icon: EeslIcon,
      value: "100 million",
      label: "ESL's Installed",
    },
  ]
  return (
    <section className="achievements-data-canvas">
      <div className="achievements-data">
        <div className="section-line-title wow fade-in-bottom">
          <h3>You're in good hands</h3>
          <span className="line">&nbsp;</span>
        </div>
        <div className="ad-carousel-canvas wow fade-in delay-05s">
          <OwlCarousel
            className="achievements-carousel owl-carousel owl-theme"
            {...options}
          >
            {data.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="ad">
                  <img src={item.icon} alt="" />
                  <h5>{item.value}</h5>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default Achievements
