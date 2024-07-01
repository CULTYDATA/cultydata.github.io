import React from "react"
import { Link } from "gatsby"
import payment1 from "../../images/payment/payment1.png"
import payment2 from "../../images/payment/payment2.png"
import payment3 from "../../images/payment/payment3.png"

const EventSidebar = () => {
  return (
    <>
      <div className="events-details-info">
        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>Cost</span>
              $149
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Total Slot</span>
              1500
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Booked Slot</span>
              350
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>Pay With</span>
              <div className="payment-method">
                <img src={payment1} className="shadow" alt="payment-card" />
                <img src={payment2} className="shadow" alt="payment-card" />
                <img src={payment3} className="shadow" alt="payment-card" />
              </div>
            </div>
          </li>
        </ul>

        <div className="btn-box">
          <Link to="#" className="default-btn">
            <i className="flaticon-user"></i>
            Book Now <span></span>
          </Link>
          <p>
            You must <Link to="/profile-authentication">login</Link> before
            register event.
          </p>
        </div>

        <div className="events-share">
          <div className="share-info">
            <span>
              Share This Course <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <Link to="#" className="d-block">
                  <i className="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="d-block">
                  <i className="bx bxl-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="d-block">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="d-block">
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventSidebar
