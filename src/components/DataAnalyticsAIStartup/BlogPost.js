import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import blog1 from "../../images/blog/blog-img1.jpg"
import blog2 from "../../images/blog/blog-img2.jpg"
import blog6 from "../../images/blog/blog-img6.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import shape1 from "../../images/shape/vector-shape1.png"
import shape2 from "../../images/shape/vector-shape2.png"

const OurBlog = () => {
  return (
    <>
      <section className="blog-area pt-100 pb-70 bg-fafafa">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="blog" />
              Our Blog
            </span>
            <h2>Latest Valuable Insights</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog1} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user1}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 30, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Six Ways to Make Smarter Decisions
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog2} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user2}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>Sarah Taylor</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 28, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      The Challenges to Tackle Before You Start With AI
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link to="/blog/blog-details">
                    <img src={blog6} alt="blog" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <img
                          src={user3}
                          className="rounded-circle"
                          alt="blog"
                        />
                        <span>David Warner</span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> April 29, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link to="/blog/blog-details">
                      Why Organisations Want an Analytics Platform
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vector-shape1">
          <img src={shape1} alt="shape" />
        </div>
        <div className="vector-shape2">
          <img src={shape2} alt="shape" />
        </div>
      </section>
    </>
  )
}

export default OurBlog
