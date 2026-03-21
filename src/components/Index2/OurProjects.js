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
    <section className="qk-projects">
      <div className="container">
        <div className="qk-section-header">
          <span className="qk-label">{t("home.project.subTitle")}</span>
          <h2>{t("home.project.title")}</h2>
        </div>

        {displayedProjects.map((project, index) => (
          <Link
            to={project.link}
            className={`qk-project-row ${index % 2 ? "qk-project-row--reversed" : ""}`}
            key={index}
          >
            <div className="qk-project-row__image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="qk-project-row__info">
              <span className="qk-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="qk-project-row__link">
                {t("home.button.viewDetails")} →
              </span>
            </div>
          </Link>
        ))}

        {!showAll && (
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/case-studies" className="qk-btn qk-btn--outline">
              {t("home.button.loadMore")} →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default OurProjects
