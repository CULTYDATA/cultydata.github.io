import React from "react"

import FunIcon1 from "../../images/funfacts/fun-icon1.png"
import FunIcon2 from "../../images/funfacts/fun-icon2.png"
import FunIcon3 from "../../images/funfacts/fun-icon3.png"
import FunIcon4 from "../../images/funfacts/fun-icon4.png"

const Funfacts = () => {
  return (
    <>
      <div className="funfacts-area bg-image pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={FunIcon1} alt="FunIcon" />
                </div>
                <h3>10 Years</h3>
                <p>On the market</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={FunIcon2} alt="FunIcon" />
                </div>
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={FunIcon3} alt="FunIcon" />
                </div>
                <h3>100%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6 col-md-3">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={FunIcon4} alt="FunIcon" />
                </div>
                <h3>90%</h3>
                <p>Senior Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Funfacts
