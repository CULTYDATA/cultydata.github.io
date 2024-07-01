import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import CoursesContent from "../../components/Courses/CoursesContent"
import Footer from "../../components/_App/Footer"

const CoursesPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Course Grid"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Course Grid"
      />

      <CoursesContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Courses" />

export default CoursesPage
