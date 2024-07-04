import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import icon1 from "../../images/services/service-icon1.png"
import icon2 from "../../images/services/service-icon2.png"
import icon3 from "../../images/services/service-icon3.png"
import icon4 from "../../images/services/service-icon4.png"

import shape2 from "../../images/shape/circle-shape2.png"

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              Our Core Services
            </span>
            <h2>Empowering Your Digital Future with Tailored Solutions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon1} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Tailored Digital Platform Development
                  </Link>
                </h3>
                <p>
                  We craft bespoke digital platforms that align perfectly with
                  your vision and market needs. Our development process is
                  iterative and collaborative, ensuring that the end product not
                  only meets but exceeds your expectations.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon2} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Tech Team Building & Training
                  </Link>
                </h3>
                <p>
                  We don't just build products; we build teams. Our expertise
                  extends to assembling and training high-performance tech teams
                  that can drive your project forward long after our engagement
                  ends.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    {" "}
                    Cloud-Native Architecture Design
                  </Link>
                </h3>
                <p>
                  Leverage the power of the cloud with our expertly designed
                  cloud-native architectures. We ensure your platform is
                  scalable, resilient, and optimised for performance from day
                  one.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <img src={icon4} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Continuous Delivery Pipeline Setup
                  </Link>
                </h3>
                <p>
                  We implement robust continuous delivery pipelines that
                  streamline your development process, enabling rapid iterations
                  and seamless deployments.
                </p>

                <Link to="/services/service-details" className="read-more-btn">
                  Read More <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape2">
          <img src={shape2} alt="banner" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  )
}

export default OurServices
