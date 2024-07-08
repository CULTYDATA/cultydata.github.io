import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/full-logo.svg"

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
                          to="/services/tailored-digital-platform-development"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Tailored Digital Platform Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/services/tech-team-building-training"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Tech Team Building & Training
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/cloud-native-architecture-design"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Cloud-Native Architecture Design
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/services/continuous-delivery-pipeline-setup"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Continuous Delivery Pipeline Setup
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/case-studies" className="nav-link">
                      Case Studies
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="#"
                          onClick={e => e.preventDefault()}
                          className="nav-link"
                        >
                          Courses <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/courses"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Courses
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/courses/course-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Course Details
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
                          Events <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/events"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Events
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/events/event-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Contact
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/gallery"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Gallery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/faq"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/coming-soon"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/membership-levels"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Membership Levels
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/profile-authentication"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Login/Register
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/privacy-policy"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/terms-of-service"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Terms of Service
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/404"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={e => e.preventDefault()}
                      className="nav-link"
                    >
                      Blog <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/blog"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/blog/blog-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      <i className="flaticon-right"></i> Get Started{" "}
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
