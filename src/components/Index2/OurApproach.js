import React from "react"

import StarIcon from "../../images/star-icon.png"
import HowitsWork from "../../images/main2.png"

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
                <h2>Our Proven Process: The Path to Digital Success</h2>

                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>Needs Assessment & Strategic Planning</h3>
                    <p>
                      We begin by diving deep into your vision, market, and
                      requirements. Our team conducts thorough analyses to craft
                      a comprehensive strategy tailored to your unique needs.
                      This phase sets the foundation for a successful project,
                      aligning our efforts with your business goals.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Agile Development & Cloud-Native Implementation</h3>
                    <p>
                      Utilising agile methodologies, we bring your vision to
                      life through iterative development cycles. Our
                      cloud-native approach ensures that your platform is built
                      for scalability and performance from the ground up.
                      Regular check-ins and demonstrations keep you in the loop
                      throughout the process.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>Team Organization & Seamless Handover</h3>
                    <p>
                      As development progresses, we focus on building and
                      training your internal team. We ensure a smooth transition
                      of knowledge and capabilities, empowering your
                      organisation to take full ownership of the platform. Our
                      goal is to leave you with not just a product, but the
                      skills and structure to drive ongoing success.
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
