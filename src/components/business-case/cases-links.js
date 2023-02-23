import React from "react"

const CaseLink = ({ col, categoryCase }) => (
  <div className={`${col === 2 ? "col-md-6" : "col-md-4"} bc-link`}>
    <div className="link-image-room wow fade-in-bottom delay-05s">
      <img src={categoryCase.data.cover_img.url} alt="Grocery" />
    </div>
    <div className="excerpt-room">
      <span className="v-line">&nbsp;</span>
      <div className="excerpt">
        <h3>{categoryCase.data.category}</h3>
        <p>{categoryCase.data.heading}</p>
        <a
          href={`#${categoryCase.uid}`}
          className="button button-white bordered"
        >
          Learn More ⟶
        </a>
      </div>
    </div>
  </div>
)

const BusinessCasesLinks = ({ cases }) => {
  return (
    <section className="bc-links-canvas">
      <div className="container">
        <div className="bc-links">
          <div className="row bc-links-row first-row">
            <CaseLink col={2} categoryCase={cases[0]} />
            <CaseLink col={2} categoryCase={cases[1]} />
          </div>
          <div className="row bc-links-row suc-row">
            <CaseLink col={3} categoryCase={cases[2]} />
            <CaseLink col={3} categoryCase={cases[3]} />
            <CaseLink col={3} categoryCase={cases[4]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessCasesLinks
