import React from "react"
import { Link } from "gatsby"
import serviceIcon7 from "../../images/services/TDPD.png"
import serviceIcon8 from "../../images/services/ttbt.png"
import starIcon from "../../images/star-icon.png"

import serviceIcon10 from "../../images/services/cna.png"

import serviceIcon12 from "../../images/services/flexibility.png"
import serviceShape4 from "../../images/services/service-shape4.png"

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              Our Core Services
            </span>
            <h2>Empowering Your Digital Future with Tailored Solutions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon7} alt="services" />
                </div>
                <h3>
                  <Link to="/services/tailored-digital-platform-development">
                    Tailored Digital Platform Development
                  </Link>
                </h3>
                <p>
                  We craft bespoke digital platforms that align perfectly with
                  your vision and market needs. Our development process is
                  iterative and collaborative, ensuring that the end product not
                  only meets but exceeds your expectations.
                </p>
                <Link
                  to="/services/tailored-digital-platform-development"
                  className="learn-more-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-5   col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon8} alt="services" />
                </div>
                <h3>
                  <Link to="/services/tech-team-building-training/">
                    {" "}
                    Tech Team Building & Training
                  </Link>
                </h3>
                <p>
                  We don't just build products; we build teams. Our expertise
                  extends to assembling and training high-performance tech teams
                  that can drive your project forward long after our engagement
                  ends.{" "}
                </p>
                <Link
                  to="/services/tech-team-building-training/"
                  className="learn-more-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon10} alt="services" />
                </div>
                <h3>
                  <Link to="/services/cloud-native-architecture-design/">
                    Cloud-Native Architecture Design
                  </Link>
                </h3>
                <p>
                  Leverage the power of the cloud with our expertly designed
                  cloud-native architectures. We ensure your platform is
                  scalable, resilient, and optimized for performance from day
                  one.
                </p>
                <Link
                  to="/services/cloud-native-architecture-design/"
                  className="learn-more-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={serviceIcon12} alt="services" />
                </div>
                <h3>
                  <Link to="/services/continuous-delivery-pipeline-setup/">
                    Continuous Delivery Pipeline Setup
                  </Link>
                </h3>
                <p>
                  We implement robust continuous delivery pipelines that
                  streamline your development process, enabling rapid iterations
                  and seamless deployments.
                </p>
                <Link
                  to="/services/continuous-delivery-pipeline-setup/"
                  className="learn-more-btn"
                >
                  <i className="flaticon-right"></i>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurServices
