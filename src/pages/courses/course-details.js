import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import CourseDetailsContent from "../../components/CoursesDetails/CourseDetailsContent"
import RelatedCourses from "../../components/CoursesDetails/RelatedCourses"
import Footer from "../../components/_App/Footer"

const CourseDetailsPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Course Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Course Details"
      />

      <CourseDetailsContent />

      <RelatedCourses />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Course Details" />

export default CourseDetailsPage
