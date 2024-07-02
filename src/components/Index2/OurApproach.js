import React from "react"

import StarIcon from "../../images/star-icon.png"
import HowitsWork from "../../images/how-its-work.png"

const HowItWork = () => {
  return (
    <>
      <section className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <img src={StarIcon} alt="Icon" />
                  How It's Work
                </span>
                <h2>Our 3-Phase Approach to Digital Success</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>Needs Assessment & Strategic Planning</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Agile Development & Cloud-Native Implementation</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>Team Organization & Seamless Handover</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <img src={HowitsWork} alt="How it's Work" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWork
