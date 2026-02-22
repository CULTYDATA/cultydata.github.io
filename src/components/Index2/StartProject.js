import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const StartProject = () => {
  const { t } = useTranslation()

  return (
    <section className="cta-minimal">
      <div className="container">
        <div className="cta-minimal-content">
          <h2>{t("startProject.title")}</h2>
          <p>{t("startProject.description")}</p>
          <Link to="/contact" className="default-btn">
            <i className="flaticon-web"></i> {t("startProject.button")}
            <span></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StartProject
