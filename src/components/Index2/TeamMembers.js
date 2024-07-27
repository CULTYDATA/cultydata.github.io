import React from "react"
import starIcon from "../../images/shape/icon.svg"
import team1 from "../../images/team/team5.jpg"
import team2 from "../../images/team/team6.jpg"
import team3 from "../../images/team/team7.jpg"
import team4 from "../../images/team/team7.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamMembers = () => {
  const { t } = useTranslation()

  return (
    <section className="scientist-area ptb-50">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            {t("teamMembers.subTitle")}
          </span>
          <h2>{t("teamMembers.title")}</h2>
          <p>{t("teamMembers.description")}</p>
        </div>

        <div className="row">
          {/* Team member 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team1} alt={t("teamMembers.member1.name")} />

                <div className="hover-content">
                  <p className="hover-description">
                    {t("teamMembers.member1.description")}
                  </p>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>{t("teamMembers.member1.name")}</h3>
                <span>{t("teamMembers.member1.position")}</span>
              </div>
            </div>
          </div>

          {/* Team member 2 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team2} alt={t("teamMembers.member2.name")} />

                <div className="hover-content">
                  <p className="hover-description">
                    {t("teamMembers.member2.description")}
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>{t("teamMembers.member2.name")}</h3>
                <span>{t("teamMembers.member2.position")}</span>
              </div>
            </div>
          </div>

          {/* Team member 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team3} alt={t("teamMembers.member3.name")} />

                <div className="hover-content">
                  <p className="hover-description">
                    {t("teamMembers.member3.description")}
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>{t("teamMembers.member3.name")}</h3>
                <span>{t("teamMembers.member3.position")}</span>
              </div>
            </div>
          </div>

          {/* Team member 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team4} alt={t("teamMembers.member4.name")} />

                <div className="hover-content">
                  <p className="hover-description">
                    {t("teamMembers.member4.description")}
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>{t("teamMembers.member4.name")}</h3>
                <span>{t("teamMembers.member4.position")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
