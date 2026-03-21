import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const WhyChooseUs = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: "bx bx-run",
      title: t("whyChooseUs.feature1.title"),
      description: t("whyChooseUs.feature1.description"),
    },
    {
      icon: "bx bx-code-block",
      title: t("whyChooseUs.feature2.title"),
      description: t("whyChooseUs.feature2.description"),
    },
    {
      icon: "bx bx-target-lock",
      title: t("whyChooseUs.feature3.title"),
      description: t("whyChooseUs.feature3.description"),
    },
  ]

  return (
    <section className="qk-why-us">
      <div className="container">
        <div className="qk-section-header qk-section-header--centered">
          <h2>{t("whyChooseUs.title")}</h2>
        </div>

        <div className="qk-why-us__grid">
          {features.map((feature, index) => (
            <div className="qk-card" key={index}>
              <span className="qk-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <i className={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
