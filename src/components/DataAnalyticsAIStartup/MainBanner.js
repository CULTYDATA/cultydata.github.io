import React, { useState } from "react"
import AOS from "aos";
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import img1 from "../../images/main-banner/banner-two/banner-two-shape1.png"
import img2 from "../../images/main-banner/banner-two/banner-two-shape2.png"
import img3 from "../../images/main-banner/banner-two/banner-two-shape3.png"
import img4 from "../../images/main-banner/banner-two/banner-two-shape4.png"
import img5 from "../../images/main-banner/banner-two/banner-two-shape5.png"
import img6 from "../../images/main-banner/banner-two/banner-two-shape6.png"
import img7 from "../../images/main-banner/banner-two/banner-two-shape7.png"
import img8 from "../../images/main-banner/banner-two/banner-two-shape8.png"
import img9 from "../../images/main-banner/banner-two/banner-two-shape9.png"
import img10 from "../../images/main-banner/banner-two/banner-two-shape10.png"
import img11 from "../../images/main-banner/banner-two/banner-two-shape11.png"
import img12 from "../../images/main-banner/banner-two/banner-two-shape12.png"
import img13 from "../../images/main-banner/banner-two/banner-two-main-img.png"

const MainBanner = () => {
  const [toggler, setToggler] = useState(false)

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="banner-section overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Data Analytics Consulting Services
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  World leading reliable research & AI based Data Analytics
                  solutions for Big Data companies and consumer business
                  products. Drive your success without stress!
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

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                    aria-hidden="true"
                  >
                    <i className="flaticon-google-play"></i> Watch Video
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="banner-animation-image">
                <img
                  src={img1}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img2}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img3}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img4}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img5}
                  alt="banner"
                  className="animate__animated animate__fadeInUp animate__delay-1s"
                />

                <img
                  src={img6}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img7}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img8}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img9}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img10}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img11}
                  alt="banner"
                  className="animate__animated animate__fadeInDown animate__delay-1s"
                />

                <img
                  src={img12}
                  alt="banner"
                  className="animate__animated animate__fadeInLeft animate__delay-1s"
                />

                <img src={img13} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
