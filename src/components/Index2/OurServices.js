import React, { useState } from "react"

import serviceIcon7 from "../../images/services/digital1.png"
import serviceIcon7Hover from "../../images/services/hoverdigital1.png"
import serviceIcon8 from "../../images/services/Team1.png"
import serviceIcon8Hover from "../../images/services/hoverteam1.png"
import serviceIcon10 from "../../images/services/Cloud1.png"
import serviceIcon10Hover from "../../images/services/cloud-hover1.png"
import serviceIcon12 from "../../images/services/delivery1.png"
import serviceIcon12Hover from "../../images/services/hoverdelivery1.png"
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
    <>
      <section className="services-area pb-70">
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
              <div
                className="single-process-box display-flex-center "
                style={{ height: "90%" }}
                onMouseEnter={() => handleMouseEnter("serviceIcon7")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img
                    src={
                      hoveredIcon === "serviceIcon7"
                        ? serviceIcon7Hover
                        : serviceIcon7
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
                    iterative and collaborative, ensuring that the end product
                    not only meets but exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-process-box display-flex-center"
                onMouseEnter={() => handleMouseEnter("serviceIcon8")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img
                    src={
                      hoveredIcon === "serviceIcon8"
                        ? serviceIcon8Hover
                        : serviceIcon8
                    }
                    alt="services"
                    width="60%"
                  />
                </div>
                <div>
                  <h3>Tech Team Building & Training</h3>
                  <p>
                    We don't just build products; we build teams. Our expertise
                    extends to assembling and training high-performance tech
                    teams that can drive your project forward long after our
                    engagement ends.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-process-box display-flex-center"
                onMouseEnter={() => handleMouseEnter("serviceIcon10")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img
                    src={
                      hoveredIcon === "serviceIcon10"
                        ? serviceIcon10Hover
                        : serviceIcon10
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
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="single-process-box display-flex-center"
                onMouseEnter={() => handleMouseEnter("serviceIcon12")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img
                    src={
                      hoveredIcon === "serviceIcon12"
                        ? serviceIcon12Hover
                        : serviceIcon12
                    }
                    alt="services"
                    width="50%"
                  />
                </div>
                <div>
                  <h3>Continuous Delivery Pipeline Setup</h3>
                  <p>
                    We implement robust continuous delivery pipelines that
                    streamline your development process, enabling rapid
                    iterations and seamless deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurServices
