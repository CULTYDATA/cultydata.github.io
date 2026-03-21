import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { EllipticCurve } from "../DesignSystem/MathIllustrations"

const AboutUsContent = () => {
  const { t } = useTranslation()

  return (
    <section className="qk-about">
      <div className="container">
        <div className="qk-about__grid">
          <div className="qk-about__visual">
            <EllipticCurve width={320} height={320} />
          </div>
          <div className="qk-about__content">
            <h2>{t("aboutUs.title")}</h2>
            <p>{t("aboutUs.description")}</p>
            <ul className="qk-about__features">
              <li><i className="bx bx-check" /> {t("aboutUs.feature1")}</li>
              <li><i className="bx bx-check" /> {t("aboutUs.feature2")}</li>
              <li><i className="bx bx-check" /> {t("aboutUs.feature3")}</li>
              <li><i className="bx bx-check" /> {t("aboutUs.feature4")}</li>
              <li><i className="bx bx-check" /> {t("aboutUs.feature5")}</li>
              <li><i className="bx bx-check" /> {t("aboutUs.feature6")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsContent
