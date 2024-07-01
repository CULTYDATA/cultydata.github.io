import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarThree from "../components/_App/NavbarThree"
import MainBanner from "../components/DataAnalyticsMLConsulting/MainBanner"
import OurSolutions from "../components/DataAnalyticsMLConsulting/OurSolutions"
import AboutArea from "../components/DataAnalyticsMLConsulting/AboutArea"
import OurMission from "../components/DataAnalyticsMLConsulting/OurMission"
import Funfacts from "../components/DataAnalyticsMLConsulting/Funfacts"
import UpcomingBootcamps from "../components/DataAnalyticsMLConsulting/UpcomingBootcamps"
import HowItWork from "../components/DataAnalyticsMLConsulting/HowItWork"
import RecentProjects from "../components/DataAnalyticsMLConsulting/RecentProjects"
import TeamMembers from "../components/DataAnalyticsMLConsulting/TeamMembers"
import Testimonials from "../components/DataAnalyticsMLConsulting/Testimonials"
import Partner from "../components/DataAnalyticsMLConsulting/Partner"
import BlogPost from "../components/DataAnalyticsMLConsulting/BlogPost"
import StartProjectTwo from "../components/Common/StartProjectTwo"
import Footer from "../components/_App/Footer"

const DataAnalyticsMlConsultingPage = () => {
  return (
    <Layout>

      <NavbarThree />

      <MainBanner />

      <OurSolutions />

      <AboutArea />

      <OurMission />

      <Funfacts />

      <UpcomingBootcamps />

      <HowItWork />

      <RecentProjects />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <BlogPost />

      <StartProjectTwo />

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

export default DataAnalyticsMlConsultingPage
