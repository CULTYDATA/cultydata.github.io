import React from "react"
import starIcon from "../../images/star-icon.png"
import howItWork from "../../images/whyChooseus.png"

const WhyChooseUs = () => {
  return (
    <>
      <section className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Cultydata Studio?</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-analysis"></i>
                </div>
                <h3>Agile and Adaptive</h3>
                <p>
                  Our approach is agile and adaptive, allowing us to meet the
                  specific needs of each project with precision and speed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-structure"></i>
                </div>
                <h3>Expertise Across Domains</h3>
                <p>
                  We bring deep expertise across various technological domains,
                  including data science, blockchain, IoT, and more.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>
                <h3>Committed to Excellence</h3>
                <p>
                  With a commitment to excellence, we ensure that every project
                  meets the highest standards of quality and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
