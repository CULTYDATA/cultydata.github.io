import React from "react"
import { Link } from "gatsby"
import AOS from "aos"

import Banner4Shape1 from "../../images/main-banner/banner-four/banner-four-shape1.png"
import Banner4Shape2 from "../../images/main-banner/banner-four/banner-four-shape2.png"
import Banner4Shape3 from "../../images/main-banner/banner-four/banner-four-shape3.png"
import Banner4Shape4 from "../../images/main-banner/banner-four/banner-four-shape4.png"
import Banner4Shape5 from "../../images/main-banner/banner-four/banner-four-shape5.png"
import Banner4Shape6 from "../../images/main-banner/banner-four/banner-four-shape6.png"
import Banner4Shape7 from "../../images/main-banner/banner-four/banner-four-shape7.png"
import Banner4Shape8 from "../../images/main-banner/banner-four/banner-four-shape8.png"
import Banner4Shape9 from "../../images/main-banner/banner-four/banner-four-shape9.png"
import Banner4Shape10 from "../../images/main-banner/banner-four/banner-four-shape10.png"
import Banner4MainImage from "../../images/main-banner/banner-four/banner-four-main-img.png"

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="banner-wrapper overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Managed Analytics and Data Analysis Platform
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  We have created a cloud based tool to do your all boring tasks
                  related to data analysis and decesion making based on the
                  nature of data!
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    About Us <span></span>
                  </Link>
                  <Link to="/profile-authentication" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-wrapper-animation-image">
                <img
                  src={Banner4Shape1}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape2}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape3}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape4}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape5}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape6}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape7}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape8}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInLeft animate__delay-1s"
                />
                <img
                  src={Banner4Shape9}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4Shape10}
                  alt="Banner4Shape"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />
                <img
                  src={Banner4MainImage}
                  alt="Banner4MainImage"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
