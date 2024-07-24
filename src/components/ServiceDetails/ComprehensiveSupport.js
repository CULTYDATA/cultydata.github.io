import React from "react"
import ServiceSidebar from "./ServiceSidebar"

import details1 from "../../images/services/service-4.jpg"
import serviceIcon1 from "../../images/services/prop11.png"
import serviceIcon2 from "../../images/services/prop22.png"
import serviceIcon3 from "../../images/services/prop33.png"
import serviceIcon4 from "../../images/services/prop44.png"
import serviceIcon5 from "../../images/services/prop55.png"
import serviceIcon6 from "../../images/services/prop66.png"

const BlockchainSolutionsDevelopment = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="services-details-image">
                <img src={details1} alt="about" />
              </div>

              <div className="services-details-desc">
                <span className="sub-title">
                  Comprehensive Feature Team for End-to-End Delivery
                </span>
                <h3>Service Offering</h3>
                <p>
                  Cultydata Studio provides an experienced feature team capable
                  of handling every aspect of project delivery, from initial
                  design to final handover. Our team includes experts in UX/UI
                  design, architecture, development, QA, DevSecOps, and more.
                </p>

                <h3>Value Proposition</h3>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon1} alt="feature" width="20%" />
                      </div>
                      <h3>Design and UX/UI</h3>
                      <p>
                        Crafting intuitive and engaging user experiences that
                        meet your business goals.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon2} alt="feature" width="20%" />
                      </div>
                      <h3>Architecture</h3>
                      <p>
                        Designing scalable and robust architectures tailored to
                        your specific requirements.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon3} alt="feature" width="20%" />
                      </div>
                      <h3>Quality Assurance</h3>
                      <p>
                        Ensuring your platform is reliable and performs
                        optimally through rigorous testing.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon4} alt="feature" width="20%" />
                      </div>
                      <h3>DevSecOps</h3>
                      <p>
                        Integrating security into the development process and
                        deploying with continuous integration and continuous
                        delivery (CI/CD) pipelines.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon5} alt="feature" width="20%" />
                      </div>
                      <h3>Handover and Support</h3>
                      <p>
                        Providing comprehensive support for transitioning the
                        MVP to your in-house team, ensuring a smooth and
                        efficient handover process.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-services-item-box">
                      <div className="icon">
                        <img src={serviceIcon6} alt="feature" width="20%" />
                      </div>
                      <h3>Entrepreneurial Promotion</h3>
                      <p>
                        Encouraging internal project promotion and
                        entrepreneurship, cultivating a dynamic and innovative
                        environment
                      </p>
                    </div>
                  </div>
                </div>

                <h3>Use Case Examples</h3>
                <ul className="features">
                  <li>
                    <span>
                      Delivered a complete digital platform for a startup,
                      covering design, development, and deployment, followed by
                      a seamless handover to their internal team.
                    </span>
                  </li>
                  <li>
                    <span>
                      Supported a financial institution in building and
                      deploying a new application, including extensive QA and
                      security integration, with ongoing support for post-launch
                      maintenance.
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

export default BlockchainSolutionsDevelopment
