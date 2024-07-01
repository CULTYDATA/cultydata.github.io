import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import study1 from "../../images/case-study/case-study1.jpg"
import study2 from "../../images/case-study/case-study2.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const CaseStudySlider = () => {
  return (
    <>
      <div className="case-study-area bg-fffbf5">
        <Swiper
          navigation={true}
          autoplay={{
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="case-study-slides"
        >
          <SwiperSlide>
            <div className="single-case-study-item ptb-100">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="case-study-content">
                      <span className="sub-title">
                        <img src={starIcon} alt="banner" />
                        Case study #1
                      </span>
                      <h2>Data Science in Pharmaceutical Industries</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>

                      <Link to="/case-studies/case-studies-details" className="default-btn">
                        <i className="flaticon-view"></i>
                        Details More <span></span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="case-study-image">
                      <Link to="/case-studies/case-studies-details" className="d-block">
                        <img src={study1} alt="banner" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-case-study-item ptb-100">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="case-study-content">
                      <span className="sub-title">
                        <img src={starIcon} alt="banner" />
                        Case study #2
                      </span>
                      <h2>Mathematics, Advanced Statistics in Python</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>

                      <Link to="/case-studies/case-studies-details" className="default-btn">
                        <i className="flaticon-view"></i>
                        Details More <span></span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="case-study-image">
                      <Link to="/case-studies/case-studies-details" className="d-block">
                        <img src={study2} alt="banner" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default CaseStudySlider
