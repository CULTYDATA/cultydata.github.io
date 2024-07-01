import React from "react"
import starIcon from "../../images/star-icon.png"
import history1 from "../../images/history/history1.jpg"
import history2 from "../../images/history/history2.jpg"
import history3 from "../../images/history/history3.jpg"
import history4 from "../../images/history/history4.jpg"

const OurHistoryContentTwo = () => {
  return (
    <>
      <div className="history-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Our History
            </span>
            <h2>History Begins in 2010</h2>
          </div>

          <ol className="timeline history-timeline history-timeline-style-two">
            <li className="timeline-block">
              <div className="timeline-date">
                <span>2010</span>
                February 20
                <sup>th</sup>
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history1} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Founded</h3>
                      <p>
                        Real innovations and a positive customer experience are
                        the heart of successful communication. Lorem ipsum dolor
                        sit amet, sectetur adipiscing elit, tempor incididunt ut
                        labore et dolore magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2013</span>
                January 14
                <sup>th</sup>
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history2} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Global Success</h3>
                      <p>
                        Real innovations and a positive customer experience are
                        the heart of successful communication. Lorem ipsum dolor
                        sit amet, sectetur adipiscing elit, tempor incididunt ut
                        labore et dolore magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2016</span>
                March 25
                <sup>th</sup>
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history3} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Founded Data Center</h3>
                      <p>
                        Real innovations and a positive customer experience are
                        the heart of successful communication. Lorem ipsum dolor
                        sit amet, sectetur adipiscing elit, tempor incididunt ut
                        labore et dolore magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date">
                <span>2020</span>
                December 10
                <sup>th</sup>
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history4} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>International Award</h3>
                      <p>
                        Real innovations and a positive customer experience are
                        the heart of successful communication. Lorem ipsum dolor
                        sit amet, sectetur adipiscing elit, tempor incididunt ut
                        labore et dolore magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default OurHistoryContentTwo
