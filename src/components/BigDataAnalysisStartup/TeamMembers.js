import React from "react"
import { Link } from "gatsby"

import Scientist9 from "../../images/scientist/scientist9.jpg"
import Scientist10 from "../../images/scientist/scientist10.jpg"
import Scientist11 from "../../images/scientist/scientist11.jpg"
import MapShape1 from "../../images/shape/map-shape1.png"
import VectorShape5 from "../../images/shape/vector-shape5.png"
import StarIcon from "../../images/star-icon.png"
import VectorShape4 from "../../images/shape/vector-shape4.png"

const TeamMembers = () => {
  return (
    <>
      <div className="scientist-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="scientist-box-list">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6 offset-lg-1">
                    <div className="single-scientist-item">
                      <img src={Scientist9} alt="Scientist" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="single-scientist-item">
                      <img src={Scientist10} alt="Scientist" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 col-md-6 offset-lg-0 offset-md-3">
                    <div className="single-scientist-item">
                      <img src={Scientist11} alt="Scientist" />
                    </div>
                  </div>
                </div>

                <div className="map-shape1">
                  <img src={MapShape1} alt="Map Shape" />
                </div>
                <div className="vector-shape5">
                  <img src={VectorShape5} alt="Vector Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="scientist-section-title">
                <span className="sub-title">
                  <img src={StarIcon} alt="Star Icon" />
                  Our Team
                </span>
                <h2>
                  Meet Our Data Scientist Preparing For Your Business Success
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <Link to="/team" className="default-btn">
                  <i className="flaticon-view"></i>
                  View Our Team <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape4">
          <img src={VectorShape4} alt="Vector Shape" />
        </div>
      </div>
    </>
  )
}

export default TeamMembers
