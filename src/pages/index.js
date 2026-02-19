import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/Index2/MainBanner"

import AboutUs from "../components/Index2/AboutUs"

import StartProject from "../components/Index2/StartProject"
import Footer from "../components/_App/Footer"

import OurEngagementModel from "../components/Index2/OurEngagementModel"
import OurProvenProcess from "../components/Index2/OurProvenProcess"
import OurProjects from "../components/Index2/OurProjects"
import OurServices from "../components/Index2/OurServices"

import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import BestPractice from "../components/Index2/BestPractice"
import OurApproach from "../components/Index2/OurApproach"

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />

      <MainBanner />
      <AboutUs />

      <OurApproach />

      <OurServices />

      <OurEngagementModel />

      <OurProvenProcess />

      <BestPractice />

      <OurProjects showAll={false} />

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
export const Head = () => {
  const { t } = useTranslation()
  return (
    <Seo
      title={t("seo.home.title")}
      description={t("seo.home.description")}
    />
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
