import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import OurProjects from "../../components/Index2/OurProjects"
import Footer from "../../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const CaseStudiesPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={t("home.navbar.case")}
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        activePageText={t("home.navbar.case")}
      />

      <OurProjects showAll={true} />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Case Studies" />

export default CaseStudiesPage

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
