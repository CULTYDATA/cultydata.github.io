import React from "react"
import AOS from "aos"
import { Link } from "gatsby"
import shape1 from "../../images/shape/shape1.svg"
import shape2 from "../../images/shape/shape2.png"
import shape3 from "../../images/shape/shape3.png"

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="page-title-area">
      <div className="container case-study-more-btn">
        <div className="page-title-content">
          <h2
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {pageTitle}
          </h2>
          <ul
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <li>
              <Link to={homePageUrl}>{homePageText}</Link>
            </li>
            <li>{activePageText}</li>
          </ul>
        </div>
      </div>

      <div className="shape-img1">
        <img src={shape1} alt="shape" />
      </div>
      <div className="shape-img2">
        <img src={shape2} alt="shape" />
      </div>
      <div className="shape-img3">
        <img src={shape3} alt="shape" />
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default PageBanner
