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

const BestPractice = () => {
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
        <div className="section-title text-center">
          <span className="sub-title">
            <img src={starIcon} alt="banner" />
            Our Best practices
          </span>
          <h2>Future-Proofing Your Business with our best practices</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <button
              className="single-process-box"
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
                  className="service-icon"
                />
              </div>
              <div>
                <h3>Scalability by Design</h3>
                <ul>
                  <li>Architectures optimized for growth.</li>
                  <li>Accommodates increasing user base and data volume.</li>
                </ul>
              </div>
            </button>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <button
              className="single-process-box"
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
                  className="service-icon"
                />
              </div>
              <div>
                <h3>Optimized Cloud Infrastructure</h3>
                <ul>
                  <li>Cost-effective cloud solutions.</li>
                  <li>Scales dynamically, maximizing resource utilization.</li>
                </ul>
              </div>
            </button>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <button
              className="single-process-box"
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
                  className="service-icon"
                />
              </div>
              <div>
                <h3>Cloud-Native Foundations</h3>
                <ul>
                  <li>Leveraging cloud capabilities.</li>
                  <li>High-performance, resilient, and scalable platforms.</li>
                </ul>
              </div>
            </button>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <button
              className="single-process-box"
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
                  className="service-icon"
                />
              </div>
              <div>
                <h3>Accelerated Delivery</h3>
                <ul>
                  <li>Implementing continuous delivery pipelines.</li>
                  <li>Rapid, efficient software releases.</li>
                </ul>
              </div>
            </button>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <button
              className="single-process-box"
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
                  className="service-icon"
                />
              </div>
              <div>
                <h3>Robust Architecture</h3>
                <ul>
                  <li>Fault-tolerant designs.</li>
                  <li>
                    Ensuring uninterrupted service, even in challenging
                    conditions
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestPractice
