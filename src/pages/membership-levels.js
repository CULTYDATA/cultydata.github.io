import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import { Link } from "gatsby"

const MembershipLevelsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Member Ship Levels"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Member Ship Levels"
      />

      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th aria-hidden="true"></th>
                  <th>
                    <span className="price">$500</span>
                    <span className="title">Silver Membership</span>
                    <span className="desc">You can view few features</span>
                  </th>
                  <th>
                    <span className="price">$1,000</span>
                    <span className="title">Gold Membership</span>
                    <span className="desc">You can view most features</span>
                  </th>
                  <th>
                    <span className="price">$1,500</span>
                    <span className="title">Diamond Membership</span>
                    <span className="desc">You can view all features</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>4</td>
                  <td>8</td>
                  <td>15</td>
                </tr>

                <tr>
                  <td>Investment Fundamentals & Data Analytics</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Hands-On Python & R In Data Science</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Complete Data Science Bootcamp</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Programming MasterclassName for Developers</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Hands-On Artificial Neural Networks</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>PRINCE2® Practitioner Certification Training</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>PMI-RMP® Certification Training</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>PRINCE2® Foundation Certification Training</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>PMP® Plus</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>PMP® Renewal Pac</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Digital Project Manager</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Agile Project Management; Agile Delivery</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Vue JS 2 - The Complete Guide</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Everything You Need to Program in Python</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Mathematical Foundation For Machine Learning</td>

                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>

                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>

                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Drawing Course - Beginner to Advanced</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Deep Learning and Artificial Intelligence</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Information About UI/UX Design Degree</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Photography Photo modify and Beautiful</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Professional IT Expert Certificate Course</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Membership Levels" />

export default MembershipLevelsPage
