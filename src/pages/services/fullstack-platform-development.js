import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import FullStackPlatformDevelopment from "../../components/ServiceDetails/FullStackPlatformDevelopment"

import Footer from "../../components/_App/Footer"

const FullStackPlatformDevelopmentPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Full Stack Platform Development"
        homePageText="Home"
        homePageUrl="/"
        sectionPageText="Services"
        sectionUrl="/services"
        activePageText="Full Stack Platform Development"
      />

      <FullStackPlatformDevelopment />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Full Stack Platform Development" />

export default FullStackPlatformDevelopmentPage
