import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/Index2/MainBanner"

import AboutUs from "../components/Index2/AboutUs"

import Testimonials from "../components/Index2/Testimonials"

import StartProject from "../components/Index2/StartProject"
import Footer from "../components/_App/Footer"


import OurEngagementModel from "../components/Index2/OurEngagementModel"
import OurProvenProcess from "../components/Index2/OurProvenProcess"
import TeamMembers from "../components/Index2/TeamMembers"
import OurProjects from "../components/Index2/OurProjects"
import ServicesOne from "../components/Services/ServicesOne"

import { graphql } from 'gatsby';
import BestPractice from "../components/Index2/BestPractice"

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />

      <MainBanner />
      <AboutUs />

      <ServicesOne />

      

      <OurEngagementModel />

      <OurProvenProcess />

      <BestPractice />

      
      <OurProjects showAll={false} />

      <Testimonials />

      <TeamMembers />

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

export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
