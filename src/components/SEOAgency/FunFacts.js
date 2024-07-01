import React from "react"
import icon1 from "../../images/funfacts/fun-icon1.png"
import icon2 from "../../images/funfacts/fun-icon2.png"
import icon3 from "../../images/funfacts/fun-icon3.png"
import icon4 from "../../images/funfacts/fun-icon4.png"

const FunFacts = () => {
  return (
    <>
      <section className="funfacts-area bg-image pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-6">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={icon1} alt="fun" />
                </div>
                <h3>10 Years</h3>
                <p>On the market</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={icon2} alt="fun" />
                </div>
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={icon3} alt="fun" />
                </div>
                <h3>100%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-6">
              <div className="single-funfacts-item">
                <div className="icon">
                  <img src={icon4} alt="fun" />
                </div>
                <h3>90%</h3>
                <p>Senior Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FunFacts
