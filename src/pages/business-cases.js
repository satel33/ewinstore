import * as React from "react"
import { graphql } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"

import Layout from "../components/layout"
import BusinessHero from "../components/business-case/hero"
import Achievements from "../components/achievements"
import Newsletter from "../components/newsletter"
import BusinessCasesLinks from "../components/business-case/cases-links"
import CategoryEntry from "../components/business-case/category-entry"

const BusinessCasePage = ({ data }) => {
  const categories = data.allPrismicCaseCategory.nodes
  const businessCases = data.allPrismicBusinessCase.nodes

  return (
    <Layout>
      <BusinessHero />
      <BusinessCasesLinks cases={categories} />

      {/*  BUSINESS CASES ENTRIES INTRO  */}
      <section className="bc-entries-intro-canvas">
        <div className="container">
          <div className="bc-entries-intro">
            <h2 className="wow fade-in-top delay-03s">
              Discover Our Business Cases
            </h2>
            <p className="wow fade-in-top delay-06s">
              Hanshow is now one of the global leading providers of digital
              retail solutions working with over half of the top 100 global
              retail companies and has solutions at over 30,000 stores in 50
              countries.
            </p>
            <span className="v-line wow fade-in-top delay-1s">&nbsp;</span>
          </div>
        </div>
      </section>

      {/*  SECTION NAV  */}
      <nav
        className="page-section-nav wow fade-in-bottom delay-1-4s"
        data-wow-offset="50"
      >
        <Controller globalSceneOptions={{ duration: "100%" }}>
          <ul>
            {categories.map((item, idx) => (
              <li key={idx}>
                <Scene triggerElement={`#${item.uid}`}>
                  <a href={`#${item.uid}`} id={`x-${idx + 1}`}>
                    {item.data.category}
                  </a>
                </Scene>
              </li>
            ))}
          </ul>
        </Controller>
      </nav>

      {categories.map((item, idx) => (
        <CategoryEntry
          categories={categories}
          categoryData={item}
          businessCases={businessCases}
          key={idx}
        />
      ))}

      <Newsletter />
      <Achievements />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPrismicCaseCategory {
      nodes {
        data {
          category
          cover_img {
            url
          }
          heading
          description
        }
        uid
      }
    }

    allPrismicBusinessCase {
      nodes {
        data {
          case_category {
            uid
          }
          case_image {
            url
          }
          heading
          summary
          date
          location
        }
        uid
      }
    }
  }
`

export default BusinessCasePage
