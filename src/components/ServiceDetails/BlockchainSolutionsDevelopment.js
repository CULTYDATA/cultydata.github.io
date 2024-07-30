import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/blockchain1.svg"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const BlockchainSolutionsDevelopment = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h3>{t("service.bcsd.service")}</h3>
                <p>{t("service.bcsd.service.desc")}</p>

                <h3>{t("service.bcsd.domain")}</h3>

                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-analytics"></i>
                      </div>
                      {t("service.bcsd.domain.finance")}
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-share"></i>
                      </div>
                      {t("service.bcsd.domain.supplyChain")}
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-earth-day"></i>
                      </div>
                      {t("service.bcsd.domain.envSustain")}
                    </div>
                  </div>
                </div>
                <div className="services-details-image">
                  <img src={details1} alt={t("service.bcsd.title")} />
                  <span className="sub-title padding-top">
                    {t("service.bcsd.title")}
                  </span>
                </div>

                <h3>{t("service.bcsd.useCases")}</h3>
                <div className="content">
                  <ul>
                    <li>
                      <span>{t("service.bcsd.useCase1")}</span>
                    </li>
                    <li>
                      <span>{t("service.bcsd.useCase2")}</span>
                    </li>
                  </ul>
                </div>
                <h3>{t("service.bcsd.support")}</h3>
                <p>
                  {t("service.bcsd.support.desc")}
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

export default BlockchainSolutionsDevelopment
