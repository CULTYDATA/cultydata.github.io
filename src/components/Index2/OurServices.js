import React from "react"
import { Link } from "gatsby"
import serviceIcon1 from "../../images/services/blockchain1.svg"
import serviceIcon2 from "../../images/services/fullstack1.svg"
import serviceIcon3 from "../../images/services/datascience1.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurServices = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: serviceIcon1,
      title: t("home.services.svc.1.title"),
      text: t("home.services.svc.1.txt"),
      link: "/services/blockchain-solutions-development",
    },
    {
      icon: serviceIcon2,
      title: t("home.services.svc.2.title"),
      text: t("home.services.svc.2.txt"),
      link: "/services/fullstack-platform-development",
    },
    {
      icon: serviceIcon3,
      title: t("home.services.svc.3.title"),
      text: t("home.services.svc.3.txt"),
      link: "/services/datascience-and-ml-consulting",
    },
    {
      icon: null,
      title: t("home.services.svc.4.title"),
      text: t("home.services.svc.4.txt"),
      link: "/services/comprehensive-support",
    },
  ]

  return (
    <section className="qk-services">
      <div className="container">
        <div className="qk-section-header">
          <span className="qk-label">{t("home.services.subTitle")}</span>
          <h2>{t("home.services.title")}</h2>
        </div>

        <div className="qk-services__list">
          {services.map((service, index) => (
            <Link
              to={service.link}
              className="qk-service-row"
              key={index}
            >
              <div className="qk-service-row__number">
                <span className="qk-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              {service.icon && (
                <div className="qk-service-row__icon">
                  <img src={service.icon} alt={service.title} />
                </div>
              )}
              {!service.icon && (
                <div className="qk-service-row__icon qk-service-row__icon--ai">
                  <i className="bx bx-bot" />
                </div>
              )}
              <div className="qk-service-row__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="qk-service-row__arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
