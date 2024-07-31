import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import BlockchainSolutionsDevelopment from "../../components/ServiceDetails/BlockchainSolutionsDevelopment"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { graphql } from "gatsby"

const BlockchainSolutionsDevelopmentPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={t("services.svc1.blockchain")}
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        sectionPageText={t("home.navbar.services")}
        sectionUrl="/services"
        activePageText={t("services.svc1.blockchain")}
      />

      <BlockchainSolutionsDevelopment />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blockchain Solutions Development" />

export default BlockchainSolutionsDevelopmentPage

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
