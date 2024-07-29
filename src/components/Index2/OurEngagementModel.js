import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import starIcon from "../../images/shape/icon.svg"
import serviceIcon1 from "../../images/services/technical.svg"
import serviceIcon2 from "../../images/services/startup.svg"
import serviceIcon3 from "../../images/services/hand-over-icon.png"

const OurEngagementModel = () => {
  const { t } = useTranslation()

  const services = [
    {
      img: serviceIcon1,
      title: t("home.engModel.techConsulting.title"),
      description: t("home.engModel.techConsulting.desc"),
    },
    {
      img: serviceIcon2,
      title: t("home.engModel.bot.title"),
      description: t("home.engModel.bot.desc"),
    },
    {
      img: serviceIcon3,
      title: t("home.engModel.startupAccel.title"),
      description: t("home.engModel.startupAccel.desc"),
    },
  ]

  return (
    <section className="solutions-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="icon" />
            {t("home.engModel.subtitle")}
          </span>
          <h2>{t("home.engModel.title")}</h2>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="single-featured-services-box">
                <div className="icon">
                  <img src={service.img} alt={service.title} width="80%" />
                </div>
                <h3>{service.title}</h3>
                <div className="content">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEngagementModel
