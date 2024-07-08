import React from "react"
import starIcon from "../../images/star-icon.png"
import howItWork from "../../images/whyChooseus.png"

const WhyChooseUs = () => {
  return (
    <>
      <section className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  People Love Us
                </span>
                <h2>Why Choose Us?</h2>
                <p>
                  With decades of combined tech experience, adaptable
                  cross-disciplinary skills, a result-driven culture, and a
                  proven collaborative team, we ensure your project's success.
                </p>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">1</div>
                    <h3>XX+ Years of Combined Cutting-Edge Tech Experience</h3>
                    <p>
                      At Cultydata Studio, we bring together a powerhouse of
                      tech savvy and entrepreneurial spirit. Our team boasts
                      over 50 years of combined experience in cutting-edge
                      technologies, ensuring that your project benefits from the
                      latest innovations and best practices in the digital
                      realm.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">2</div>
                    <h3>Cross-Disciplinary Skills Adaptable to Any Industry</h3>
                    <p>
                      We pride ourselves on our versatility. Our
                      cross-disciplinary skills allow us to adapt seamlessly to
                      any industry, bringing fresh perspectives and innovative
                      solutions to your unique challenges. From fintech to e-
                      commerce, we've got you covered.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">3</div>
                    <h3>Result-Driven Culture at Your Service</h3>
                    <p>
                      Our commitment to your success is unwavering. We foster a
                      results- driven culture that prioritises tangible outcomes
                      and measurable growth. Your goals become our mission, and
                      we work tirelessly to exceed expectations at every turn.
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="count-box">4</div>
                    <h3>Complementary Team with Proven Collaboration</h3>
                    <p>
                      Our cohesive team excels in working together, combining
                      strengths to drive success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-image">
                <img src={howItWork} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
