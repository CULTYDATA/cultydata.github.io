import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const MainBanner = () => {
  const { t } = useTranslation()

  return (
    <div className="hero-minimal">
      <div className="container">
        <div className="hero-minimal-content">
          <h1>{t("home.mainBanner.title")}</h1>
          <p>{t("home.mainBanner.subtitle")}</p>
          <Link to="/contact" className="default-btn">
            <i className="flaticon-right"></i>
            {t("home.button.contact")} <span></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
