import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import Footer from "../components/_App/Footer"
import WhyChooseUs from "../components/AboutUs/WhyChooseUs"
import OurValueProposition from "../components/AboutUs/OurValueProposition"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutUsPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={t("aboutUs.pageTitle")}
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        activePageText={t("aboutUs.pageTitle")}
      />

      <AboutUsContent />
      <WhyChooseUs />
      <OurValueProposition />
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutUsPage

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
