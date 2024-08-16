import React from "react"
import starIcon from "../../images/shape/icon.svg"
import team1 from "../../images/team/mo.png"
import team2 from "../../images/team/dawood.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamSectionTwo = () => {
  const { t } = useTranslation()

  return (
    <section className="scientist-area">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            {t("team.partners.subTitle")}
          </span>
          <h2>{t("team.partners.title")}</h2>
        </div>

        <div className="row justify-content-center">
          {/* Team member 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team1} alt={t("team.partners.member1.name")} />

                <ul className="social">
                  <li>
                    <a
                      href={t("team.partners.member1.socialLink")}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>{t("team.partners.member1.name")}</h3>
                <span>{t("team.partners.member1.description")}</span>
                <br />
                <span>{t("team.partners.member1.position")}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team2} alt={t("team.partners.member2.name")} />

                <ul className="social">
                  <li>
                    <a
                      href={t("team.partners.member2.socialLink")}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>{t("team.partners.member2.name")}</h3>
                <span>{t("team.partners.member2.description")}</span>
                <br />
                <span>{t("team.partners.member2.position")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSectionTwo
