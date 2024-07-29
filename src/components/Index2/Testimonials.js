import React from "react"
import starIcon from "../../images/shape/icon.svg"
import client1 from "../../images/testimonials/client1.jpg"
import shape from "../../images/shape/shape1.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Testimonials = () => {
  const { t } = useTranslation()

  const testimonialsData = [
    {
      feedback: t("testimonials.client1.feedback"),
      name: t("testimonials.client1.name"),
      position: t("testimonials.client1.position"),
    },
  ]

  return (
    <div className="testimonials-area bg-fefbf1 pt-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonial" />
            {t("testimonials.subTitle")}
          </span>
          <h2>{t("testimonials.title")}</h2>
          <p>{t("testimonials.description")}</p>
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
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="single-testimonials-item">
                <p>{testimonial.feedback}</p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="testimonial" />
                    <div className="title">
                      <h3>{testimonial.name},</h3>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="shape-img1">
        <img src={shape} alt="testimonial" />
      </div>
    </div>
  )
}

export default Testimonials
