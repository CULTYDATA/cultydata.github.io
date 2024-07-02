import React from "react"
import { Link } from "gatsby"
import img5 from "../../images/about/about-img5.png"
import starIcon from "../../images/star-icon.png"
import icon4 from "../../images/icons/icon4.png"
import icon5 from "../../images/icons/icon5.png"
import icon6 from "../../images/icons/icon6.png"
import icon7 from "../../images/icons/icon7.png"
import shape1 from "../../images/shape/circle-shape1.png"

const AboutUs = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={img5} alt="banner" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    About Us
                  </span>
                  <h2>Drive Digital Revolution Through Data Science</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <ul className="features-list">
                    <li>
                      <img src={icon4} alt="banner" />
                      <h3>10 Years</h3>
                      <p>On the market</p>
                    </li>

                    <li>
                      <img src={icon5} alt="banner" />
                      <h3>45+</h3>
                      <p>Team members</p>
                    </li>

                    <li>
                      <img src={icon6} alt="banner" />
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                    </li>

                    <li>
                      <img src={icon7} alt="banner" />
                      <h3>80%</h3>
                      <p>Senior scientist</p>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>More About Us<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default AboutUs
