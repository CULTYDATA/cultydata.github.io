import React from "react"
import AOS from "aos"

import { Link } from "gatsby"
import img1 from "../../images/banner11.png"

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="main-banner overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Empowering Your Digital Vision: From Concept to Scale-Ready
                  Platform
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    Learn More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={img1} alt="banner" width="80%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
