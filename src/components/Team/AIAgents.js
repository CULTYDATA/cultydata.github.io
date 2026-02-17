import React from "react"
import starIcon from "../../images/shape/icon.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AIAgents = () => {
  const { t } = useTranslation()

  const agents = [
    {
      icon: "bx bx-code-alt",
      name: t("team.aiAgents.dev.name"),
      role: t("team.aiAgents.dev.role"),
      desc: t("team.aiAgents.dev.desc"),
    },
    {
      icon: "bx bx-check-shield",
      name: t("team.aiAgents.qa.name"),
      role: t("team.aiAgents.qa.role"),
      desc: t("team.aiAgents.qa.desc"),
    },
    {
      icon: "bx bx-server",
      name: t("team.aiAgents.devsecops.name"),
      role: t("team.aiAgents.devsecops.role"),
      desc: t("team.aiAgents.devsecops.desc"),
    },
    {
      icon: "bx bx-bar-chart-alt-2",
      name: t("team.aiAgents.data.name"),
      role: t("team.aiAgents.data.role"),
      desc: t("team.aiAgents.data.desc"),
    },
  ]

  return (
    <section className="services-area ptb-50">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            <img src={starIcon} alt="ai agents" />
            {t("team.aiAgents.subTitle")}
          </span>
          <h2>{t("team.aiAgents.title")}</h2>
          <p>{t("team.aiAgents.description")}</p>
        </div>

        <div className="row justify-content-center">
          {agents.map((agent, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div
                className="single-process-box"
                style={{
                  textAlign: "center",
                  borderColor: "#35796a",
                  borderStyle: "dashed",
                }}
              >
                <div style={{ marginBottom: "15px" }}>
                  <i
                    className={agent.icon}
                    style={{ fontSize: "52px", color: "#35796a" }}
                  ></i>
                </div>
                <h3 style={{ fontSize: "20px" }}>{agent.name}</h3>
                <span
                  style={{
                    display: "block",
                    color: "#35796a",
                    fontWeight: "600",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {agent.role}
                </span>
                <p style={{ fontSize: "14px" }}>{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAgents
