import React from "react"
import { Link } from "gatsby"

import StarIcon from "../../images/star-icon.png"
import ProjectImage1 from "../../images/projects/project1.jpg"
import ProjectImage2 from "../../images/projects/project2.jpg"
import ProjectImage3 from "../../images/projects/project3.jpg"
import ProjectImage4 from "../../images/projects/project4.jpg"
import ProjectImage5 from "../../images/projects/project5.jpg"
import ProjectImage6 from "../../images/projects/project6.jpg"

const RecentProjects = () => {
  return (
    <>
      <section className="projects-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={StarIcon} alt="icon" /> Recent Projects
            </span>
            <h2>Check Some Of Our Recent Work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={ProjectImage1} alt="Project" />

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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={ProjectImage2} alt="Project" />

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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={ProjectImage3} alt="Project" />

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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={ProjectImage4} alt="Project" />

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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box ">
                <div className="image">
                  <img src={ProjectImage5} alt="Project" />

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

            <div className="col-lg-4 col-md-6">
              <div className="single-projects-box">
                <div className="image">
                  <img src={ProjectImage6} alt="Project" />

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
      </section>
    </>
  )
}

export default RecentProjects
