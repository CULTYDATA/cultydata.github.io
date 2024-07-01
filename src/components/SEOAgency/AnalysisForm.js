import React from "react"
import seoAnalysis from "../../images/seo-analysis.png"

const AnalysisForm = () => {
  return (
    <>
      <div className="seo-analysis-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="analysis-img">
                <img src={seoAnalysis} alt="analysis" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="analysis-form">
                <span className="sub-title">Analysis</span>
                <h2>Get Free SEO Analysis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="your_name"
                          placeholder="Name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="your_email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="your_number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="website"
                          placeholder="Website URL"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Check Now
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnalysisForm
