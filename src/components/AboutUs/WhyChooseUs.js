import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import serviceIcon1 from "../../images/services/comp.png"
import serviceIcon2 from "../../images/services/exp.png"
import serviceIcon3 from "../../images/services/adapt.png"

const WhyChooseUs = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{t("whyChooseUs.title")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <img
                    src={serviceIcon1}
                    alt={t("whyChooseUs.feature1.alt")}
                    width="80%"
                  />
                </div>
                <h3>{t("whyChooseUs.feature1.title")}</h3>
                <p>{t("whyChooseUs.feature1.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <img
                    src={serviceIcon2}
                    alt={t("whyChooseUs.feature2.alt")}
                    width="80%"
                  />
                </div>
                <h3>{t("whyChooseUs.feature2.title")}</h3>
                <p>{t("whyChooseUs.feature2.description")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-featured-services-box">
                <div className="icon">
                  <img
                    src={serviceIcon3}
                    alt={t("whyChooseUs.feature3.alt")}
                    width="90%"
                  />
                </div>
                <h3>{t("whyChooseUs.feature3.title")}</h3>
                <p>{t("whyChooseUs.feature3.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
