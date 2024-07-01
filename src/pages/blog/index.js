import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import BlogCard from "../../components/BlogContent/BlogCard"
import Footer from "../../components/_App/Footer"

const BlogPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Blog"
      />

      <BlogCard />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export default BlogPage
