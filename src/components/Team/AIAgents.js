import React from "react"
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
    <section className="qk-ai-agents">
      <div className="container">
        <div className="qk-section-header qk-section-header--centered">
          <span className="qk-label">{t("team.aiAgents.subTitle")}</span>
          <h2>{t("team.aiAgents.title")}</h2>
          <p>{t("team.aiAgents.description")}</p>
        </div>

        <div className="qk-ai-agents__grid">
          {agents.map((agent, index) => (
            <div className="qk-card qk-card--ai" key={index}>
              <div className="qk-ai-agents__icon">
                <i className={agent.icon} />
              </div>
              <h3>{agent.name}</h3>
              <span className="qk-ai-agents__role">{agent.role}</span>
              <p>{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAgents
