import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import CarbonplaceDetails from "../../components/CaseStudiesDetails/CarbonplaceDetails"

const CaseDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Carbonplace"
        homePageText="Home"
        homePageUrl="/"
        sectionPageText="Case Studies"
        sectionUrl="/case-studies"
        activePageText="Case Studies Details"
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
export const Head = () => <Seo title="Case Details" />

export default CaseDetailsPage
