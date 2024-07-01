import React from "react"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/projects-details1.jpg"
import project2 from "../../images/projects/project2.jpg"

const CaseStudiesDetailsContent = () => {
  return (
    <>
      <section className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="case-studies-details-image">
                <img src={details1} alt="about" />
              </div>
              <div className="case-studies-details-desc">
                <span className="sub-title">Data Science</span>
                <h3>
                  Complete Data Science Training: Mathematics, Statistics,
                  Python, Advanced Statistics in Python
                </h3>
                <p>
                  Improve Machine Learning algorithms by studying underfitting,
                  overfitting, training, validation, n-fold cross validation,
                  testing, and how hyperparameters could improve performance.
                  Perform linear and logistic regressions in Python.
                </p>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="image">
                      <img src={project2} alt="about" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="content">
                      <h3>Important Facts</h3>
                      <ul>
                        <li>The Field of Data Science</li>
                        <li>The Problem</li>
                        <li>The Solution</li>
                        <li>The Skills</li>
                        <li>Statistics</li>
                        <li>Mathematics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text.
                </p>
                <h3>Results</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  labori.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CaseStudiesSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudiesDetailsContent
