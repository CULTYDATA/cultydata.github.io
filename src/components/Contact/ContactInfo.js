import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ContactInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-map"></i>
              </div>
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <h3>{t("contactInfo.addressTitle")}</h3>
              <p>{t("general.addressDetails")}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <div className="icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <h3>{t("contactInfo.contactTitle")}</h3>
              <p><a href={t("general.mailto")}>{t("general.email")}</a></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className="bx bx-time-five"></i>
              </div>
              <div className="icon">
                <i className="bx bx-time-five"></i>
              </div>
              <h3>{t("contactInfo.hoursTitle")}</h3>
              <p>{t("contactInfo.weekdays")}</p>
              <p>{t("contactInfo.weekends")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
