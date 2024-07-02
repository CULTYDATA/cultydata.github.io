import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/Index2/MainBanner"
import OurSolutions from "../components/Index2/OurSolutions"
import AboutUs from "../components/Index2/AboutUs"

import OurApproach from "../components/Index2/OurApproach"

import TeamMembers from "../components/Index2/TeamMembers"
import Testimonials from "../components/Index2/Testimonials"
import Partner from "../components/Index2/Partner"

import StartProject from "../components/Index2/StartProject"
import Footer from "../components/_App/Footer"

const DataScienceMlCompanyPage = () => {
  return (
    <Layout>
      <Navbar />

      <MainBanner />

      <OurSolutions />

      <AboutUs />

      <OurApproach />

      <TeamMembers />

      <Testimonials />

      <Partner />

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
export const Head = () => <Seo title="Home" />

export default DataScienceMlCompanyPage
