import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import OurHistoryContentOne from "../components/History/OurHistoryContentOne"
import OurHistoryContentTwo from "../components/History/OurHistoryContentTwo"
import Footer from "../components/_App/Footer"

const HistoryPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="History"
        homePageText="Home"
        homePageUrl="/"
        activePageText="History"
      />

      <OurHistoryContentOne />

      <OurHistoryContentTwo />
      
      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="History" />

export default HistoryPage
