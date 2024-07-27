import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { graphql } from "gatsby"

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <h1>Your Data, Our Priority: Privacy and Security</h1>
                <h3>1. Comprehensive Data Protection</h3>

                <p>
                  At Cultydata Studio, we implement rigorous data protection
                  measures to safeguard your sensitive information. Our policies
                  comply with GDPR and other international data protection
                  regulations, ensuring your data is handled with the utmost
                  care and respect for privacy.
                </p>

                <h3>2. Transparent Data Usage</h3>
                <p>
                  We believe in full transparency regarding data collection and
                  usage. Our detailed privacy policy outlines how we collect,
                  process, and store data, giving you complete visibility and
                  control over your information.
                </p>
                <h3>3. Secure Infrastructure</h3>
                <p>
                  Our cloud infrastructure is built with security at its core.
                  We employ industry-leading encryption standards, regular
                  security audits, and robust access controls to protect against
                  unauthorised access and potential threats.
                </p>
                <h3>4. Continuous Compliance</h3>
                <p>
                  We stay abreast of evolving data protection laws and industry
                  standards, continuously updating our practices to ensure
                  ongoing compliance and the highest levels of data security for
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
