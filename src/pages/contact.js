import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ContactPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Contact"
      />
      <ContactForm />
      <ContactInfo />


      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  const { t } = useTranslation()
  return (
    <Seo
      title={t("seo.contact.title")}
      description={t("seo.contact.description")}
    />
  )
}

export default ContactPage

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
