import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/BigDataAnalysisStartup/MainBanner"
import FeaturedServices from "../components/BigDataAnalysisStartup/FeaturedServices"
import WhyChooseUs from "../components/BigDataAnalysisStartup/WhyChooseUs"
import WhatWeDo from "../components/BigDataAnalysisStartup/WhatWeDo"
import Funfacts from "../components/BigDataAnalysisStartup/Funfacts"
import Services from "../components/BigDataAnalysisStartup/Services"
import Testimonials from "../components/BigDataAnalysisStartup/Testimonials"
import WeServe from "../components/BigDataAnalysisStartup/WeServe"
import TeamMembers from "../components/BigDataAnalysisStartup/TeamMembers"
import CaseStudy from "../components/BigDataAnalysisStartup/CaseStudy"
import BlogPost from "../components/BigDataAnalysisStartup/BlogPost"
import StartProject from "../components/Common/StartProject"
import Footer from "../components/_App/Footer"

const BigDataAnalysisStartup = () => {
  return (
    <Layout>
      
      <Navbar />

      <MainBanner />

      <FeaturedServices />

      <WhyChooseUs />

      <WhatWeDo />

      <Funfacts />

      <Services />

      <Testimonials />

      <WeServe />

      <TeamMembers />

      <CaseStudy />

      <BlogPost />

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

export default BigDataAnalysisStartup
