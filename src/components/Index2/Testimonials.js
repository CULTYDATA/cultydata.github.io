import React from "react"

import starIcon from "../../images/shape/icon.svg"
import client1 from "../../images/testimonials/client1.jpg"

import shape from "../../images/shape/shape1.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area bg-fefbf1 pt-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="testimonial" />
              Testimonials
            </span>
            <h2>What Our Clients are Saying?</h2>
            <p>
              Here's what our clients have to say about their experiences with
              Cultydata Studio.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Working with Cultydata Studio has been transformative for our
                  business. Their expertise and dedication are unparalleled.
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="testimonial" />
                    <div className="title">
                      <h3>John Doe,</h3>
                      <span>CEO of Tech Innovators</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client2} alt="testimonial" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>CEO at Envato</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client3} alt="testimonial" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>CEO at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>

          {/* <div className="testimonials-view-btn text-center">
            <Link to="/testimonials" className="default-btn">
              <i className="flaticon-view"></i>
              Check Out All Reviews <span></span>
            </Link>
          </div> */}
        </div>

        <div className="shape-img1">
          <img src={shape} alt="testimonial" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
