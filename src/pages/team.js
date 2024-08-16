import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import TeamMembers from "../components/Index2/TeamMembers"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import TeamSectionOne from "../components/Team/TeamSectionOne"
import TeamSectionTwo from "../components/Team/TeamSectionTwo"
import TeamSectionThree from "../components/Team/TeamSectionThree"

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
      <TeamSectionThree />

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Team" />

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
