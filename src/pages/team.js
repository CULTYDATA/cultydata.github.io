import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import TeamSectionOne from "../components/Team/TeamSectionOne"
import TeamSectionTwo from "../components/Team/TeamSectionTwo"
import AIAgents from "../components/Team/AIAgents"

const TeamPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={t("team.pageTitle")}
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        activePageText={t("team.pageTitle")}
      />

      <TeamSectionOne />
      <TeamSectionTwo />
      <AIAgents />

      <Footer />
    </Layout>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return (
    <Seo
      title={t("seo.team.title")}
      description={t("seo.team.description")}
    />
  )
}

export default TeamPage

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
