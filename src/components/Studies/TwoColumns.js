import React from "react"
import { Link } from "gatsby"
import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"
import project3 from "../../images/projects/project3.jpg"
import project4 from "../../images/projects/project4.jpg"
import project5 from "../../images/projects/project5.jpg"
import project6 from "../../images/projects/project6.jpg"

const TwoColumns = () => {
  return (
    <>
      <div className="projects-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project1} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Movie Recommendation</Link>
                  </h3>
                  <span>System Project</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project2} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">
                      Customer Segmentation
                    </Link>
                  </h3>
                  <span>Machine Learning</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project3} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Data Analysis</Link>
                  </h3>
                  <span>Web Project</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project4} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Detection Project</Link>
                  </h3>
                  <span>Programming</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box ">
                <div className="image">
                  <img src={project5} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Data Scientist</Link>
                  </h3>
                  <span>Data Science</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={project6} alt="about" />

                  <Link to="/case-studies/case-studies-details" className="link-btn">
                    <i className="bx bx-plus"></i>
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/case-studies/case-studies-details">Benefits Research</Link>
                  </h3>
                  <span>Science Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoColumns
