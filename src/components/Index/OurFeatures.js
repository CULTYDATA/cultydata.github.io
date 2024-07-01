import React from "react"
import starIcon from "../../images/star-icon.png"
import serviceIcon1 from "../../images/services/service-icon1.png"
import serviceIcon2 from "../../images/services/service-icon2.png"
import serviceIcon3 from "../../images/services/service-icon3.png"
import serviceIcon4 from "../../images/services/service-icon4.png"
import serviceIcon5 from "../../images/services/service-icon5.png"
import serviceIcon6 from "../../images/services/service-icon6.png"

const OurFeatures = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="feature" />
              Our Features
            </span>

            <h2>We’re Here To Help</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon1} alt="feature" />
                </div>
                <h3>Incredible Infrastructure</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon2} alt="feature" />
                </div>
                <h3>Email Notifications</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon3} alt="feature" />
                </div>
                <h3>Simple Dashboard</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon4} alt="feature" />
                </div>
                <h3>Information Retrieval</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon5} alt="feature" />
                </div>
                <h3>Drag and Drop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon6} alt="feature" />
                </div>
                <h3>Deadline Reminders</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurFeatures
