import React from "react"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"

const TestimonialsStyleOne = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Testimonials
            </span>
            <h2>What Our Clients are Saying?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="about" />
                    <div className="title">
                      <h3>Alex Maxwell</h3>
                      <span>CEO at EnvyTheme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client2} alt="about" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>CEO at Envato</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client3} alt="about" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>CEO at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="about" />
                    <div className="title">
                      <h3>Alex Maxwell</h3>
                      <span>CEO at EnvyTheme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleOne
