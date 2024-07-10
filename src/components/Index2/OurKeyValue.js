import React from "react"
import starIcon from "../../images/star-icon.png"

import keyValue1 from "../../images/services/diff1.png"
import keyValue2 from "../../images/services/diff2.png"
import keyValue3 from "../../images/services/diff3.png"
import keyValue4 from "../../images/services/diff4.png"

const OurKeyValue = () => {
  return (
    <>
      <section className="process-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              DELIVERING UNIQUE VALUE
            </span>
            <h2>Our Key Differentiators</h2>
            <p>
              We take pride in our ability to deliver unique value through our
              projects. Here are some of the key value additions we bring to
              each project
            </p>
          </div>

          <div className="row choose__item-lists">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-process-box">
                <div className="number">1</div>
                <div className="image">
                  <img src={keyValue1} alt="about" width="30%" />
                </div>
                <h3>Pay-as-you-go Cloud Infrastructure</h3>
                <p>
                  We implement cost-effective cloud solutions that scale with
                  your needs, ensuring you only pay for what you use. This
                  approach maximises your resources and minimises upfront costs.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-process-box">
                <div className="number">2</div>
                <div className="image">
                  <img src={keyValue2} alt="about" width="30%" />
                </div>
                <h3>Fault-Tolerant Architecture</h3>
                <p>
                  Our designs prioritise resilience, incorporating redundancies
                  and fail-safes to ensure your platform remains operational
                  even in the face of unexpected challenges.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-process-box">
                <div className="number">3</div>
                <div className="image">
                  <img src={keyValue3} alt="about" width="30%" />
                </div>
                <h3>Scalability Built-In from Day One</h3>
                <p>
                  We architect your solutions with growth in mind, enabling
                  seamless scaling as your user base and data needs expand over
                  time.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-process-box ">
                <div className="number">4</div>
                <div className="image">
                  <img src={keyValue4} alt="about" width="30%" />
                </div>
                <h3>Security-First Approach</h3>
                <p>
                  Security is not an afterthought but a fundamental aspect of
                  our development process. We implement robust security measures
                  to protect your data and users from potential threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurKeyValue
