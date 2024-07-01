import React from "react"
import { Link } from "gatsby"
import AOS from "aos"

import MainImage from "../../images/main-banner/main-pic1.png"

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="main-banner-area overflow-hidden">
        <div className="container">
          <div className="banner-area-content">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Big Data, AI & ML Consulting!
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Get all kinds of hi-tech decesion making consulting services using
              Artificial Intelligence and Machine Learning from one umbrella.
            </p>

            <div
              className="banner-btn"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Link to="/contact" className="default-btn">
                <i className="flaticon-web"></i>
                Work With Us <span></span>
              </Link>
            </div>

            <img
              src={MainImage}
              alt="Banner"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
