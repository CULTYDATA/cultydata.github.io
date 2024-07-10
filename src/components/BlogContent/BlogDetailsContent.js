import React from "react"
import { Link } from "gatsby"

import img6 from "../../images/blog/blog-img6.jpg"
import img4 from "../../images/blog/blog-img4.jpg"
import img5 from "../../images/blog/blog-img5.jpg"
import img7 from "../../images/blog/blog-img7.jpg"

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={img6} alt="Blog post" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="bx bx-folder-open"></i>
                        <span>Category</span>
                        <Link to="/blog">Fashion</Link>
                      </li>
                      <li>
                        <i className="bx bx-group"></i>
                        <span>View</span>
                        <Link to="#">813,454</Link>
                      </li>
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>Last Updated</span>
                        <Link to="#">25/04/2020</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>It’s Time To Think Differently About Homeschooling</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img4} alt="Blog post" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img5} alt="Blog post" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={img7} alt="Blog post" />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className="features-list">
                    <li>
                      <i className="bx bx-badge-check"></i> Scientific skills
                      for getting a better result
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> Communication skills
                      to getting in touch
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> A career overview
                      opportunity available
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i> A good work
                      environment for work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The rise of marketing and why you need it</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailsContent
