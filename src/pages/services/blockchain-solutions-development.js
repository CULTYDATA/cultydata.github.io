import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import BlockchainSolutionsDevelopment from "../../components/ServiceDetails/BlockchainSolutionsDevelopment"

const BlockchainSolutionsDevelopmentPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Blockchain Solutions Development"
        homePageText="Home"
        homePageUrl="/"
        sectionPageText="Services"
        sectionUrl="/services"
        activePageText="Blockchain Solutions Development"
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
