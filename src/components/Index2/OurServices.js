import React from "react"
import { Link } from "gatsby"
import serviceIcon1 from "../../images/services/blockchain-icon.png"
import serviceIcon2 from "../../images/services/datascience-icon.png"
import serviceIcon3 from "../../images/services/fullstack-icon.png"
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
  ]

  return (
    <section className="services-minimal">
      <div className="container">
        <div className="services-minimal-header">
          <h2>{t("home.services.title")}</h2>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <Link to={service.link} className="service-card">
                <div className="service-card-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
