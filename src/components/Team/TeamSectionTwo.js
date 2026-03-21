import React from "react"
import team1 from "../../images/team/mo.png"
import team2 from "../../images/team/dawood.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamSectionTwo = () => {
  const { t } = useTranslation()

  const partners = [
    {
      img: team1,
      name: t("team.partners.member1.name"),
      position: t("team.partners.member1.position"),
      company: t("team.partners.member1.description"),
      link: t("team.partners.member1.socialLink"),
    },
    {
      img: team2,
      name: t("team.partners.member2.name"),
      position: t("team.partners.member2.position"),
      company: t("team.partners.member2.description"),
      link: t("team.partners.member2.socialLink"),
    },
  ]

  return (
    <section className="qk-team-partners">
      <div className="container">
        <div className="qk-section-header">
          <span className="qk-label">{t("team.partners.subTitle")}</span>
          <h2>{t("team.partners.title")}</h2>
        </div>

        <div className="qk-team-partners__grid">
          {partners.map((partner, index) => (
            <div className="qk-team-card" key={index}>
              <div className="qk-team-card__image">
                <img src={partner.img} alt={partner.name} />
                <a
                  href={partner.link}
                  className="qk-team-card__linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className="qk-team-card__info">
                <h3>{partner.name}</h3>
                <span>{partner.company}</span>
                <span>{partner.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSectionTwo
