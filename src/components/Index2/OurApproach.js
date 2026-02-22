import React from "react"
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
    <section className="approach-minimal">
      <div className="container">
        <div className="approach-minimal-header">
          <h2>{t("approach.title")}</h2>
          <p>{t("approach.description")}</p>
        </div>

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="approach-card">
                <i
                  className={item.icon}
                  style={{ fontSize: "40px", color: "#37786a" }}
                ></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
