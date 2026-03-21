import React from "react"
import team1 from "../../images/team/mohamed.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamSectionOne = () => {
  const { t } = useTranslation()

  return (
    <section className="qk-team-ceo">
      <div className="container">
        <div className="qk-section-header">
          <span className="qk-label">{t("team.ceo.subTitle")}</span>
        </div>
        <div className="qk-team-ceo__card">
          <div className="qk-team-ceo__image">
            <img src={team1} alt={t("team.ceo.name")} />
            <a
              href={t("team.ceo.socialLink")}
              className="qk-team-ceo__linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="qk-team-ceo__info">
            <h3>{t("team.ceo.name")}</h3>
            <span className="qk-team-ceo__position">{t("team.ceo.position")}</span>
            <p>{t("team.ceo.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSectionOne
