import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import AboutImg from "../../images/about/about-img9.jpg"
import StarIcon from "../../images/star-icon.png"
import Icon4 from "../../images/icons/icon4.png"
import Icon5 from "../../images/icons/icon5.png"
import CircleShape1 from "../../images/shape/circle-shape1.png"

const AboutUs = () => {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-box">
                <img src={AboutImg} alt="AboutImg" />

                <div className="box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                    aria-hidden="true"
                  >
                    <i className="flaticon-google-play"></i> Watch Video
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={StarIcon} alt="StarIcon" />
                    About Us
                  </span>
                  <h2>Drive Digital Revolution Through Data Science</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="features-list">
                    <li>
                      <img src={Icon4} alt="Icon4" />
                      <h3>10 Years</h3>
                      <p>On the market</p>
                    </li>
                    <li>
                      <img src={Icon5} alt="Icon5" />
                      <h3>45+</h3>
                      <p>Team members</p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={CircleShape1} alt="CircleShape" />
        </div>
      </div>
    </>
  )
}

export default AboutUs
