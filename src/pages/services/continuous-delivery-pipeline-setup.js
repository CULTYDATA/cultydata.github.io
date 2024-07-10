import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ContinuousDeliveryPipelineSetup from "../../components/ServiceDetails/ContinuousDeliveryPipelineSetup"

import Footer from "../../components/_App/Footer"

const ContinuousDeliveryPipelineSetupPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Service Details"
      />

      <ContinuousDeliveryPipelineSetup />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Continuous Delivery Pipeline Setup" />

export default ContinuousDeliveryPipelineSetupPage
