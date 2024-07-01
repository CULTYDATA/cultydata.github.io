import React from "react"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"
import shape from "../../images/shape/shape1.svg"

const TestimonialsStyleTwo = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70 bg-fafafb">
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
              <div className="single-testimonials-box">
                <img src={client1} className="shadow-sm" alt="about" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Alex Maxwell</h3>
                  <span>CEO at EnvyTheme</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client2} className="shadow-sm" alt="about" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>David Warner</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client3} className="shadow-sm" alt="about" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Sarah Taylor</h3>
                  <span>CEO at ThemeForest</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-testimonials-box">
                <img src={client1} className="shadow-sm" alt="about" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna ali.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <h3>Alex Maxwell</h3>
                  <span>CEO at EnvyTheme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="about" />
        </div>
      </div>
    </>
  )
}

export default TestimonialsStyleTwo
