import React from "react"
import { Link } from "gatsby"
import start1 from "../../images/project-start1.png"
import shape1 from "../../images/shape/vector-shape9.png"
import shape2 from "../../images/shape/vector-shape10.png"

const StartProject = () => {
  return (
    <>
      <section className="project-start-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <img src={start1} alt="banner" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>We Like to Start Your Project With Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <Link to="/contact" className="default-btn">
                  <i className="flaticon-web"></i> Get Started <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape9">
          <img src={shape1} alt="shape" />
        </div>
        <div className="vector-shape10">
          <img src={shape2} alt="shape" />
        </div>
      </section>
    </>
  )
}

export default StartProject
