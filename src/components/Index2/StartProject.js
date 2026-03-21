import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const StartProject = () => {
  const { t } = useTranslation()

  return (
    <section className="qk-cta">
      <div className="qk-cta__circle-decor" aria-hidden="true" />
      <div className="container">
        <div className="qk-cta__content">
          <span className="qk-label">{t("startProject.label")}</span>
          <h2>{t("startProject.title")}</h2>
          <p>{t("startProject.description")}</p>
          <Link to="/contact" className="qk-btn qk-btn--cta">
            {t("startProject.button")}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StartProject
