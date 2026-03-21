import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurEngagementModel = () => {
  const { t } = useTranslation()

  const models = [
    {
      title: t("home.engModel.techConsulting.title"),
      description: t("home.engModel.techConsulting.desc"),
    },
    {
      title: t("home.engModel.bot.title"),
      description: t("home.engModel.bot.desc"),
      featured: true,
    },
    {
      title: t("home.engModel.startupAccel.title"),
      description: t("home.engModel.startupAccel.desc"),
    },
  ]

  return (
    <section className="qk-engagement">
      <div className="container">
        <div className="qk-section-header qk-section-header--centered">
          <span className="qk-label">{t("home.engModel.subtitle")}</span>
          <h2>{t("home.engModel.title")}</h2>
        </div>

        <div className="qk-engagement__grid">
          {models.map((model, index) => (
            <div
              className={`qk-card ${model.featured ? "qk-card--featured" : ""}`}
              key={index}
            >
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEngagementModel
