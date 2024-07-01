import React from "react"
import { Link } from "gatsby"

const UpcomingBootcamps = () => {
  return (
    <>
      <div className="upcoming-bootcamps-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="upcoming-bootcamps-content">
            <h2>Check Full Schedule for In-person Data Science Bootcamps</h2>

            <Link to="/events" className="default-btn">
              <i className="flaticon-right"></i>
              Check Out All Bootcamps <span></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingBootcamps
