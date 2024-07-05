import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

import project1 from "../../images/projects/trade.png"
import project2 from "../../images/projects/kyc.png"

const OurProjects = () => {
  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="icon" />
              Recent Projects
            </span>
            <h2>Our Groundbreaking Projects</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project1} alt="Project" />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-btn"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      Carbonplace
                    </Link>
                  </h3>
                  <span>
                    Enterprise- grade trading platform on private blockchain for
                    tokenized carbon credits
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project2} alt="Project" width="71%" />

                  <Link
                    to="/case-studies/case-studies-details"
                    className="link-btn"
                  >
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      Shared KYC Solution
                    </Link>
                  </h3>
                  <span>
                    Decentralized KYC solution for investment fund asset
                    managers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurProjects
