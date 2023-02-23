import React from "react"
import { BusinessCasesHero } from "../../utils/imgImport"

const BusinessHero = () => {
  return (
    <section className="page-hero-canvas">
      <div className="page-hero">
        <div className="intro">
          <h1 className="wow fade-in-left delay-05s">Business Cases</h1>
          <p className="wow fade-in-left delay-08s">
            Discover our latest business cases of digital retail solutions in
            various retail settings
          </p>
        </div>
        <img src={BusinessCasesHero} alt="" />
      </div>
    </section>
  )
}

export default BusinessHero
