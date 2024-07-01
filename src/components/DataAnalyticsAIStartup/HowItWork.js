import React from "react"
import starIcon from "../../images/star-icon.png"
import process7 from "../../images/process/process7.png"
import small1 from "../../images/process/process-small1.png"
import small4 from "../../images/process/process-small4.png"
import small5 from "../../images/process/process-small5.png"
import small6 from "../../images/process/process-small6.png"

const HowItWork = () => {
  return (
    <>
      <section className="process-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              How It's Work
            </span>
            <h2>Our Data Analytics Process</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row align-items-center m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="process-image">
                <img src={process7} alt="banner" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="process-content">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small1} alt="banner" />
                        </div>
                        <h3>Frame the Problem</h3>
                        <div className="number">1</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small1} alt="banner" />
                        </div>
                        <h3>Collect the Raw Data</h3>
                        <div className="number">2</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small1} alt="banner" />
                        </div>
                        <h3>Process the Data</h3>
                        <div className="number">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small4} alt="banner" />
                        </div>
                        <h3>Explore the Data</h3>
                        <div className="number">4</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small5} alt="banner" />
                        </div>
                        <h3>Perform Analysis</h3>
                        <div className="number">5</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-box-item">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          <img src={small6} alt="banner" />
                        </div>
                        <h3>Communicate Results</h3>
                        <div className="number">6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWork
