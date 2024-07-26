import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/full-logo.svg"
import Lang from "./Lang"

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const handleLogoClick = () => {
    window.location.reload()
    setCollapsed(true)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="rewy-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" onClick={handleLogoClick} className="navbar-brand">
                <img src={logo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      About Us <i className="bx bx-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/team"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/services/blockchain-solutions-development"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blockchain Solutions Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/services/fullstack-platform-development"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Full-Stack Platform Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/datascience-and-ml-consulting"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Data Science and Machine Learning Consulting
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/case-studies" className="nav-link">
                      Case Studies
                    </Link>
                  </li>
                  <li >
                    <Lang></Lang> 
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="/blog"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Blog
                    </Link>
                  </li> */}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      <i className="flaticon-right"></i> Contact Us{" "}
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
