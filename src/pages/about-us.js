import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import OurHistory from "../components/AboutUs/OurHistory"
import WhyChooseUs from "../components/AboutUs/WhyChooseUs"
import HowItWork from "../components/AboutUs/HowItWork"
import TeamMembers from "../components/AboutUs/TeamMembers"
import Testimonials from "../components/AboutUs/Testimonials"
import Partner from "../components/AboutUs/Partner"
import Footer from "../components/_App/Footer"

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

      <OurHistory />

      <WhyChooseUs />

      <HowItWork />

      <TeamMembers />

      <Testimonials />

      <Partner />

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
