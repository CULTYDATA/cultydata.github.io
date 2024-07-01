import React from "react"
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
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link to={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape1} alt="banner" />
        </div>
        <div className="shape-img2">
          <img src={shape2} alt="banner" />
        </div>
        <div className="shape-img3">
          <img src={shape3} alt="banner" />
        </div>
      </div>
    </>
  )
}

export default PageBanner
