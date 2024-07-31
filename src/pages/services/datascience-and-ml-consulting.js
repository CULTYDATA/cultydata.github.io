import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import DataScienceandMLConsulting from "../../components/ServiceDetails/DataScienceandMLConsulting"

import Footer from "../../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const DataScienceandMLConsultingPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={
          <>
            {t("services.svc3.datascience")}
            <br />
            {t("services.svc3.machinelearning")}
          </>
        }
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        sectionPageText={t("home.navbar.services")}
        sectionUrl="/services"
        activePageText={
          t("services.svc3.datascience") +
          " " +
          t("services.svc3.machinelearning")
        }
      />

      <DataScienceandMLConsulting />

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
  <Seo title="Data Science and Machine Learning Consulting" />
)

export default DataScienceandMLConsultingPage

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
