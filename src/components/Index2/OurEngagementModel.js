import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurEngagementModel = () => {
  const { t } = useTranslation()

  const models = [
    {
      icon: "bx bx-conversation",
      title: t("home.engModel.techConsulting.title"),
      description: t("home.engModel.techConsulting.desc"),
    },
    {
      icon: "bx bx-transfer",
      title: t("home.engModel.bot.title"),
      description: t("home.engModel.bot.desc"),
    },
    {
      icon: "bx bx-rocket",
      title: t("home.engModel.startupAccel.title"),
      description: t("home.engModel.startupAccel.desc"),
    },
  ]

  return (
    <section className="engagement-minimal">
      <div className="container">
        <div className="engagement-minimal-header">
          <h2>{t("home.engModel.title")}</h2>
        </div>

        <div className="row justify-content-center">
          {models.map((model, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="engagement-card">
                <i
                  className={model.icon}
                  style={{ fontSize: "36px", color: "#37786a" }}
                ></i>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEngagementModel
