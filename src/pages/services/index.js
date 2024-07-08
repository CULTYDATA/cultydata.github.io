import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"

import StartProject from "../../components/Index2/StartProject"
import Footer from "../../components/_App/Footer"
import OurServices from "../../components/Index2/OurServices"

const ServicesPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Services"
      />

      <OurServices />

      <StartProject />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Services" />

export default ServicesPage
