import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import course1 from "../../images/courses/course1.jpg"

// functional component
const CoursesDetailsSidebar = () => {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="courses-details-info">
        <div className="image">
          <img src={course1} alt="course1" />

          <div
            onClick={() => setToggler(!toggler)}
            className="link-btn"
            aria-hidden="true"
          ></div>

          <div className="content">
            <i className="flaticon-google-play"></i>
            <span>Course Preview</span>
          </div>
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-price-tag"></i> Price
              </span>
              $49
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-teacher"></i> Instructor
              </span>
              Sarah Taylor
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-stopwatch"></i> Duration
              </span>
              7 weeks
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-education"></i> Lessons
              </span>
              25
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-web"></i> Enrolled
              </span>
              255 students
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-open-padlock"></i> Access
              </span>
              Lifetime
            </div>
          </li>
        </ul>

        <div className="btn-box">
          <Link to="#" className="default-btn">
            <i className="flaticon-shopping-basket"></i>
            Add to Cart <span></span>
          </Link>
          <Link to="#" className="default-btn">
            <i className="flaticon-price-tag"></i>
            Buy Now <span></span>
          </Link>
        </div>

        <div className="courses-share">
          <div className="share-info">
            <span>
              Share This Course <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  className="d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesDetailsSidebar
