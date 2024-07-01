import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"
import icon4 from "../../images/services/service-icon4.png"
import icon5 from "../../images/services/service-icon5.png"
import icon6 from "../../images/services/service-icon6.png"
import shape2 from "../../images/shape/circle-shape2.png"

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon1} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon2} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon3} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon4} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon5} alt="banner" />
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
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon6} alt="banner" />
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

            <div className="col-lg-12 col-md-12">
              <div className="load-more-btn text-center">
                <Link to="/services" className="default-btn">
                  <i className="flaticon-refresh"></i> Load More <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape2">
          <img src={shape2} alt="banner" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  )
}

export default OurServices
