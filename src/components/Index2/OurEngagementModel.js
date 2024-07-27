import React from "react"
import starIcon from "../../images/shape/icon.svg"
import serviceIcon1 from "../../images/services/technical.svg"
import serviceIcon2 from "../../images/services/startup.svg"
import serviceIcon3 from "../../images/services/hand-over-icon.png"

const OurEngagementModel = () => {
  return (
    <section className="solutions-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="banner" />
            Our Engagement model
          </span>
          <h2>Streamlined Collaboration Services</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <img src={serviceIcon1} alt="feature" width="80%" />
              </div>
              <h3> Technical Consulting</h3>
              <div className="content">
                
                  <p>
                  Offering specialized technical expertise through flexible pricing models such as fixed-cost or time-and-material contracts.
                  </p>
                
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <img src={serviceIcon2} alt="feature" width="80%" />
              </div>
              <h3>Build, Operate, Transfer (BOT)</h3>
              <div className="content">
                
                  <p>
                  Developing, managing, and ultimately transferring custom applications to Clients, fostering long-term collaborations.
                  </p>
                 
              
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-featured-services-box">
              <div className="icon">
                <img src={serviceIcon3} alt="feature" width="80%" />
              </div>
              <h3>Startup Accelerator & Strategic Partnership</h3>
              <div className="content">
                
                  <p>
                  Collaborating with pre-seed start-ups to accelerate MVP development with the potential for future partnerships. We can explore equity participation or success-based fee arrangements. Additionally, we can provide essential MVP development services.
                  </p>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurEngagementModel
