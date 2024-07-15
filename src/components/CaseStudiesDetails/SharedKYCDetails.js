import React from "react"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/sharedkyc.jpg"
import project2 from "../../images/projects/project2.jpg"

const caseStudyData = {
  client: "BP2S/Consensys",
  location: "Australia",
  technologies: ["Blockchain"],
  completedDate: " April 2018 - February 2019",
  website: { name: "EnvyTheme.com", url: "https://envytheme.com/" },
}

const SharedKYCDetails = () => {
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
                <h3>Shared KYC Solutions</h3>
                <p>
                  Led the technical development of a shared KYC solution to
                  streamline client onboarding for multiple investment fund
                  asset managers.
                </p>
                <div className="content">
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>
                      Implemented KYC decentralization initiatives based on
                      private blockchain.
                    </li>
                  </ul>
                </div>

                <h3>Value Addition</h3>
                <p>
                  Improved efficiency in client onboarding processes through a
                  decentralized approach.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <CaseStudiesSidebar {...caseStudyData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SharedKYCDetails
