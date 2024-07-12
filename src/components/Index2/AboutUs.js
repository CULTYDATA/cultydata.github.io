import React from "react"
import { Link } from "gatsby"
import img5 from "../../images/about/techexpertise.jpg"
import starIcon from "../../images/shape/icon.svg"
import icon4 from "../../images/icons/12.png"
import icon6 from "../../images/icons/thumbs.png"

const AboutUs = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={img5} alt="banner" className="sec-img-one" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    About Us
                  </span>
                  <h2>
                    Cultydata Studio: Where Tech Expertise Meets Startup
                    Acceleration
                  </h2>
                  <p>
                    At <b className="bold-text">Cultydata Studio</b>, we are
                    dedicated to turning your digital vision into reality. Our
                    team of experts brings a wealth of experience and
                    cross-disciplinary skills to deliver cutting-edge solutions.
                  </p>

                  <ul className="features-list">
                    <li>
                      <img src={icon4} alt="banner" width="20%" />
                      <h3>50 Years</h3>
                      <p>Combined experience</p>
                    </li>

                    <li>
                      <img src={icon6} alt="banner" width="20%" />
                      <h3>100%</h3>
                      <p>Satisfaction rate</p>
                    </li>
                  </ul>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>More About Us<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
