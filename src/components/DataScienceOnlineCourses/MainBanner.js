import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerShape1 from "../../images/main-banner/banner-three/banner-three-shape1.png"
import bannerShape2 from "../../images/main-banner/banner-three/banner-three-shape2.png"
import bannerShape3 from "../../images/main-banner/banner-three/banner-three-shape3.png"
import bannerShape4 from "../../images/main-banner/banner-three/banner-three-shape4.png"
import bannerShape5 from "../../images/main-banner/banner-three/banner-three-shape5.png"
import bannerShape6 from "../../images/main-banner/banner-three/banner-three-shape6.png"
import bannerShape7 from "../../images/main-banner/banner-three/banner-three-shape7.png"
import bannerShape8 from "../../images/main-banner/banner-three/banner-three-shape8.png"
import bannerShape9 from "../../images/main-banner/banner-three/banner-three-shape9.png"
import bannerShape10 from "../../images/main-banner/banner-three/banner-three-shape10.png"
import bannerImg from "../../images/main-banner/banner-three/banner-three-main-img.png"
import shape7 from "../../images/shape/vector-shape7.png"
import shape8 from "../../images/shape/vector-shape8.png"

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="hero-banner overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="hero-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Learn Data Science
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Keeping your skills up to date is essential and learning Data
                  Science including oportunites on Big Data can drive you to
                  become extraordinary professionals.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/events" className="default-btn">
                    <i className="flaticon-right"></i>
                    Explore Bootcamps <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="hero-banner-animation-image">
                <img
                  src={bannerShape1}
                  alt="features"
                  className="animate__animated animate__fadeInLeft animate__delay-1s"
                />

                <img
                  src={bannerShape2}
                  alt="features"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                />

                <img
                  src={bannerShape3}
                  alt="features"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                />

                <img
                  src={bannerShape4}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerShape5}
                  alt="features"
                  className="animate__animated animate__fadeInLeft animate__delay-1s"
                />

                <img
                  src={bannerShape6}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerShape7}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerShape8}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerShape9}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerShape10}
                  alt="features"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={bannerImg}
                  alt="features"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape7">
          <img src={shape7} alt="features" />
        </div>

        <div className="vector-shape8">
          <img src={shape8} alt="features" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
