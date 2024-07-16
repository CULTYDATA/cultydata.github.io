import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import ComprehensiveSupport from "../../components/ServiceDetails/ComprehensiveSupport"

const ComprehensiveSupportPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={
          <span>
            Comprehensive Feature Team for <br /> End-to-End Delivery
          </span>
        }
        homePageText="Home"
        homePageUrl="/"
        sectionPageText="Services"
        sectionUrl="/services"
        activePageText="Comprehensive Feature Team for End-to-End Delivery"
      />

      <ComprehensiveSupport />

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
  <Seo title="Comprehensive Feature Team for End-to-End Delivery" />
)

export default ComprehensiveSupportPage
