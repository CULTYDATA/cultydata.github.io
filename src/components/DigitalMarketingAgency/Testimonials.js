import React from "react"
import client1 from "../../images/user1.jpg"
import client2 from "../../images/user2.jpg"
import client3 from "../../images/user3.jpg"
import shape9 from "../../images/shape/vector-shape9.png"
import shape10 from "../../images/shape/vector-shape10.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-area bg-23173a pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients are Saying?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
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
                slidesPerView: 2,
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="testimonial" />
                    <div className="title">
                      <h3>Alex Maxwell</h3>
                      <span>CEO at EnvyTheme</span>
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
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="vector-shape9">
          <img src={shape9} alt="shape" />
        </div>
        <div className="vector-shape10">
          <img src={shape10} alt="shape" />
        </div>
      </section>
    </>
  )
}

export default Testimonials
