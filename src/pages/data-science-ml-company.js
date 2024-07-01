import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/DataScienceAndMLCompany/MainBanner"
import OurSolutions from "../components/DataScienceAndMLCompany/OurSolutions"
import AboutUs from "../components/DataScienceAndMLCompany/AboutUs"
import OurServices from "../components/DataScienceAndMLCompany/OurServices"
import HowItWork from "../components/DataScienceAndMLCompany/HowItWork"
import CaseStudySlider from "../components/DataScienceAndMLCompany/CaseStudySlider"
import TeamMembers from "../components/DataScienceAndMLCompany/TeamMembers"
import Testimonials from "../components/DataScienceAndMLCompany/Testimonials"
import Partner from "../components/DataScienceAndMLCompany/Partner"
import OurBlog from "../components/DataScienceAndMLCompany/BlogPost"
import StartProject from "../components/DataScienceAndMLCompany/StartProject"
import Footer from "../components/_App/Footer"

const DataScienceMlCompanyPage = () => {
  return (
    <Layout>

      <Navbar />
      
      <MainBanner />

      <OurSolutions />

      <AboutUs />

      <OurServices />

      <HowItWork />

      <CaseStudySlider />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <OurBlog />

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