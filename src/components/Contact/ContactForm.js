import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import starIcon from "../../images/shape/icon.svg"
import contact from "../../images/contact1.jpg"

const ContactForm = () => {
  const { t } = useTranslation()

  return (
    <section className="contact-area ptb-40">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="contact" />
            {t("contactForm.subTitle")}
          </span>
          <h2>{t("contactForm.title")}</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src={contact} alt="contact" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <iframe
                title="Google Form"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jljGBVUOEVLVVlOVDA4UVU1UFBHVzFSR1hSNTc2Sy4u&embed=true"
                width="100%"
                height="480"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{
                  border: "none",
                  maxWidth: "100%",
                  maxHeight: "100vh",
                }}
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
