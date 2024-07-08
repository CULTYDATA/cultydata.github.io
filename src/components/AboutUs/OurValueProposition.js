import React from "react"

import serviceIcon1 from "../../images/services/service-icon1.png"
import serviceIcon2 from "../../images/services/service-icon2.png"
import serviceIcon3 from "../../images/services/service-icon3.png"
import serviceIcon4 from "../../images/services/service-icon4.png"
import serviceIcon5 from "../../images/services/service-icon5.png"

const OurValueProposition = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70  bg-fefbf1">
        <div className="container">
          <div className="section-title">
            <h2>Our Value Proposition</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon1} alt="feature" />
                </div>
                <h3>High-Performance Teams</h3>
                <p>
                  Our teams consist of highly skilled professionals who deliver
                  product value from day one. Shared or dedicated teams are
                  ready to contribute immediately to your project's success.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon2} alt="feature" />
                </div>
                <h3>Synergy with Cultydata Academy</h3>
                <p>
                  Access to talent pools from Cultydata Academy, creating
                  internal synergies and fostering continuous innovation.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon3} alt="feature" />
                </div>
                <h3>Holacratic Organization</h3>
                <p>
                  Promoting decision-making and value creation within a
                  holacratic structure, ensuring each team member can contribute
                  effectively to the project's success.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon4} alt="feature" />
                </div>
                <h3>Cost Efficiency</h3>
                <p>
                  Leveraging mutualization of product enablers and software core
                  stacks, we offer significant economies of scale while
                  respecting intellectual property rights.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon5} alt="feature" />
                </div>
                <h3>Entrepreneurial Promotion</h3>
                <p>
                  Encouraging internal project promotion and entrepreneurship,
                  cultivating a dynamic and innovative environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurValueProposition
