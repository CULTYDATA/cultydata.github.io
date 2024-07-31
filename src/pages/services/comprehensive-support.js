import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import ComprehensiveSupport from "../../components/ServiceDetails/ComprehensiveSupport"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ComprehensiveSupportPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={
          <>
            {t("services.comprehensive.txt1")}
            <br />
            {t("services.comprehensive.txt2")}
          </>
        }
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        sectionPageText={t("home.navbar.services")}
        sectionUrl="/services"
        activePageText={t("services.comprehensive.combined")}
      />

      <ComprehensiveSupport />

      <Footer />
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Comprehensive Feature Team for End-to-End Delivery" />
)

export default ComprehensiveSupportPage

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
