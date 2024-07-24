import React from "react"
import starIcon from "../../images/shape/icon.svg"
import process1 from "../../images/history/planning.jpg"
import process2 from "../../images/history/agile-development.jpg"
import process3 from "../../images/history/team-organisation.jpg"

const OurProvenProcess = () => {
  return (
    <>
      <div className="history-area ptb-50">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Our Proven Process
            </span>
            <h2>The Path to Digital Success</h2>
          </div>

          <ol className="timeline history-timeline history-timeline-style-two">
            <li className="timeline-block">
              <div className="timeline-icon">
                <span className="number-badge">1</span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={process1} alt="about" width="95%" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Needs Assessment & Strategic Planning</h3>
                      <p>
                        We begin by diving deep into your vision, market, and
                        requirements. Our team conducts thorough analyses to
                        craft a comprehensive strategy tailored to your unique
                        needs. This phase sets the foundation for a successful
                        project, aligning our efforts with your business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-date"></div>

              <div className="timeline-icon">
                <span className="number-badge">2</span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={process2} alt="about" width="95%" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Agile Development & Cloud-Native Implementation</h3>
                      <p>
                        Utilizing agile methodologies, we bring your vision to
                        life through iterative development cycles. Our
                        cloud-native approach ensures that your platform is
                        built for scalability and performance from the ground
                        up. Regular check-ins and demonstrations keep you in the
                        loop throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-block">
              <div className="timeline-icon">
                <span className="number-badge">3</span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={process3} alt="about" width="95%" />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Team Organization & Seamless Handover</h3>
                      <p>
                        As development progresses, we focus on building and
                        training your internal team. We ensure a smooth
                        transition of knowledge and capabilities, empowering
                        your organization to take full ownership of the
                        platform. Our goal is to leave you with not just a
                        product, but the skills and structure to drive ongoing
                        success.
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

export default OurProvenProcess
