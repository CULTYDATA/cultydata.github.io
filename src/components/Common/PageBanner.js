import React from "react"
import { Link } from "gatsby"

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  sectionUrl = null,
  sectionPageText = null,
}) => {
  return (
    <div className="qk-page-banner">
      <div className="container">
        <div className="qk-page-banner__content">
          <h1>{pageTitle}</h1>
          <ul className="qk-page-banner__breadcrumb">
            <li>
              <Link to={homePageUrl}>{homePageText}</Link>
            </li>
            {sectionUrl && sectionPageText && (
              <li>
                <Link to={sectionUrl}>{sectionPageText}</Link>
              </li>
            )}
            <li className="active">{activePageText}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageBanner
