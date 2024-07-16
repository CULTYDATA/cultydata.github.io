import React from "react"
import { Link } from "gatsby"

import serviceIcon6 from "../../images/services/blockchain123.png"
import serviceIcon7 from "../../images/services/datascience123.png"
import serviceIcon8 from "../../images/services/fullstack123.png"


const ServicesOne = () => {
  return (
    <>
      <section className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                 


                  <img src={serviceIcon6} alt="about" width="20%" />
                </div>
                <h3>
                  <Link to="/services/blockchain-solutions-development">
                    Blockchain Solutions Development
                  </Link>
                </h3>
                <p>
                  We design and develop custom blockchain solutions, including
                  tokenized asset platforms, DApps, and seamless blockchain
                  integration.
                </p>

                <Link
                  className="view-details-btn"
                  to="/services/blockchain-solutions-development"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  
                  <img src={serviceIcon8} alt="about" width="20%" />


                </div>

                <h3>
                  <Link to="/services/fullstack-platform-development">
                    Full-Stack Platform Development
                  </Link>
                </h3>

                <p>
                  We provide end-to-end development services for Web2 and Web3
                  platforms, covering front-end and back-end development, API
                  integration, and cloud deployment.
                </p>

                <Link
                  className="view-details-btn"
                  to="/services/fullstack-platform-development"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  


                  <img src={serviceIcon7} alt="about" width="20%" />

                </div>

                <h3>
                  <Link to="/services/datascience-and-ml-consulting">
                    Data Science and Machine Learning Consulting
                  </Link>
                </h3>

                <p>
                  We offer expert consulting in data science and machine
                  learning, focusing on predictive analytics, time series
                  analysis, and custom algorithm development.
                </p>

                <Link
                  className="view-details-btn"
                  to="/services/datascience-and-ml-consulting"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesOne
