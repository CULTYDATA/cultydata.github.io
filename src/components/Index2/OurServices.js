import React, { useState } from "react"

import serviceIcon1 from "../../images/services/core-service-1.png"
import serviceIcon1Hover from "../../images/services/core-service-1-hover.png"
import serviceIcon2 from "../../images/services/core-service-2.png"
import serviceIcon2Hover from "../../images/services/core-service-2-hover.png"
import serviceIcon3 from "../../images/services/core-service-3.png"
import serviceIcon3Hover from "../../images/services/core-service-3-hover.png"
import serviceIcon4 from "../../images/services/core-service-4.png"
import serviceIcon4Hover from "../../images/services/core-service-4-hover.png"
import starIcon from "../../images/shape/icon.svg"

const OurServices = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const handleMouseEnter = iconName => {
    setHoveredIcon(iconName)
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  return (
    <section className="services-area ptb-50">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="banner" />
            Our Core Services
          </span>
          <h2>Empowering Your Digital Future with Tailored Solutions</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <button
              className="single-process-box display-flex-center"
              style={{ height: "90%" }}
              onMouseEnter={() => handleMouseEnter("serviceIcon1")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon">
                <img
                  src={
                    hoveredIcon === "serviceIcon1"
                      ? serviceIcon1Hover
                      : serviceIcon1
                  }
                  alt="services"
                  width="60%"
                />
              </div>
              <div>
                <h3>Tailored Digital Platform Development</h3>
                <p>
                  We craft bespoke digital platforms that align perfectly with
                  your vision and market needs. Our development process is
                  iterative and collaborative, ensuring that the end product not
                  only meets but exceeds your expectations.
                </p>
              </div>
            </button>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <button
              className="single-process-box display-flex-center"
              onMouseEnter={() => handleMouseEnter("serviceIcon2")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon">
                <img
                  src={
                    hoveredIcon === "serviceIcon2"
                      ? serviceIcon2Hover
                      : serviceIcon2
                  }
                  alt="services"
                  width="60%"
                />
              </div>
              <div>
                <h3>Tech Team Building & Training</h3>
                <p>
                  We don't just build products; we build teams. Our expertise
                  extends to assembling and training high-performance tech teams
                  that can drive your project forward long after our engagement
                  ends.{" "}
                </p>
              </div>
            </button>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <button
              className="single-process-box display-flex-center"
              onMouseEnter={() => handleMouseEnter("serviceIcon3")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon">
                <img
                  src={
                    hoveredIcon === "serviceIcon3"
                      ? serviceIcon3Hover
                      : serviceIcon3
                  }
                  alt="services"
                  width="60%"
                />
              </div>
              <div>
                <h3>Cloud-Native Architecture Design</h3>
                <p>
                  Leverage the power of the cloud with our expertly designed
                  cloud-native architectures. We ensure your platform is
                  scalable, resilient, and optimized for performance from day
                  one.
                </p>
              </div>
            </button>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <button
              className="single-process-box display-flex-center"
              onMouseEnter={() => handleMouseEnter("serviceIcon4")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon">
                <img
                  src={
                    hoveredIcon === "serviceIcon4"
                      ? serviceIcon4Hover
                      : serviceIcon4
                  }
                  alt="services"
                  width="50%"
                />
              </div>
              <div>
                <h3>Continuous Delivery Pipeline Setup</h3>
                <p>
                  We implement robust continuous delivery pipelines that
                  streamline your development process, enabling rapid iterations
                  and seamless deployments.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
