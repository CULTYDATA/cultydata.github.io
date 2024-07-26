import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import details1 from "../../images/services/datascience1.svg"; 
import { Link } from "gatsby";

const DataScienceandMLConsulting = () => {
  return (
    <>
      <section className="services-details-area ptb-50">
        <div className="container">
          <div className="row">
          

           
            <div className="col-lg-8 col-md-12">
              
             

              <div className="services-details-desc">
              
                <h3>Service Offering</h3>
                <p>
                  We offer expert consulting in data science and machine
                  learning, focusing on predictive analytics, time series
                  analysis, and custom algorithm development.
                </p>

                <h3>Business Domain</h3>
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-money"></i>
                      </div>
                      Financial Services
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-order"></i>
                      </div>
                      Retail
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-industries-serve-box">
                      <div className="icon">
                        <i className="flaticon-hospital"></i>
                      </div>
                      Healthcare
                    </div>
                  </div>
                </div>
                <div className="services-details-image">
                <img src={details1} alt="Data Science and ML"  />
                <span className="sub-title padding-top">
                  Data Science and Machine Learning Consulting
                </span>
              </div>

                <h3>Use Case Examples</h3>
                <ul className="features">
                  <li>
                    <span>
                      Advanced analytics and machine learning models to enhance
                      risk analysis and decision-making processes.
                    </span>
                  </li>
                  <li>
                    <span>
                      Predictive models for financial forecasting and regulatory
                      compliance, providing actionable insights for strategic
                      planning.
                    </span>
                  </li>
                </ul>

                <h3>Comprehensive Support</h3>
                <p>
                  Our feature team ensures end-to-end delivery for your data
                  science projects.{" "}
                  <Link
                    to="/services/comprehensive-support"
                    className="learn-more-btn"
                  >
                    <i className="flaticon-right"></i>
                    Learn More
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <ServiceSidebar />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DataScienceandMLConsulting;
