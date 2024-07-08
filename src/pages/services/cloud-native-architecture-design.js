import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import CloudNativeArchitectureDesign from "../../components/ServiceDetails/CloudNativeArchitectureDesign"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"

const CloudNativeArchitectureDesignPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Cloud-Native Architecture Design"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Cloud-Native Architecture Design"
      />

      <CloudNativeArchitectureDesign />

      <RelatedServices />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Cloud-Native Architecture Design" />

export default CloudNativeArchitectureDesignPage
