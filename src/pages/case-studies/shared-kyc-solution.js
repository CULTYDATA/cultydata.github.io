import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import SharedKYCDetails from "../../components/CaseStudiesDetails/SharedKYCDetails"

const CaseDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Shared KYC Solutions"
        homePageText="Case Studies"
        homePageUrl="/case-studies"
        activePageText="Case Studies Details"
      />

      <SharedKYCDetails />

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
