import React from "react"

const CaseStudiesSidebar = ({
  client,

  location,
  technologies,
  completedDate,
  website,
}) => {
  return (
    <div className="case-studies-sidebar-sticky">
      <div className="case-studies-details-info">
        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-user-pin"></i>
            </div>
            <span>Client:</span>

            {client}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-map"></i>
            </div>
            <span>Location:</span>
            {location}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-purchase-tag"></i>
            </div>
            <span>Technologies:</span>
            {technologies.join(", ")}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-check"></i>
            </div>
            <span>Completed:</span>
            {completedDate}
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-globe"></i>
            </div>
            <span>Website:</span>
            <a href={website.url} target="_blank" rel="noreferrer">
              {website.name}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudiesSidebar
