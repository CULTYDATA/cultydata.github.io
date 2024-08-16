import React from "react"
import starIcon from "../../images/shape/icon.svg"
import team1 from "../../images/team/mohamed.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamSectionOne = () => {
  const { t } = useTranslation()

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            {t("team.ceo.subTitle")}
          </span>
        </div>
        <div className="team-member-card">
          <div className="image-container ">
            <div className="image">
              <img src={team1} alt="CEO" />
              <ul className="social">
                <li>
                  <a
                    href={t("team.ceo.socialLink")}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-container">
            <h3 className="bold-text-green">{t("team.ceo.name")}</h3>
            <p className="position">{t("team.ceo.position")}</p>
            <p className="description">{t("team.ceo.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSectionOne
