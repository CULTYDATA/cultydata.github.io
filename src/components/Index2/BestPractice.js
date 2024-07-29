import React, { useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import serviceIcon1 from "../../images/services/core-service-1.png"
import serviceIcon1Hover from "../../images/services/core-service-1-hover.png"
import serviceIcon2 from "../../images/services/core-service-2.png"
import serviceIcon2Hover from "../../images/services/core-service-2-hover.png"
import serviceIcon3 from "../../images/services/core-service-3.png"
import serviceIcon3Hover from "../../images/services/core-service-3-hover.png"
import serviceIcon4 from "../../images/services/core-service-4.png"
import serviceIcon4Hover from "../../images/services/core-service-4-hover.png"
import starIcon from "../../images/shape/icon.svg"

const BestPractice = () => {
  const { t } = useTranslation()
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const handleMouseEnter = iconName => {
    setHoveredIcon(iconName)
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  const services = [
    {
      img: serviceIcon1,
      hoverImg: serviceIcon1Hover,
      title: t("home.bestPractice.svc1.title"),
      desc1: t("home.bestPractice.svc1.desc1"),
      desc2: t("home.bestPractice.svc1.desc2"),
    },
    {
      img: serviceIcon2,
      hoverImg: serviceIcon2Hover,
      title: t("home.bestPractice.svc2.title"),
      desc1: t("home.bestPractice.svc2.desc1"),
      desc2: t("home.bestPractice.svc2.desc2"),
    },
    {
      img: serviceIcon3,
      hoverImg: serviceIcon3Hover,
      title: t("home.bestPractice.svc3.title"),
      desc1: t("home.bestPractice.svc3.desc1"),
      desc2: t("home.bestPractice.svc3.desc2"),
    },
    {
      img: serviceIcon4,
      hoverImg: serviceIcon4Hover,
      title: t("home.bestPractice.svc4.title"),
      desc1: t("home.bestPractice.svc4.desc1"),
      desc2: t("home.bestPractice.svc4.desc2"),
    },
    {
      img: serviceIcon4,
      hoverImg: serviceIcon4Hover,
      title: t("home.bestPractice.svc5.title"),
      desc1: t("home.bestPractice.svc5.desc1"),
      desc2: t("home.bestPractice.svc5.desc2"),
    },
  ]

  return (
    <section className="services-area ptb-50">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            <img src={starIcon} alt="banner" />
            {t("home.bestPractice.subtitle")}
          </span>
          <h2>{t("home.bestPractice.title")}</h2>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <button
                className="single-process-box"
                onMouseEnter={() => handleMouseEnter(`svc${index + 1}`)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img
                    src={
                      hoveredIcon === `svc${index + 1}`
                        ? service.hoverImg
                        : service.img
                    }
                    alt="services"
                    className="service-icon"
                  />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <ul>
                    <li>{service.desc1}</li>
                    <li>{service.desc2}</li>
                  </ul>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestPractice
