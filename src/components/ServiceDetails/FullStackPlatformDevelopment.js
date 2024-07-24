import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import { Link } from "gatsby"
import details1 from "../../images/services/service-2.png"

const FullStackPlatformDevelopment = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="services-details-image">
                <img src={details1} alt="about" />
              </div>

              <div className="services-details-desc">
                <span className="sub-title">
                  {" "}
                  Full-Stack Platform Development
                </span>
                <h3>Service Offering</h3>
                <p>
                  We provide end-to-end development services for both Web2 and
                  Web3 platforms, including front-end and back-end development,
                  API integration, and cloud deployment.
                </p>

                <h3>Business Domain</h3>

                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-shopping-cart"></i>
                      </div>
                      E-commerce
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-analytics"></i>
                      </div>
                      Finance
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-hospital"></i>
                      </div>
                      Healthcare
                    </div>
                  </div>
                </div>

                <h3>Use Case Examples</h3>
                <ul className="features">
                  <li>
                    <span>
                      Designed and implemented a comprehensive trading platform
                      for a financial services firm, enhancing transaction
                      efficiency and security.
                    </span>
                  </li>
                </ul>
                <h3>Comprehensive Support</h3>
                <p>
                  Our feature team ensures end-to-end delivery for your platform
                  development projects.{" "}
                  <Link
                    to="/services/comprehensive-support"
                    className="learn-more-btn"
                  >
                    <i className="flaticon-right"></i>
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FullStackPlatformDevelopment
