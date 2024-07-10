import React from "react"
import { Link } from "gatsby"
import img4 from "../../images/blog/blog-img4.jpg"
import img5 from "../../images/blog/blog-img5.jpg"
import img6 from "../../images/blog/blog-img6.jpg"

import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img4} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user1}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 5, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      The Data Surrounding Higher Education
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img5} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user2}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>Sarah Taylor</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 6, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Conversion Rate the Sales Funnel Optimization
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img6} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user3}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April7, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Business Data is changing the world’s Energy
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
