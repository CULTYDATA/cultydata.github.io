import React from "react"
import { Link } from "gatsby"
import img4 from "../../images/blog/blog-img4.jpg"
import img5 from "../../images/blog/blog-img5.jpg"
import img6 from "../../images/blog/blog-img6.jpg"
import img7 from "../../images/blog/blog-img7.jpg"
import img8 from "../../images/blog/blog-img8.jpg"
import img10 from "../../images/blog/blog-img10.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import user4 from "../../images/user4.jpg"
import user5 from "../../images/user5.jpg"
import user6 from "../../images/user6.jpg"

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

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img7} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user4}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 8, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      The data-driven approach to understanding
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img8} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user5}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 9, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Finding the blocks of neighboring fields
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post bg-fffbf5">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={img10} alt="Blog post" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user6}
                          className="rounded-circle"
                          alt="Blog post"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 10, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Data into Your Enterprise to Drive Insights
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              {/* Pagination */}
              <div className="pagination-area text-center">
                <Link to="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </Link>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <Link to="#" className="page-numbers">
                  2
                </Link>
                <Link to="#" className="page-numbers">
                  3
                </Link>
                <Link to="#" className="page-numbers">
                  4
                </Link>
                <Link to="#" className="next page-numbers">
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
