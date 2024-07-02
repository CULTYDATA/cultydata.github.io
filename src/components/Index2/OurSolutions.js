import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const OurSolutions = () => {
  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="icon" />
              Our Core Services
            </span>
            <h2>We Different From Others Should Choose Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Tailored Digital Platform Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Tech Team Building & Training
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Cloud-Native Architecture Design
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Continuous Delivery Pipeline Setup
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  adipiscing aliqua.
                </p>

                <Link
                  to="/services/service-details"
                  className="view-details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
