import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ServiceSidebar = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link
              to="/services/blockchain-solutions-development"
              activeClassName="active"
            >
              {t("services.svc1.blockchain")}
            </Link>
          </li>
          <li>
            <Link
              to="/services/fullstack-platform-development"
              activeClassName="active"
            >
              {t("services.svc2.fullstack")}
            </Link>
          </li>
          <li>
            <Link
              to="/services/datascience-and-ml-consulting"
              activeClassName="active"
            >
              {t("services.svc3.datascience")}{" "}
              {t("services.svc3.machinelearning")}
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>{t("services.sidebar.contactInfo")}</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>{t("services.sidebar.location")}</span>
              {t("services.sidebar.paris")}
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>{t("services.sidebar.email")}</span>
              <a href="mailto:connect@cultydata.com">connect@cultydata.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar
