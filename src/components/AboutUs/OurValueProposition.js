import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import serviceIcon1 from "../../images/services/prop1.png"
import serviceIcon2 from "../../images/services/prop2.png"
import serviceIcon3 from "../../images/services/prop3.png"
import serviceIcon4 from "../../images/services/prop4.png"
import serviceIcon5 from "../../images/services/prop5.png"

const OurValueProposition = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t("ourValueProposition.title")}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img
                    src={serviceIcon1}
                    alt={t("ourValueProposition.feature1.alt")}
                    width="20%"
                  />
                </div>
                <h3>{t("ourValueProposition.feature1.title")}</h3>
                <p>{t("ourValueProposition.feature1.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img
                    src={serviceIcon2}
                    alt={t("ourValueProposition.feature2.alt")}
                    width="20%"
                  />
                </div>
                <h3>{t("ourValueProposition.feature2.title")}</h3>
                <p>{t("ourValueProposition.feature2.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img
                    src={serviceIcon3}
                    alt={t("ourValueProposition.feature3.alt")}
                    width="20%"
                  />
                </div>
                <h3>{t("ourValueProposition.feature3.title")}</h3>
                <p>{t("ourValueProposition.feature3.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img
                    src={serviceIcon4}
                    alt={t("ourValueProposition.feature4.alt")}
                    width="20%"
                  />
                </div>
                <h3>{t("ourValueProposition.feature4.title")}</h3>
                <p>{t("ourValueProposition.feature4.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img
                    src={serviceIcon5}
                    alt={t("ourValueProposition.feature5.alt")}
                    width="20%"
                  />
                </div>
                <h3>{t("ourValueProposition.feature5.title")}</h3>
                <p>{t("ourValueProposition.feature5.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurValueProposition
