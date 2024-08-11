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


          <div class="contact-form">
            <iframe class="resp-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSc27_7WIkLPXPcarNRiFDHkM6M9bSP2jTvVjowXGYoQ2uJzag/viewform?embedded=true">
              Loading…
            </iframe>
          </div>


          {/*<div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src={contact} alt="contact" />
            </div>
          </div>*/}

        </div>
      </div>
    </section>
  )
}

export default ContactForm
