import React from "react"
import { Link } from "gatsby"

import VectorShape11 from "../../images/shape/vector-shape11.png"

const WeServe = () => {
  return (
    <>
      <section className="industries-serve-area bg-fafafb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-factory"></i>
                </div>
                Manufacturing
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-hospital"></i>
                </div>
                Healthcare
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-tracking"></i>
                </div>
                Automobile
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-investment"></i>
                </div>
                Banking
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-house"></i>
                </div>
                Real Estate
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-order"></i>
                </div>
                Logistics
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-family-insurance"></i>
                </div>
                Insurance
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-industries-serve-box">
                <div className="icon">
                  <i className="flaticon-bitcoin"></i>
                </div>
                Capital Markets
                <Link to="/services/service-details" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape11">
          <img src={VectorShape11} alt="Vector Shape" />
        </div>
      </section>
    </>
  )
}

export default WeServe
