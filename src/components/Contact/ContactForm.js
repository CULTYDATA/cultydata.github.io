import React from "react"
import starIcon from "../../images/star-icon.png"
import contact from "../../images/contact.png"

const ContactForm = () => {
  return (
    <>
      <section className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="contact" />
              Get in Touch
            </span>
            <h2>Ready to Get Started?</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={contact} alt="contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          required
                          placeholder="Your email address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          required
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Write your message..."
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        <i className="flaticon-tick"></i>
                        Send Message <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
