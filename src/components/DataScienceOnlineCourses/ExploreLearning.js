import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"
import learning from "../../images/explore-learning.jpg"

const ExploreLearning = () => {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="explore-learning-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="explore-learning-content">
                <h2>Build Your Data Science Analytics Skills Online</h2>
                <p>
                  Want to learn and earn PDUs or CEUs on your schedule —
                  anytime, anywhere? Or, pick up a new skill quickly like,
                  project team leadership or agile? Browse our most popular
                  online courses.
                </p>
                <Link to="#" className="explore-learing-btn">
                  Explore Learing
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="explore-learning-video">
                <img src={learning} alt="learning" />

                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn"
                  aria-hidden="true"
                >
                  <i className="flaticon-google-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreLearning
