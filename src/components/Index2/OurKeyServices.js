import React from "react"

import serviceIcon1 from "../../images/services/future.png"
import serviceIcon2 from "../../images/services/intellectual.png"
import serviceIcon3 from "../../images/services/projecthandover.png"

const OurKeyServices = () => {
  return (
    <>
      <section className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Key services</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  
                  <img src={serviceIcon1} alt="feature" width = "80%" />
                </div>
                <h3>Agile Feature Teams</h3>
                <div className="content">
                  <ul>
                    <li>
                      Multidisciplinary teams oriented towards "Time To Market.
                    </li>
                    <li>
                      {" "}
                      Initiate project sprints, ensuring optimal preparation for
                      organic and technical scaling.
                    </li>
                    <li>
                      Agile, Cloud-Native, DevSecOps methodologies to enhance
                      flexibility and efficiency.
                    </li>
                    <li>
                      Daily communication with agile organization for seamless
                      collaboration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                <img src={serviceIcon2} alt="feature" width = "80%"/>
                 
                </div>
                <h3>Intellectual Property (IP) Management</h3>
                <div className="content">
                  <ul>
                    <li>
                      Exclusive or shared IP rights, based on client
                      preferences.
                    </li>
                    <li>
                      {" "}
                      Agile contracts co-constructed with client startups or
                      partners to ensure mutual benefit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-featured-services-box">
                <div className="icon">
              
                  <img src={serviceIcon3} alt="feature" width = "80%" />
                </div>
                <h3>Project Handover</h3>
                <div className="content">
                  <ul>
                    <li>
                      Detailed transition contracts to facilitate a smooth
                      end-of-collaboration process.
                    </li>
                    <li>
                      {" "}
                      Ensuring continuity and stability post-handover with
                      thorough documentation and support.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurKeyServices
