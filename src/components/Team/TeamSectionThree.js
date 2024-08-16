import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router" // Import useLocation from @reach/router
import starIcon from "../../images/shape/icon.svg"
import team1 from "../../images/team/team1.jpg"
import team2 from "../../images/team/team2.jpg"
import team3 from "../../images/team/team3.jpg"
import team4 from "../../images/team/team4.jpg"
import team5 from "../../images/team/team6.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TeamSectionThree = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [visibleRows, setVisibleRows] = useState(1)

  const handleLoadMore = () => {
    setVisibleRows(visibleRows + 1)
  }

  const teamMembers = [
    [
      {
        img: team1,
        name: "team.member1.name",
        position: "team.member1.position",
        socialLink: "team.member1.socialLink",
      },
      {
        img: team2,
        name: "team.member2.name",
        position: "team.member2.position",
        socialLink: "team.member2.socialLink",
      },
      {
        img: team3,
        name: "team.member3.name",
        position: "team.member3.position",
        socialLink: "team.member3.socialLink",
      },
      {
        img: team4,
        name: "team.member4.name",
        position: "team.member4.position",
        socialLink: "team.member4.socialLink",
      },
      {
        img: team5,
        name: "team.member5.name",
        position: "team.member5.position",
        socialLink: "team.member5.socialLink",
      },
    ],
    [
      // Add more team members for the second row if needed
    ],
  ]

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonials" />
            {t("team.subTitle")}
          </span>
          <h2>{t("team.title")}</h2>
          <p>{t("team.description")}</p>
        </div>

        {teamMembers.slice(0, visibleRows).map((row, rowIndex) => (
          <div key={rowIndex} className="team-horizontal-layout">
            {row.map((member, memberIndex) => (
              <div key={memberIndex} className="team-member">
                <img src={member.img} alt={t(member.name)} />
                <ul className="social">
                  <li>
                    <a
                      href={t(member.socialLink)}
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <h3>{t(member.name)}</h3>
                <span>{t(member.position)}</span>
              </div>
            ))}
          </div>
        ))}

        {/* Show "Load More" button only on the homepage */}
        {location.pathname === "/" && visibleRows < teamMembers.length && (
          <div className="col-lg-12 col-md-12 pt-40">
            <div className="load-more-btn text-center">
              <Link to="/team" className="default-btn" onClick={handleLoadMore}>
                <i className="flaticon-refresh"></i>
                Load More <span></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TeamSectionThree
