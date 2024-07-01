import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import CaseStudiesDetailsContent from "../../components/CaseStudiesDetails/CaseStudiesDetailsContent"
import RelatedProjects from "../../components/CaseStudiesDetails/RelatedProjects"
import Footer from "../../components/_App/Footer"

const CaseDetailsPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Case Studies Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies Details"
      />

      <CaseStudiesDetailsContent />

      <RelatedProjects />

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
