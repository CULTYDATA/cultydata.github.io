import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const CaseStudiesSidebar = ({
  client,
  location,
  technologies,
  completedDate,
  website,
}) => {
  const { t } = useTranslation()

  return (
    <div className="case-studies-sidebar-sticky">
      <div className="case-studies-details-info">
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-user-pin"></i>
            </div>
            <span>{t("caseStudies.client")}</span>
            {client}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-map"></i>
            </div>
            <span>{t("caseStudies.location")}</span>
            {location}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-purchase-tag"></i>
            </div>
            <span>{t("caseStudies.technologies")}</span>
            {technologies.join(", ")}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-check"></i>
            </div>
            <span>{t("caseStudies.completed")}</span>
            {completedDate}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-globe"></i>
            </div>
            <span>{t("caseStudies.website")}</span>
            <a href={website.url} target="_blank" rel="noreferrer">
              {website.name}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudiesSidebar
