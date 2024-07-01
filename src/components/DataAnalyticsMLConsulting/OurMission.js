import React from "react"
import { Link } from "gatsby"

import StarIcon from "../../images/star-icon.png"
import OurMissionShape from "../../images/our-mission/our-mission-shape2.png"
import OurMissionImg from "../../images/our-mission/our-mission1.png"
import OurMissionShape1 from "../../images/our-mission/our-mission-shape1.png"

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
                    <img src={StarIcon} alt="icon" />
                    Our Mission
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
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Value for Results
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      User Prespective
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Prespective
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Expert Prepective
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Retail Solutions
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i> Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={OurMissionImg} alt="shape" />
                <div className="shape">
                  <img src={OurMissionShape1} alt="shape" />
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
