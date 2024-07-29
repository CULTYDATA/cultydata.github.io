import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/tradding11.svg"

const caseStudyData = {
  client: "Carbonplace",
  location: "UK",
  technologies: ["-"],
  completedDate: "February 2023 - February 2024",
  website: { name: "Carbonplace.com", url: "https://carbonplace.com/" },
}

const CarbonplaceDetails = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="case-studies-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="case-studies-details-desc">
                <h3>{t("caseStudy.client")}</h3>
                <p>{t("caseStudy.description")}</p>
                <div className="content">
                  <h3>{t("caseStudy.keyAchievements")}</h3>
                  <ul>
                    <li>{t("caseStudy.achievement1")}</li>
                    <li>{t("caseStudy.achievement2")}</li>
                  </ul>
                </div>

                <div className="case-studies-details-image">
                  <img src={details1} alt={t("caseStudy.client")} />
                </div>

                <h3>{t("caseStudy.valueAddition")}</h3>
                <p>{t("caseStudy.valueDescription")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CaseStudiesSidebar {...caseStudyData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarbonplaceDetails
