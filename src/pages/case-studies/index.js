import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import OurProjects from "../../components/Index2/OurProjects"
import Footer from "../../components/_App/Footer"

const CaseStudiesPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Case Studies"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Case Studies"
      />

      <OurProjects showAll={true} />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Case Studies" />

export default CaseStudiesPage
