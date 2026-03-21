import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { NetworkDiagram } from "../DesignSystem/MathIllustrations"

const MainBanner = () => {
  const { t } = useTranslation()

  return (
    <section className="qk-hero">
      <div className="qk-hero__circle-decor" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="qk-hero__content">
              <span className="qk-label">{t("home.mainBanner.label")}</span>
              <h1>
                {t("home.mainBanner.title")}
                <span className="qk-hero__title-fade">
                  {" "}{t("home.mainBanner.titleFade")}
                </span>
              </h1>
              <p>{t("home.mainBanner.subtitle")}</p>
              <div className="qk-hero__actions">
                <Link to="/contact" className="qk-btn qk-btn--primary">
                  {t("home.button.contact")}
                </Link>
                <Link to="/case-studies" className="qk-btn qk-btn--outline">
                  {t("home.button.viewCases")} →
                </Link>
              </div>
              <div className="qk-hero__proof">
                <div className="qk-hero__proof-item">
                  <strong>{t("home.aboutUs.txt.4")}</strong>
                  <span>{t("home.aboutUs.txt.5")}</span>
                </div>
                <div className="qk-hero__proof-divider" />
                <div className="qk-hero__proof-item">
                  <strong>{t("home.aboutUs.txt.6")}</strong>
                  <span>{t("home.aboutUs.txt.7")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="qk-hero__visual">
              <NetworkDiagram width={380} height={380} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
