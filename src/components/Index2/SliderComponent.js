import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper"

const SliderComponent = ({ slidesData }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="pt-40"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="col-sm-12">
            <div className="overview-box">
              <div className="overview-image">
                <div className="image">
                  <img src={slide.image} alt="features" width="60%" />
                </div>
              </div>
              <div className="overview-content">
                <div className="content right-content">
                  <h1>{slide.heading}</h1>
                  <p>{slide.content}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderComponent
