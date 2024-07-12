// NewTeam.js
import React from "react"
import starIcon from "../../images/shape/icon.svg"
import team5 from "../../images/team/team5.jpg"
import team6 from "../../images/team/team6.jpg"
import team7 from "../../images/team/team7.jpg"
import team8 from "../../images/team/team7.jpg"

const NewTeam = () => {
  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            Team Members
          </span>
          <h2>Our Team Expertise</h2>
          <p>
            Meet Our Full-Stack, Cross-Technology Experts with Entrepreneurial
            Spirit
          </p>
        </div>

        <div className="row">
          {/* Team member 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team5} alt="Merv Adrian" />

                <div className="hover-content">
                  <p className="hover-description">
                    With over 15 years of experience in tech entrepreneurship,
                    Sarah leads our team with visionary strategies and a passion
                    for innovation. Her background in AI and machine learning
                    drives our cutting-edge approach to digital solutions.
                  </p>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>Sarah Chen</h3>
                <span>CEO</span>
              </div>
            </div>
          </div>

          {/* Team member 2 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team6} alt="Kirk Borne" />

                <div className="hover-content">
                  <p className="hover-description">
                    Raj brings 20+ years of expertise in cloud architecture and
                    blockchain technology. His pioneering work in decentralised
                    systems has been instrumental in shaping our unique
                    technological offerings.
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>Dr. Raj Patel,</h3>
                <span>CTO</span>
              </div>
            </div>
          </div>

          {/* Team member 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team7} alt="John Doe" />

                <div className="hover-content">
                  <p className="hover-description">
                    Emma's decade-long experience in product management for
                    startups ensures that our solutions are not just
                    technologically advanced, but also perfectly aligned with
                    market needs and user expectations.
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>Emma Larsson</h3>
                <span>Head of Product</span>
              </div>
            </div>
          </div>

          {/* Team member 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <img src={team8} alt="Jane Smith" />

                <div className="hover-content">
                  <p className="hover-description">
                    Alex's full-stack expertise and agile development mastery
                    drive our efficient and innovative development processes.
                    His commitment to clean, scalable code is the backbone of
                    our technical excellence.
                  </p>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </div>
              </div>
              <div className="content">
                <h3>Alex Nguyen</h3>
                <span>Lead Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewTeam
