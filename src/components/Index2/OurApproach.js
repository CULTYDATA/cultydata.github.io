import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurApproach = () => {
  const { t } = useTranslation()

  const items = [
    {
      icon: "bx bx-group",
      title: t("approach.human.title"),
      desc: t("approach.human.desc"),
      type: "human",
    },
    {
      icon: "bx bx-bot",
      title: t("approach.ai.title"),
      desc: t("approach.ai.desc"),
      type: "ai",
    },
    {
      icon: "bx bx-rocket",
      title: t("approach.org.title"),
      desc: t("approach.org.desc"),
      type: "human",
    },
  ]

  return (
    <section className="qk-approach">
      <div className="container">
        <div className="qk-section-header">
          <span className="qk-label">{t("approach.subTitle")}</span>
          <h2>{t("approach.title")}</h2>
          <p>{t("approach.description")}</p>
        </div>

        <div className="qk-approach__grid">
          {items.map((item, index) => (
            <div
              className={`qk-card ${item.type === "ai" ? "qk-card--ai" : ""}`}
              key={index}
            >
              <span className="qk-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <i className={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
