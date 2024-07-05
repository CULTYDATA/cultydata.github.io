import React from "react"

import aboutImage from "../../images/about/about-img5.png"
import starIcon from "../../images/star-icon.png"

const AboutUsContent = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={aboutImage} alt="features" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  About Us
                </span>

                <h2>
                  Welcome to Cultydata Studio: Your Partner in Digital
                  Transformation
                </h2>
                <p>
                  Welcome to Cultydata Studio, where we transform your digital
                  aspirations into tangible, scalable realities. As a premier
                  incubator-style agency, we specialize in guiding startups
                  through the intricate journey of digital product development.
                  Our mission is to bridge the gap between innovative concepts
                  and market-ready platforms, leveraging our extensive tech
                  expertise and startup acceleration know-how.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Transforming Aspirations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Incubator-Style Agency
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Bridging the Gap
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Cultivating Ecosystems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Expert Guidance
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Strategic Partnerships
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Activate Listening
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Brilliant minds
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Better. Best. Wow!
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Branding it better!
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Creating. Results.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Expect more
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Good thinking
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> In real we trust
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Real innovations and a positive customer experience are the
                    heart of successful communication.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Stay real. Always.
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We have you covered
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> We turn heads
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Your brand, promoted
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default AboutUsContent
