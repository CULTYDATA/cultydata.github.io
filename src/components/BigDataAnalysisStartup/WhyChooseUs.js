import React from "react"
import { Link } from "gatsby"

import MapShape2 from "../../images/shape/map-shape2.png"
import Partner1 from "../../images/partner/partner1.png"
import Partner2 from "../../images/partner/partner2.png"
import Partner3 from "../../images/partner/partner3.png"
import Partner4 from "../../images/partner/partner4.png"
import Partner5 from "../../images/partner/partner5.png"
import Partner6 from "../../images/partner/partner6.png"

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us-area bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2>Why Choose Us?</h2>
                <p>
                  During 30 years in data analytics, we have built up
                  comprehensive competencies that cover traditional and big
                  data, data management, business intelligence (including
                  self-service BI and data visualization), advanced data
                  analytics, and data science.
                </p>
                <p>
                  In 2015, we were rated A+ by BBB, recognized as the top IT
                  company by Clutch, as well as featured on The Silicon Review
                  listing among 10 Fastest Growing Data Analytics Companies.
                </p>

                <Link to="/about-us" className="default-btn">
                  <i className="flaticon-right"></i>
                  More About Us <span></span>
                </Link>

                <div className="map-shape2">
                  <img src={MapShape2} alt="MapShape" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-brand-partners-list">
                <h2>Our Brand Partners</h2>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner1} alt="Partner" />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner2} alt="Partner" />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner3} alt="Partner" />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner4} alt="Partner" />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner5} alt="Partner" />
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-4">
                    <img src={Partner6} alt="Partner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
