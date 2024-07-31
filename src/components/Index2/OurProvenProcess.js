import React from "react"
import starIcon from "../../images/shape/icon.svg"
import process1 from "../../images/history/planning.jpg"
import process2 from "../../images/history/agile-development.jpg"
import process3 from "../../images/history/team-organisation.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const OurProvenProcess = () => {
  const { t } = useTranslation()

  return (
    <div className="history-area ptb-40">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="about" />
            {t("provenProcess.subTitle")}
          </span>
          <h2>{t("provenProcess.title")}</h2>
        </div>

        <ol className="timeline history-timeline history-timeline-style-two">
          <li className="timeline-block">
            <div className="timeline-icon">
              <span className="number-badge">1</span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <img src={process1} alt="about" width="95%" />
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{t("provenProcess.step1.title")}</h3>
                    <p>{t("provenProcess.step1.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-date"></div>

            <div className="timeline-icon">
              <span className="number-badge">2</span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <img src={process2} alt="about" width="95%" />
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{t("provenProcess.step2.title")}</h3>
                    <p>{t("provenProcess.step2.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="timeline-block">
            <div className="timeline-icon">
              <span className="number-badge">3</span>
            </div>

            <div className="timeline-content">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="image">
                    <img src={process3} alt="about" width="95%" />
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{t("provenProcess.step3.title")}</h3>
                    <p>{t("provenProcess.step3.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default OurProvenProcess
