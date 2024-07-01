import React from "react"
import { Link } from "gatsby"

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <h3 className="widget-title">Search</h3>

          <form className="search-form">
            <label htmlFor="search">
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_tracer_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>
            <div className="info">
              <span>June 10, 2020</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  The Data Surrounding Higher Education
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>
            <div className="info">
              <span>June 21, 2020</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  Conversion Rate the Sales Funnel Optimization
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>
            <div className="info">
              <span>June 30, 2020</span>
              <h4 className="title usmall">
                <Link to="/blog/blog-details">
                  Business Data is changing the world’s Energy
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link to="/blog">
                Design <span className="post-count">(03)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Lifestyle <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Script <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Device <span className="post-count">(08)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Tips <span className="post-count">(01)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link to="/blog">
              Business <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="/blog">
              Design <span className="tag-link-count">(3)</span>
            </Link>
            <Link to="/blog">
              Braike <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="/blog">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link to="/blog">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link to="/blog">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSidebar
