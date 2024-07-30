import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Testimonials from "../components/Index2/Testimonials"
import Footer from "../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TestimonialsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        activePageText="Testimonials"
      />

      <Testimonials />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Testimonials" />

export default TestimonialsPage

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
