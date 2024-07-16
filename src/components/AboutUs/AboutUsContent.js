import React from "react"

import aboutImage from "../../images/about/aboutus2.png"

const AboutUsContent = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={aboutImage} alt="features" width="80%" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
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
      </section>
    </>
  )
}

export default AboutUsContent
