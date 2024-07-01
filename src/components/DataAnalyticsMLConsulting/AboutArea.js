import React from "react"
import { Link } from "gatsby"

import AboutImage from "../../images/about/about-img10.png"
import AboutShape from "../../images/about/about-shape1.png"
import StarIcon from "../../images/star-icon.png"
import OurMissionShape from "../../images/our-mission/our-mission-shape2.png"
import CircleShape from "../../images/shape/circle-shape1.png"

const AboutArea = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={AboutImage} alt="About" />
                <div className="shape">
                  <img src={AboutShape} alt="About Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={StarIcon} alt="Star Icon" />
                    About Us
                  </span>
                  <h2>Business Analytics For Data-Driven Solutions</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Big Data
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Visualization
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Warehousing
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Management
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Intelligence
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Business Intelligence
                      <img src={OurMissionShape} alt="Our Mission Shape" />
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={CircleShape} alt="Circle Shape" />
        </div>
      </section>
    </>
  )
}

export default AboutArea
