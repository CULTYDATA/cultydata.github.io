import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import shape1 from "../../images/our-mission/our-mission-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import mission1 from "../../images/our-mission/our-mission1.png"

const OurMission = () => {
  return (
    <>
      <section className="our-mission-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" /> Our Mission
                  </span>
                  <h2>Data Science & Data Analysis Agency</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <ul className="our-mission-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Global Experience
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Value for Results
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User Prespective
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Prespective
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Expert Prepective
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Retail Solutions
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    Read More
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={mission1} alt="banner" />
                <div className="shape">
                  <img src={shape1} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurMission
