import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/DataAnalyticsAIStartup/MainBanner"
import FeaturedService from "../components/DataAnalyticsAIStartup/FeaturedService"
import AboutUs from "../components/DataAnalyticsAIStartup/AboutUs"
import OurMission from "../components/DataAnalyticsAIStartup/OurMission"
import Funfacts from "../components/DataAnalyticsAIStartup/Funfacts"
import OurServices from "../components/DataAnalyticsAIStartup/OurServices"
import HowItWork from "../components/DataAnalyticsAIStartup/HowItWork"
import TeamMembers from "../components/DataAnalyticsAIStartup/TeamMembers"
import Testimonials from "../components/DataAnalyticsAIStartup/Testimonials"
import Partner from "../components/DataAnalyticsAIStartup/Partner"
import StartProject from "../components/DataAnalyticsAIStartup/StartProject"
import OurBlog from "../components/DataAnalyticsAIStartup/BlogPost"
import Footer from "../components/_App/Footer"

const DataAnalyticsAiStartupPage = () => {
  return (
    <Layout>

      <Navbar />

      <MainBanner />

      <FeaturedService />

      <AboutUs />

      <OurMission />

      <Funfacts />

      <OurServices />

      <HowItWork />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <StartProject />

      <OurBlog />

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

export default DataAnalyticsAiStartupPage
