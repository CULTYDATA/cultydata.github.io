import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import img1 from "../../images/about/about-us1.png"
import starIcon from "../../images/shape/icon.svg"
import icon1 from "../../images/icons/icon1.png"
import icon2 from "../../images/icons/icon2.png"
import img2 from "../../images/about/about-us2.png"

import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  const { t } = useTranslation()
  return (
    <>
      <section className="about-area ptb-50">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={img1} alt="banner" className="sec-img-one" />
                <img
                  src={img2}
                  alt="banner"
                  className="sec-img-two img-six"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title justify-content-center">
                    <img src={starIcon} alt="banner" />
                    {t("home.aboutUs.subTitle")}
                  </span>
                  <h2>{t("home.aboutUs.title")}</h2>
                  <p>
                    {t("home.aboutUs.txt.1")}
                    <b className="bold-text"> {t("home.aboutUs.txt.2")}</b>{" "}
                    {t("home.aboutUs.txt.3")}
                  </p>

                  <ul className="features-list">
                    <li>
                      <img src={icon1} alt="banner" width="20%" />
                      <h3> {t("home.aboutUs.txt.4")}</h3>
                      <p> {t("home.aboutUs.txt.5")}</p>
                    </li>

                    <li>
                      <img src={icon2} alt="banner" width="20%" />
                      <h3> {t("home.aboutUs.txt.6")}</h3>
                      <p> {t("home.aboutUs.txt.7")}</p>
                    </li>
                  </ul>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    {t("home.button.moreAboutUs")}
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
