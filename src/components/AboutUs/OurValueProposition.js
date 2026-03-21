import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurValueProposition = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: "bx bx-user-check",
      title: t("ourValueProposition.feature1.title"),
      description: t("ourValueProposition.feature1.description"),
    },
    {
      icon: "bx bx-bot",
      title: t("ourValueProposition.feature2.title"),
      description: t("ourValueProposition.feature2.description"),
    },
    {
      icon: "bx bx-layer",
      title: t("ourValueProposition.feature3.title"),
      description: t("ourValueProposition.feature3.description"),
    },
    {
      icon: "bx bx-dollar-circle",
      title: t("ourValueProposition.feature4.title"),
      description: t("ourValueProposition.feature4.description"),
    },
    {
      icon: "bx bx-transfer",
      title: t("ourValueProposition.feature5.title"),
      description: t("ourValueProposition.feature5.description"),
    },
  ]

  return (
    <section className="qk-value-prop">
      <div className="container">
        <div className="qk-section-header qk-section-header--centered">
          <h2>{t("ourValueProposition.title")}</h2>
        </div>

        <div className="qk-value-prop__grid">
          {features.map((feature, index) => (
            <div className="qk-card" key={index}>
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

export default OurValueProposition
