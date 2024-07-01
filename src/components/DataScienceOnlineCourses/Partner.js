import React from "react"
import AOS from "aos"

import partner1 from "../../images/partner/partner1.png"
import partner2 from "../../images/partner/partner2.png"
import partner3 from "../../images/partner/partner3.png"
import partner4 from "../../images/partner/partner4.png"
import partner5 from "../../images/partner/partner5.png"
import partner6 from "../../images/partner/partner6.png"

const Partner = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="partner-area ptb-70 bg-fafafb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src={partner1} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={partner2} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src={partner3} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src={partner4} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <img src={partner5} alt="partner" />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div
                className="single-partner-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img src={partner6} alt="partner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner
