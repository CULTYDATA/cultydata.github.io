import React from "react"
import { Link } from "gatsby"
import img8 from "../../images/about/about-img8.png"
import shape1 from "../../images/about/about-shape1.png"

const AboutUs = () => {
  return (
    <>
      <section className="about-area res-pt-0 pb-100 pt-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={img8} alt="about" />
                <div className="shape">
                  <img src={shape1} alt="about" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <h2>Data Science Training + Industry Experience</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <ul className="content-list">
                    <li>
                      <i className="flaticon-tick"></i> What is regularization
                      and why it is useful
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Perhaps the most popular
                      data science methodologies
                    </li>
                  </ul>
                  <p>
                    You will learn about training data, and how to use a set of
                    data to discover potentially predictive relationships. As
                    you build the movie recommendation system, you will learn
                    how to train algorithms using training data so you can
                    predict the outcome for future datasets. You will also learn
                    about overtraining and techniques to avoid it such as
                    cross-validation. All of these skills are fundamental to
                    machine learning.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>

                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
