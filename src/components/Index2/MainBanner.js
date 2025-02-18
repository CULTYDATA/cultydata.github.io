import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import img1 from "../../images/main-banner/main1.png"
import shape2 from "../../images/shape/shape2.png"

import lineborder from "../../images/line-round.svg"

import { useTranslation } from "gatsby-plugin-react-i18next"

const MainBanner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  const { t } = useTranslation()

  return (
    <>
      <div className="main-banner overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  style={{ fontSize: "45px" }}
                >
                  {t("home.mainBanner.title")}
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {t("home.mainBanner.txt.1")}{" "}
                  <b className="bold-text">{t("home.mainBanner.txt.2")}</b>
                  {t("home.mainBanner.txt.3")}
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    {t("home.button.learnMore")} <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="main-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={img1} alt="banner" width="90%" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="cube-img1"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <img src={lineborder} alt="shape" width="40%" />
        </div>

        <div className="shape-img22">
          <img src={shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
