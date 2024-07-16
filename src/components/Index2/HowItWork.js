import React from "react"
import starIcon from "../../images/shape/icon.svg"
import process1 from "../../images/process/process1.png"
import process2 from "../../images/process/process2.png"
import process3 from "../../images/process/process3.png"
import process4 from "../../images/process/process4.png"
import process5 from "../../images/process/process5.png"
import process6 from "../../images/process/process6.png"
import shape1 from "../../images/shape/circle-shape1.png"

const HowItWork = () => {
  return (
    <>
      <section className="process-area ptb-50">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="banner" />
              How It's Work
            </span>
            <h2>Our 3-Phase Approach to Digital Success</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">1</div>
                <div className="image">
                  <img src={process1} alt="banner" />
                </div>
                <h3>Needs Assessment & Strategic Planning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">2</div>
                <div className="image">
                  <img src={process2} alt="banner" />
                </div>
                <h3>Agile Development & Cloud-Native Implementation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">3</div>
                <div className="image">
                  <img src={process3} alt="banner" />
                </div>
                <h3>Team Organization & Seamless Handover</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box ">
                <div className="number">4</div>
                <div className="image">
                  <img src={process4} alt="banner" />
                </div>
                <h3>Explore the Data</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">5</div>
                <div className="image">
                  <img src={process5} alt="banner" />
                </div>
                <h3>Perform In-depth Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="number">6</div>
                <div className="image">
                  <img src={process6} alt="banner" />
                </div>
                <h3>Communicate Results</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape1} alt="banner" />
        </div>
      </section>
    </>
  )
}

export default HowItWork
