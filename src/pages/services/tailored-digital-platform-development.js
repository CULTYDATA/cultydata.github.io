import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import Footer from "../../components/_App/Footer"
import TailoredDigitalPlatformDevelopment from "../../components/ServiceDetails/TailoredDigitalPlatformDevelopment"

const TailoredDigitalPlatformDevelopmentPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Tailored Digital Platform Development"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Tailored Digital Platform Development"
      />

      <TailoredDigitalPlatformDevelopment />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Tailored Digital Platform Development" />

export default TailoredDigitalPlatformDevelopmentPage
