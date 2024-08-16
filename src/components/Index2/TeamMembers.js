import React from "react"
import starIcon from "../../images/shape/icon.svg"
import team1 from "../../images/team/Mohamed-Alaoui-photo-buste.jpg"

import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamMembers = () => {
  const { t } = useTranslation()

  return (
    <section className="scientist-area">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            {t("team.subTitle")}
          </span>
          <h2>{t("team.title")}</h2>
          <p>{t("team.description")}</p>
        </div>

        <div className="row">
          {/* Team member 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team1} alt={t("team.member1.name")} />

                <div className="hover-content">
                  <span className="hover-description">
                    {t("team.member1.description")}
                  </span>

                  <a
                    href="https://www.linkedin.com/in/mohamed-alaoui-simon/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{t("team.member1.name")}</h3>
                <span>{t("team.member1.position")}</span>
              </div>
            </div>
          </div>

          {/* Team member 2 
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team2} alt={t("team.member2.name")} />

                <div className="hover-content">
                  <span className="hover-description">
                    {t("team.member2.description")}
                  </span>

                  <a
                    href="https://www.linkedin.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{t("team.member2.name")}</h3>
                <span>{t("team.member2.position")}</span>
              </div>
            </div>
          </div>*/}

          {/* Team member 3 
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team3} alt={t("team.member3.name")} />

                <div className="hover-content">
                  <span className="hover-description">
                    {t("team.member3.description")}
                  </span>

                  <a
                    href="https://www.linkedin.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{t("team.member3.name")}</h3>
                <span>{t("team.member3.position")}</span>
              </div>
            </div>
          </div>*/}

          {/* Team member 4
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team4} alt={t("team.member4.name")} />

                <div className="hover-content">
                  <span className="hover-description">
                    {t("team.member4.description")}
                  </span>

                  <a
                    href="https://www.linkedin.com/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>{t("team.member4.name")}</h3>
                <span>{t("team.member4.position")}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
