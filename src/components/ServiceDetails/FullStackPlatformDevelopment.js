import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import { Link } from "gatsby"
import details1 from "../../images/services/fullstack1.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const FullStackPlatformDevelopment = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h3>{t("service.fspd.offer")}</h3>
                <p>{t("service.fspd.offer.desc")}</p>

                <h3>{t("service.fspd.domain")}</h3>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-shopping-cart"></i>
                      </div>
                      {t("service.fspd.domain.ecommerce")}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-analytics"></i>
                      </div>
                      {t("service.fspd.domain.finance")}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-hospital"></i>
                      </div>
                      {t("service.fspd.domain.healthcare")}
                    </div>
                  </div>
                </div>

                <div className="services-details-image ">
                  <img src={details1} alt={t("service.fspd.title")} />
                  <span className="sub-title padding-top">
                    {t("service.fspd.title")}
                  </span>
                </div>

                <h3>{t("service.fspd.useCases")}</h3>
                <div className="content">
                  <ul>
                    <li>
                      <span>{t("service.fspd.useCase1")}</span>
                    </li>
                  </ul>
                </div>

                <h3>{t("service.fspd.support")}</h3>
                <p>
                  {t("service.fspd.support.desc")}
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

export default FullStackPlatformDevelopment
