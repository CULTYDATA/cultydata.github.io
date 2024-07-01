import React from "react"
import { Link } from "gatsby"

const Pricing = () => {
  return (
    <>
      <section className="pricing-area pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>Our Affordable Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Weekly Plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 120 <sub>/ Per week</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> SEO & Branding
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Marketing
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Google Analytics
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Branding Solutions
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Accounts
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> Pay-per-Click
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Month Plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 840 <sub>/ Per month</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> SEO & Branding
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Marketing
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Google Analytics
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Branding Solutions
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Accounts
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Pay-per-Click
                  </li>
                  <li>
                    <i className="bx bxs-x-circle red"></i> 24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Yearly Plan</h3>
                </div>

                <div className="price">
                  <sup>$</sup> 3,600 <sub> / Per yearly</sub>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i> SEO & Branding
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Marketing
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Google Analytics
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Branding Solutions
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Digital Accounts
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> Pay-per-Click
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i> 24/7 Support
                  </li>
                </ul>

                <div className="btn-box">
                  <Link to="#" className="default-btn">
                    <i className="flaticon-tick"></i>
                    Select the Plan
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
