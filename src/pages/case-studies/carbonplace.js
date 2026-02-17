import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import CarbonplaceDetails from "../../components/CaseStudiesDetails/CarbonplaceDetails"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const CaseDetailsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Carbonplace"
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        sectionPageText={t("home.navbar.case")}
        sectionUrl="/case-studies"
        activePageText="Carbonplace"
      />

      <CarbonplaceDetails />

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
  <Seo
    title="Carbonplace"
    description="Enterprise-grade trading platform on Hyperledger Besu for tokenized carbon credits. 9-bank consortium, $45M raised."
  />
)

export default CaseDetailsPage

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
