import React from "react"
import { Link } from "gatsby"
import logo from "../../images/full-logo.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p className="slogan">{t("footer.description")}</p>

              <ul className="social-link">
                <li>
                  <a
                    href="https://www.linkedin.com/company/cultydata/about/"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>{t("footer.explore")}</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">{t("footer.home")}</Link>
                </li>
                <li>
                  <Link to="/about-us">{t("footer.about")}</Link>
                </li>

                <li>
                  <Link to="/blog">{t("footer.blog")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("footer.contact")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>{t("footer.resources")}</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/services">{t("footer.services")}</Link>
                </li>
                <li>
                  <Link to="/testimonials">{t("footer.testimonials")}</Link>
                </li>
                <li>
                  <Link to="/team">{t("footer.team")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>{t("footer.address")}</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  {t("general.addressDetails")}
                </li>

                <li>
                  <i className="bx bx-envelope"></i>
                  <a href={t("general.mailto")}>
                    {t("general.email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>{t("footer.copyright", { year: currentYear })}</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li className="hyper-link">
                  <Link to="/privacy-policy">{t("footer.privacyPolicy")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div> */}
    </footer>
  )
}

export default Footer
