import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import LoginForm from "../components/ProfileAuthentication/LoginForm"
import RegisterForm from "../components/ProfileAuthentication/RegisterForm"
import Footer from "../components/_App/Footer"

const ProfileAuthenticationPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Profile Authentication"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Profile Authentication"
      />

      <section className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <LoginForm />
            </div>

            <div className="col-lg-6 col-md-12">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Profile Authentication" />

export default ProfileAuthenticationPage
