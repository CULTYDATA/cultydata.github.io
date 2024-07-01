import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import BlogDetailsContent from "../../components/BlogContent/BlogDetailsContent"
import Footer from "../../components/_App/Footer"

const BlogDetailsPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog Details"
      />

      <BlogDetailsContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog Details" />

export default BlogDetailsPage
