import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import EventsCard from "../../components/Events/EventsCard"
import Footer from "../../components/_App/Footer"

const EventsPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Events"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Events"
      />

      <EventsCard />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Events" />

export default EventsPage
