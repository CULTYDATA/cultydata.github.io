import React from "react"
import { Link } from "gatsby"
import service3 from "../../images/services/service3.png"
import starIcon from "../../images/star-icon.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import shape1 from "../../images/shape/circle-shape1.png"

const AboutArea = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={service3} alt="about" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="about" />
                    About Us
                  </span>
                  <h2>We Are Dynamic Team Of SEO Agency</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Big Data
                      <img src={shape2} alt="about" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Visualization
                      <img src={shape2} alt="about" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Warehousing
                      <img src={shape2} alt="about" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Data Management
                      <img src={shape2} alt="about" />
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
          <img src={shape1} alt="about" />
        </div>
      </section>
    </>
  )
}

export default AboutArea
