import React from "react"
import { Link } from "gatsby"

import ServiceIcon7 from "../../images/services/service-icon7.png"
import ServiceIcon8 from "../../images/services/service-icon8.png"
import ServiceIcon9 from "../../images/services/service-icon9.png"
import ServiceIcon10 from "../../images/services/service-icon10.png"
import ServiceIcon11 from "../../images/services/service-icon11.png"
import ServiceIcon12 from "../../images/services/service-icon12.png"
import ServiceShape4 from "../../images/services/service-shape4.png"

const Services = () => {
  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Services We Can Help You With</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon7} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Big Data Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon8} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Robust Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon9} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Marketing Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon10} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Visualization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon11} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Securities Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon12} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Governance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
