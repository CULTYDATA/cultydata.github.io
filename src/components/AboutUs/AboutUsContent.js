import React from "react"
import aboutImage from "../../images/about/about-us3.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutUsContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="about-area ptb-50">
        <div className="container-fluid">
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={aboutImage} alt="features" width="80%" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>{t("aboutUs.title")}</h2>
                <p>{t("aboutUs.description")}</p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature1")}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature2")}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature3")}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature4")}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature5")}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> {t("aboutUs.feature6")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsContent
