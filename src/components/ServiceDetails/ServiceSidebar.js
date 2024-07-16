import React from "react"
import { Link } from "gatsby"

const ServiceSidebar = () => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link
              to="/services/blockchain-solutions-development"
              activeClassName="active"
            >
              Blockchain Solutions Development
            </Link>
          </li>
          <li>
            <Link
              to="/services/fullstack-platform-development"
              activeClassName="active"
            >
              Full Stack Platform Development
            </Link>
          </li>
          <li>
            <Link
              to="/services/datascience-and-ml-consulting"
              activeClassName="active"
            >
              Data Science and Machine Learning Consulting
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              Paris
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <span>Email:</span>
              <a href="mailto:hello@rewy.com">hello@rewy.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceSidebar
