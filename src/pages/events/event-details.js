import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import EventDetailsContent from "../../components/Events/EventDetailsContent"
import EventSpeakers from "../../components/Events/EventSpeakers"
import Footer from "../../components/_App/Footer"

const EventDetailsPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Event Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Event Details"
      />

      <EventDetailsContent />

      <EventSpeakers />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Event Details" />

export default EventDetailsPage
