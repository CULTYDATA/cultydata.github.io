import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"

import Footer from "../components/_App/Footer"
import WhyChooseUs from "../components/AboutUs/WhyChooseUs"
import OurValueProposition from "../components/AboutUs/OurValueProposition"

const AboutUsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageText="Home"
        homePageUrl="/"
        activePageText="About Us"
      />

      <AboutUsContent />
      <WhyChooseUs />
      <OurValueProposition />
      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Us" />

export default AboutUsPage
