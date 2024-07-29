import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/datascience1.svg"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const DataScienceandMLConsulting = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h3>{t("service.dsml.offer")}</h3>
                <p>{t("service.dsml.offer.desc")}</p>

                <h3>{t("service.dsml.domain")}</h3>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-money"></i>
                      </div>
                      {t("service.dsml.domain.finance")}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-order"></i>
                      </div>
                      {t("service.dsml.domain.retail")}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-hospital"></i>
                      </div>
                      {t("service.dsml.domain.healthcare")}
                    </div>
                  </div>
                </div>
                <div className="services-details-image">
                  <img src={details1} alt={t("service.dsml.title")} />
                  <span className="sub-title padding-top">
                    {t("service.dsml.title")}
                  </span>
                </div>

                <h3>{t("service.dsml.useCases")}</h3>
                <ul className="features">
                  <li>
                    <span>{t("service.dsml.useCase1")}</span>
                  </li>
                  <li>
                    <span>{t("service.dsml.useCase2")}</span>
                  </li>
                </ul>

                <h3>{t("service.dsml.support")}</h3>
                <p>
                  {t("service.dsml.support.desc")}
                  <Link
                    to="/services/comprehensive-support"
                    className="learn-more-btn"
                  >
                    <i className="flaticon-right"></i>
                    {t("home.button.learnMore")}
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DataScienceandMLConsulting
