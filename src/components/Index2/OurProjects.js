import React from "react"
import { Link } from "gatsby"

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
    <section className="projects-minimal">
      <div className="container">
        <div className="projects-minimal-header">
          <h2>{t("home.project.title")}</h2>
        </div>

        <div className="row justify-content-center">
          {displayedProjects.map((project, index) => (
            <div className="col-lg-5 col-md-6" key={index}>
              <Link to={project.link} className="project-card">
                <div className="project-card-image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link to="/case-studies" className="default-btn">
              <i className="flaticon-right"></i>
              {t("home.button.loadMore")} <span></span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default OurProjects
