import React from "react"
import { Link } from "gatsby"

import StarIcon from "../../images/star-icon.png"
import ServiceIcon1 from "../../images/services/service-icon1.png"
import ServiceIcon2 from "../../images/services/service-icon2.png"
import ServiceIcon3 from "../../images/services/service-icon3.png"
import ServiceIcon4 from "../../images/services/service-icon4.png"
import ServiceIcon5 from "../../images/services/service-icon5.png"
import ServiceIcon6 from "../../images/services/service-icon6.png"

const Services = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={StarIcon} alt="Icon" />
              Our Services
            </span>
            <h2>We Offer Professional Solutions For Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon1} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon2} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">AI & ML Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon3} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Science</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon4} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Predictive Analytics</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon5} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Software Development</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={ServiceIcon6} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Elastic Solutions</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
