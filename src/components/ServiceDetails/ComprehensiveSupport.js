import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/service-4.svg"
import serviceIcon1 from "../../images/services/prop11.png"
import serviceIcon2 from "../../images/services/prop22.png"
import serviceIcon3 from "../../images/services/prop33.png"
import serviceIcon4 from "../../images/services/prop44.png"
import serviceIcon5 from "../../images/services/prop55.png"
import serviceIcon6 from "../../images/services/prop66.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ComprehensiveSupport = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h3>{t("service.comprehensiveSupport.offer")}</h3>
                <p>{t("service.comprehensiveSupport.offer.desc")}</p>

                <div className="services-details-image">
                  <img
                    src={details1}
                    alt={t("service.comprehensiveSupport.alt")}
                  />
                  <span className="sub-title padding-top">
                    {t("service.comprehensiveSupport.featureTeam")}
                  </span>
                </div>

                <h3>{t("service.comprehensiveSupport.valueProp")}</h3>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon1}
                          alt={t("service.comprehensiveSupport.design.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>{t("service.comprehensiveSupport.design.title")}</h3>
                      <p>{t("service.comprehensiveSupport.design.desc")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon2}
                          alt={t("service.comprehensiveSupport.arch.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>{t("service.comprehensiveSupport.arch.title")}</h3>
                      <p>{t("service.comprehensiveSupport.arch.desc")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon3}
                          alt={t("service.comprehensiveSupport.qa.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>{t("service.comprehensiveSupport.qa.title")}</h3>
                      <p>{t("service.comprehensiveSupport.qa.desc")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon4}
                          alt={t("service.comprehensiveSupport.devsecops.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>
                        {t("service.comprehensiveSupport.devsecops.title")}
                      </h3>
                      <p>{t("service.comprehensiveSupport.devsecops.desc")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon5}
                          alt={t("service.comprehensiveSupport.handover.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>
                        {t("service.comprehensiveSupport.handover.title")}
                      </h3>
                      <p>{t("service.comprehensiveSupport.handover.desc")}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img
                          src={serviceIcon6}
                          alt={t("service.comprehensiveSupport.promo.alt")}
                          width="20%"
                        />
                      </div>
                      <h3>{t("service.comprehensiveSupport.promo.title")}</h3>
                      <p>{t("service.comprehensiveSupport.promo.desc")}</p>
                    </div>
                  </div>
                </div>

                <h3>{t("service.comprehensiveSupport.useCases")}</h3>
                <div className="content">
                  <ul>
                    <li>
                      <span>{t("service.comprehensiveSupport.useCase1")}</span>
                    </li>
                    <li>
                      <span>{t("service.comprehensiveSupport.useCase2")}</span>
                    </li>
                  </ul>
                </div>
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

export default ComprehensiveSupport
