import React from "react"
import starIcon from "../../images/shape/icon.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurApproach = () => {
  const { t } = useTranslation()

  const items = [
    {
      icon: "bx bx-group",
      title: t("approach.human.title"),
      desc: t("approach.human.desc"),
    },
    {
      icon: "bx bx-bot",
      title: t("approach.ai.title"),
      desc: t("approach.ai.desc"),
    },
    {
      icon: "bx bx-rocket",
      title: t("approach.org.title"),
      desc: t("approach.org.desc"),
    },
  ]

  return (
    <section className="services-area ptb-50 bg-f1f8fb">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            <img src={starIcon} alt="approach" />
            {t("approach.subTitle")}
          </span>
          <h2>{t("approach.title")}</h2>
          <p>{t("approach.description")}</p>
        </div>

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="single-process-box">
                <div className="icon">
                  <i
                    className={item.icon}
                    style={{ fontSize: "48px", color: "#35796a" }}
                  ></i>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
