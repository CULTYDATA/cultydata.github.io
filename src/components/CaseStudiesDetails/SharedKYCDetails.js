import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/kyc11.svg"

const caseStudyData = {
  client: "BP2S/Consensys",
  location: "Australia",
  technologies: ["-"],
  completedDate: "April 2018 - February 2019",
  website: { name: "-", url: "/" },
}

const SharedKYCDetails = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="case-studies-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="case-studies-details-desc">
                <h3>{t("caseStudy.sharedKYC.title")}</h3>
                <p>{t("caseStudy.sharedKYC.description")}</p>
                <div className="content">
                  <h3>{t("caseStudy.sharedKYC.keyAchievements")}</h3>
                  <ul>
                    <li>{t("caseStudy.sharedKYC.achievement1")}</li>
                  </ul>
                </div>

                <div className="case-studies-details-image">
                  <img src={details1} alt={t("caseStudy.sharedKYC.title")} />
                </div>

                <h3>{t("caseStudy.sharedKYC.valueAddition")}</h3>
                <p>{t("caseStudy.sharedKYC.valueDescription")}</p>
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

export default SharedKYCDetails
