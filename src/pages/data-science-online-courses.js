import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/DataScienceOnlineCourses/MainBanner"
import Partner from "../components/DataScienceOnlineCourses/Partner"
import FeaturedServices from "../components/DataScienceOnlineCourses/FeaturedServices"
import AboutUs from "../components/DataScienceOnlineCourses/AboutUs"
import OurMission from "../components/DataScienceOnlineCourses/OurMission"
import Funfacts from "../components/DataScienceOnlineCourses/Funfacts"
import Courses from "../components/DataScienceOnlineCourses/Courses"
import ExploreLearning from "../components/DataScienceOnlineCourses/ExploreLearning"
import UpcomingBootcamps from "../components/DataScienceOnlineCourses/UpcomingBootcamps"
import Testimonials from "../components/DataScienceOnlineCourses/Testimonials"
import OurBlog from "../components/DataScienceOnlineCourses/BlogPost"
import Subscribe from "../components/DataScienceOnlineCourses/Subscribe"
import Footer from "../components/_App/Footer"

const DataScienceOnlineCoursesPage = () => {
  return (
    <Layout>

      <Navbar />

      <MainBanner />

      <Partner />

      <FeaturedServices />

      <AboutUs />

      <OurMission />

      <Funfacts />

      <Courses />

      <ExploreLearning />

      <UpcomingBootcamps />

      <Testimonials />

      <OurBlog />

      <Subscribe />

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

export default DataScienceOnlineCoursesPage
