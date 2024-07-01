import React from "react"
import { Link } from "gatsby"
import icon1 from "../../images/icons/icon1.png"
import icon2 from "../../images/icons/icon2.png"
import icon3 from "../../images/icons/icon3.png"
import shape3 from "../../images/services/service-shape3.png"

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-item">
                <div className="icon">
                  <img src={icon1} alt="features" />
                </div>
                <h3>
                  <Link to="/services/service-details">Online</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <img src={shape3} alt="features" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-item">
                <div className="icon">
                  <img src={icon2} alt="features" />
                </div>

                <h3>
                  <Link to="/services/service-details">In-person</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <img src={shape3} alt="features" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-featured-services-item">
                <div className="icon">
                  <img src={icon3} alt="features" />
                </div>

                <h3>
                  <Link to="/services/service-details">Business</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>

                <div className="shape">
                  <img src={shape3} alt="features" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedServices
