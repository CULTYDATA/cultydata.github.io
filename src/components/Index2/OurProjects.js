import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

import project1 from "../../images/projects/trading11.jpg"
import project2 from "../../images/projects/sharedkyc.jpg"

const OurProjects = ({ showAll }) => {
  const projects = [
    {
      img: project1,
      link: "/case-studies/carbonplace",
      title: "Carbonplace",
      description:
        "Enterprise-grade trading platform on private blockchain for tokenized carbon credits",
    },
    {
      img: project2,
      link: "/case-studies/shared-kyc-solution",
      title: "Shared KYC Solution",
      description:
        "Decentralized KYC solution for investment fund asset managers",
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="icon" />
              Recent Projects
            </span>
            <h2>Our Groundbreaking Projects</h2>
          </div>

          <div className="row justify-content-center">
            {displayedProjects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-projects-box">
                  <div className="image">
                    <img
                      src={project.img}
                      alt="Project"
                      className="fixed-size-image"
                    />

                    <Link to={project.link} className="link-btn">
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>

                  <div className="content">
                    <h3>
                      <Link to={project.link}>{project.title}</Link>
                    </h3>
                    <span>{project.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="case-study-more-btn">
              <Link to="/case-studies" className="default-btn">
                <i className="flaticon-right"></i>
                Load More <span></span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default OurProjects
