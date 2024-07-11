import React from "react"
import { Link } from "gatsby"
import start1 from "../../images/bannerlast.jpg"

const StartProject = () => {
  return (
    <>
      <section className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="project-start-image">
                <img src={start1} alt="banner" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="project-start-content">
                <h2>Get Started with Your Digital Journey Today!</h2>
                <p>
                  Ready to Launch Your Digital Project with Confidence? Contact
                  Cultydata Studio Today!"
                </p>
                <Link to="/contact" className="default-btn">
                  <i className="flaticon-web"></i> Get Started <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartProject
