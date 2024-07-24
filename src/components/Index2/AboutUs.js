import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import img1 from "../../images/about/about-us1.png"
import starIcon from "../../images/shape/icon.svg"
import icon1 from "../../images/icons/icon1.png"
import icon2 from "../../images/icons/icon2.png"
import img2 from "../../images/about/about-us2.png"

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={img1} alt="banner" className="sec-img-one" />
                <img
                  src={img2}
                  alt="banner"
                  className="sec-img-two img-six"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title justify-content-center">
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
                      <img src={icon1} alt="banner" width="20%" />
                      <h3>50 Years</h3>
                      <p>Combined experience</p>
                    </li>

                    <li>
                      <img src={icon2} alt="banner" width="20%" />
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
