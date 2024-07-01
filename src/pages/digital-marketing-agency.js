import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarTwo from "../components/_App/NavbarTwo"
import MainBanner from "../components/DigitalMarketingAgency/MainBanner"
import FeaturedServices from "../components/DigitalMarketingAgency/FeaturedServices"
import Partner from "../components/DigitalMarketingAgency/Partner"
import AboutUs from "../components/DigitalMarketingAgency/AboutUs"
import Services from "../components/DigitalMarketingAgency/Services"
import FunFacts from "../components/DigitalMarketingAgency/FunFacts"
import Projects from "../components/DigitalMarketingAgency/Projects"
import TeamMembers from "../components/DigitalMarketingAgency/TeamMembers"
import Testimonials from "../components/DigitalMarketingAgency/Testimonials"
import Pricing from "../components/DigitalMarketingAgency/Pricing"
import StartProject from "../components/DigitalMarketingAgency/StartProject"
import OurBlog from "../components/DigitalMarketingAgency/BlogPost"
import Footer from "../components/_App/Footer"

const DigitalMarketingAgencyPage = () => {
  return (
    <Layout>
      
      <NavbarTwo />

      <MainBanner />

      <FeaturedServices />

      <Partner />

      <AboutUs />

      <Services />

      <FunFacts />

      <Projects />

      <TeamMembers />

      <Testimonials />

      <Pricing />

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

export default DigitalMarketingAgencyPage
