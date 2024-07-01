import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import bannerImg2 from "../../images/banner-img2.png"

const Banner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="seo-agency-banner overflow-hidden">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-wrapper-content">
                <span className="sub-title">SEO Agency</span>

                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Creative & Strategic Digital SEO Agency
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
                    About Us
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="banner-wrapper-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={bannerImg2} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
