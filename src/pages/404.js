import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"

import errorImg from "../images/error.png"

const NotFoundPage = () => (
  <Layout>
    <section className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src={errorImg} alt="Error" />
              <h3>Error 404 : Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <div className="btn-box">
                <Link to="/" className="default-btn">
                  <i className="flaticon-history"></i>Go Back Homepage<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
