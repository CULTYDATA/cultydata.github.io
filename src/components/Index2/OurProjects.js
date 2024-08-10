import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/shape/icon.svg"

import project1 from "../../images/projects/project1.jpg"
import project2 from "../../images/projects/project2.jpg"

import { useTranslation } from "gatsby-plugin-react-i18next"

const OurProjects = ({ showAll }) => {
  const { t } = useTranslation()
  const projects = [
    {
      img: project1,
      link: "/case-studies/carbonplace",
      title: t("home.project.p1.title"),
      description: t("home.project.p1.txt"),
    },
    {
      img: project2,
      link: "/case-studies/shared-kyc-solution",
      title: t("home.project.p2.title"),
      description: t("home.project.p2.txt"),
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <>
      <section className="solutions-area pt-40 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="icon" />
              {t("home.project.subTitle")}
            </span>
            <h2> {t("home.project.title")}</h2>
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
                {t("home.button.loadMore")} <span></span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default OurProjects
