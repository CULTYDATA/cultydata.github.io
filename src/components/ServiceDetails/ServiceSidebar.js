import React from "react"
import { Link } from "gatsby"

const ServiceSidebar = () => {
  return (
    <>
      <div className="services-details-info">
        <ul className="services-list">
          <li>
            <Link
              to="/services/tailored-digital-platform-development"
              activeClassName="active"
            >
              Tailored Digital Platform Development
            </Link>
          </li>
          <li>
            <Link
              to="/services/tech-team-building-training"
              activeClassName="active"
            >
              Tech Team Building & Training
            </Link>
          </li>
          <li>
            <Link
              to="/services/cloud-native-architecture-design"
              activeClassName="active"
            >
              Cloud-Native Architecture Design
            </Link>
          </li>
          <li>
            <Link
              to="/services/continuous-delivery-pipeline-setup"
              activeClassName="active"
            >
              Continuous Delivery Pipeline Setup
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>Contact Info</h3>

          <ul>
            <li>
              <div className="icon">
                <i className="bx bx-user-pin"></i>
              </div>
              <span>Phone:</span>
              <a href="tel:+21453545413">+2145 354 5413</a>
            </li>
            <li>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <span>Location:</span>
              New York, USA
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
