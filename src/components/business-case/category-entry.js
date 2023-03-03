import { Link } from "gatsby"
import React from "react"
import { getCasesWithCategory } from "../../utils/helpers"
import { PinIcon } from "../../utils/imgImport"

const CategoryEntry = ({ categories, categoryData, businessCases }) => {
  return (
    <section className="bc-entry-canvas" id={categoryData.uid}>
      <div className="bc-entry">
        <div
          className="bc-hero grocery-bg"
          style={{
            background: `url(${categoryData.data.cover_img.url}) center center no-repeat`,
          }}
        >
          <div className="intro">
            <h3 className="wow fade-in-left delay-05s">
              Powerful performance, flexible deployment, improving store
              operational efficiency and driving digital transformation in
              supermarkets.
            </h3>
            <p className="wow fade-in-left delay-08s">
              Our labels are designed to be waterproof and dustproof, adapting
              to various temperatures. In addition, our ESLs enable price
              changes and promotion updates with excellent speed and accuracy,
              to increase sales and manage wastage.
            </p>
          </div>
          <div className="hero-bar wow swing-in-bottom-fwd delay-1-4s">
            <ul>
              {categories.map((item, idx) => (
                <li
                  key={idx}
                  className={item.uid === categoryData.uid ? "active" : ""}
                >
                  <a href={`#${item.uid}`}>{item.data.category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bc-benefits-canvas">
          <div className="big-head grocery-title wow fade-in-top delay-1s">
            <h1>{categoryData.data.category}</h1>
          </div>
          <div className="container">
            <div className="bc-benefits">
              <div className="intro">
                <span className="v-line wow fade-in-top delay-04s">&nbsp;</span>
              </div>
              <div className="benefits-list"></div>
            </div>
          </div>
        </div>

        <div className="bc-articles-canvas">
          <div className="container">
            <div className="bc-articles single-news-cat-section-loadmore-3">
              {getCasesWithCategory(businessCases, categoryData.uid).map(
                item => (
                  <article key={item.uid}>
                    <div className="article-location">
                      <img src={PinIcon} alt={item.data.location} />
                      {item.data.location}
                    </div>
                    <Link to={`/case/${item.uid}`} className="article-thumb">
                      <img
                        src={item.data.case_image.url}
                        alt={item.data.heading}
                      />
                    </Link>
                    <h3>
                      <Link to={`/case/${item.uid}`}>{item.data.heading}</Link>
                    </h3>
                    <p>{item.data.summary}</p>
                    <div className="others">
                      <span className="article-date">{item.data.date}</span>-
                      <a href={`#${categoryData.uid}`} className="article-cat">
                        {categoryData.data.category}
                      </a>
                    </div>
                  </article>
                )
              )}
            </div>
            <div className="single-cat-loadmore-section-3 pa-0 ma-0">
              <div className="loadmore-room">
                <button
                  className="button button-white bordered single-news-cat-loadmore single-news-cat-3"
                  data-offset="4"
                  data-catid="3"
                >
                  Load More ⟶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryEntry
