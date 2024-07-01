import React from "react"
import { Link } from "gatsby"
import serviceIcon7 from "../../images/services/service-icon7.png"
import serviceIcon8 from "../../images/services/service-icon8.png"
import serviceIcon9 from "../../images/services/service-icon9.png"
import serviceIcon10 from "../../images/services/service-icon10.png"
import serviceIcon11 from "../../images/services/service-icon11.png"
import serviceIcon12 from "../../images/services/service-icon12.png"
import serviceShape4 from "../../images/services/service-shape4.png"

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon7} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Target Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon8} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Keyword Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item ">
                <div className="icon">
                  <img src={serviceIcon9} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Continuous Testing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon10} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Marketing Analysis</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon11} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Content Optimization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon12} alt="services" />
                </div>
                <h3>
                  <Link to="/services/service-details">Email Marketing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>
                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i>
                  Learn More
                </Link>
                <div className="shape">
                  <img src={serviceShape4} alt="services" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurServices
