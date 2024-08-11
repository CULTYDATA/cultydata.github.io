import React from "react"
import { Link } from "gatsby"
import start1 from "../../images/bannerlast.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const StartProject = () => {
  const { t } = useTranslation()

  return (
    <section className="project-start-area ptb-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <img src={start1} alt="banner" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="project-start-content">
              <h2>{t("startProject.title")}</h2>
              <p>{t("startProject.description")}</p>
              <Link to="/contact" className="default-btn">
                <i className="flaticon-web"></i> {t("startProject.button")}
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartProject
