import React from "react"
import aboutImg1 from "../../images/about/about-img1.png"

const AboutUs = () => {
  return (
    <>
      <section className="overview-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">About Us</span>
            <h2>Amazing Business Solution Whatever Your Needs</h2>
            <p>
              Real innovations and a positive customer experience are the heart
              of successful communication. No fake products and services.
            </p>
          </div>

          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Digital Marketing</span>
                <h2>Creative solutions, creative results</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Core Development
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Define Your Choices
                  </h4>
                  <p>
                    No fake products and services. The customer is king, their
                    lives and needs are the inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src={aboutImg1} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
