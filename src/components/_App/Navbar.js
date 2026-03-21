import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/full-logo.svg"
import Lang from "./Lang"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const { t } = useTranslation()

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    const elementId = document.getElementById("navbar")
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <div id="navbar" className="qk-navbar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Cultydata Studio" />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item lang-mobile">
                <Lang />
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  activeClassName="active"
                  onClick={() => setCollapsed(true)}
                  className="nav-link"
                >
                  {t("home.navbar.home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  activeClassName="active"
                  onClick={() => setCollapsed(true)}
                  className="nav-link"
                >
                  {t("home.navbar.about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  onClick={e => e.preventDefault()}
                  className="nav-link"
                >
                  {t("home.navbar.services")}{" "}
                  <i className="bx bx-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      to="/services/blockchain-solutions-development"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      {t("services.svc1.blockchain")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services/fullstack-platform-development"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      {t("services.svc2.fullstack")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services/datascience-and-ml-consulting"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      {t("services.svc3.datascience")}{" "}
                      {t("services.svc3.machinelearning")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services/comprehensive-support"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      {t("services.comprehensive.txt1")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/case-studies"
                  activeClassName="active"
                  onClick={() => setCollapsed(true)}
                  className="nav-link"
                >
                  {t("home.navbar.case")}
                </Link>
              </li>
              <li className="nav-item lang-desktop">
                <Lang />
              </li>
            </ul>

            <div className="others-option d-flex align-items-center">
              <div className="option-item">
                <Link
                  to="/contact"
                  activeClassName="active"
                  onClick={() => setCollapsed(true)}
                  className="qk-btn qk-btn--primary qk-btn--sm"
                >
                  {t("home.button.contact")}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
