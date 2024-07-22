import React from "react"
import CaseStudiesSidebar from "./CaseStudiesSidebar"
import details1 from "../../images/projects/tradding111.jpg"

const caseStudyData = {
  client: "Carbonplace",
  location: "UK",
  technologies: ["-"],
  completedDate: "February 2023 - February 2024",
  website: { name: "Carbonplace.com", url: "https://carbonplace.com/" },
}

const CarbonplaceDetails = () => {
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
                <h3>Carbonplace</h3>
                <p>
                  Designed and deployed an enterprise-grade trading platform on
                  a private blockchain (Hyperledger Besu) for tokenized carbon
                  credits.
                </p>
                <div className="content">
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>
                      Facilitated work organization across a globally
                      distributed team.
                    </li>
                    <li>
                      Transitioned CarbonPlace from POC to MVP, expanding from 4
                      banks to a 9-bank consortium and securing $45 million in
                      funding.
                    </li>
                  </ul>
                </div>

                <h3>Value Addition</h3>
                <p>
                  Created a scalable and secure blockchain-based trading
                  platform that supports a significant number of financial
                  institutions.
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

export default CarbonplaceDetails
