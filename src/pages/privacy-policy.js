import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={t("privacyPolicy.title")}
        homePageText={t("home.navbar.home")}
        homePageUrl="/"
        activePageText={t("privacyPolicy.title")}
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <h1>{t("privacyPolicy.pageTitle")}</h1>
                <h3>{t("privacyPolicy.section1.title")}</h3>
                <p>{t("privacyPolicy.section1.text")}</p>

                <h3>{t("privacyPolicy.section2.title")}</h3>
                <p>{t("privacyPolicy.section2.text")}</p>

                <h3>{t("privacyPolicy.section3.title")}</h3>
                <p>{t("privacyPolicy.section3.text")}</p>

                <h3>{t("privacyPolicy.section4.title")}</h3>
                <p>{t("privacyPolicy.section4.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage

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
