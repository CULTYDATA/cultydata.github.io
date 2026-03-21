import React from "react"
import { Link } from "gatsby"
import logo from "../../images/full-logo.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="qk-footer">
      <div className="qk-footer__circle-decor" aria-hidden="true" />
      <div className="container">
        <div className="qk-footer__main">
          <div className="qk-footer__brand">
            <Link to="/" className="qk-footer__logo">
              <img src={logo} alt="Cultydata Studio" />
            </Link>
            <p className="qk-footer__tagline">{t("footer.description")}</p>
            <ul className="qk-footer__social">
              <li>
                <a
                  href="https://www.linkedin.com/company/cultydata/about/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="qk-footer__nav">
            <h4>{t("footer.explore")}</h4>
            <ul>
              <li><Link to="/">{t("footer.home")}</Link></li>
              <li><Link to="/about-us">{t("footer.about")}</Link></li>
              <li><Link to="/team">{t("footer.team")}</Link></li>
              <li><Link to="/contact">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          <div className="qk-footer__nav">
            <h4>{t("footer.resources")}</h4>
            <ul>
              <li><Link to="/services/blockchain-solutions-development">{t("services.svc1.blockchain")}</Link></li>
              <li><Link to="/services/fullstack-platform-development">{t("services.svc2.fullstack")}</Link></li>
              <li><Link to="/services/datascience-and-ml-consulting">{t("services.svc3.datascience")} {t("services.svc3.machinelearning")}</Link></li>
              <li><Link to="/case-studies">{t("home.navbar.case")}</Link></li>
            </ul>
          </div>

          <div className="qk-footer__contact">
            <h4>{t("footer.address")}</h4>
            <ul>
              <li>
                <i className="bx bx-map"></i>
                {t("general.addressDetails")}
              </li>
              <li>
                <i className="bx bx-envelope"></i>
                <a href={t("general.mailto")}>{t("general.email")}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="qk-footer__bottom">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
