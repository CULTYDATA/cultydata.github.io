import React from "react"
import ServiceSidebar from "./ServiceSidebar"
import details1 from "../../images/services/blockchainservice 3.png"

const BlockchainSolutionsDevelopment = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8 col-md-12" >
              <div className="services-details-image" >
                <img src={details1} alt="about" width="20%" />
              </div>

              <div className="services-details-desc">
                <span className="sub-title">
                  Blockchain Solutions Development
                </span>
                <h3>Service Offering</h3>
                <p>
                  Our team excels in the design and development of blockchain
                  solutions customized to meet your specific business
                  requirements. From tokenized asset platforms to decentralized
                  applications (DApps) and seamless blockchain integration, we
                  cover all aspects of blockchain technology.
                </p>

                <h3>Business Domain</h3>

                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-analytics"></i>
                      </div>
                      Finance
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-share"></i>
                      </div>
                      Supply Chain
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-earth-day"></i>
                      </div>
                      Environmental Sustainability
                    </div>
                  </div>
                </div>

                <h3>Use Case Examples</h3>
                <ul className="features">
                  <li>
                    <span>
                      A blockchain-based platform for trading digital assets,
                      ensuring secure and transparent transactions.
                    </span>
                  </li>
                  <li>
                    <span>
                      Notarization use case with multiple actors to issue,
                      certify and consume claimed data.
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
