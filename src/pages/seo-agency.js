import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Banner from "../components/SEOAgency/Banner"
import FeaturedServices from "../components/SEOAgency/FeaturedServices"
import AboutArea from "../components/SEOAgency/AboutArea"
import FunFacts from "../components/SEOAgency/FunFacts"
import OurServices from "../components/SEOAgency/OurServices"
import CaseStudy from "../components/SEOAgency/CaseStudy"
import WhyChooseUs from "../components/SEOAgency/WhyChooseUs"
import Testimonials from "../components/SEOAgency/Testimonials"
import Pricing from "../components/SEOAgency/Pricing"
import AnalysisForm from "../components/SEOAgency/AnalysisForm"
import Partner from "../components/SEOAgency/Partner"
import OurBlog from "../components/SEOAgency/OurBlog"
import TeamMembers from "../components/SEOAgency/TeamMembers"
import Footer from "../components/_App/Footer"

const SeoAgencyPage = () => {
  return (
    <Layout>

      <Navbar />

      <Banner />

      <FeaturedServices />

      <AboutArea />

      <FunFacts />

      <OurServices />

      <CaseStudy />

      <WhyChooseUs />

      <Testimonials />

      <Pricing />

      <TeamMembers />

      <AnalysisForm />

      <Partner />

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

export default SeoAgencyPage
