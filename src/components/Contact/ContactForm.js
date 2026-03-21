import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ContactForm = () => {
  const { t } = useTranslation()

  return (
    <section className="qk-contact-form">
      <div className="container">
        <div className="qk-section-header qk-section-header--centered">
          <span className="qk-label">{t("contactForm.subTitle")}</span>
          <h2>{t("contactForm.title")}</h2>
        </div>

        <div className="qk-contact-form__iframe-container">
          <iframe
            className="qk-contact-form__iframe"
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc27_7WIkLPXPcarNRiFDHkM6M9bSP2jTvVjowXGYoQ2uJzag/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
