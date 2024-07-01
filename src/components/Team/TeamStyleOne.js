import React from "react"
import { Link } from "gatsby"
import scientist1 from "../../images/scientist/scientist1.png"
import scientist2 from "../../images/scientist/scientist2.png"
import scientist3 from "../../images/scientist/scientist3.png"
import scientist4 from "../../images/scientist/scientist4.png"
import scientist5 from "../../images/scientist/scientist5.png"
import scientist6 from "../../images/scientist/scientist6.png"
import scientist7 from "../../images/scientist/scientist7.png"
import scientist8 from "../../images/scientist/scientist8.png"

const TeamStyleOne = () => {
  return (
    <>
      <div className="scientist-area bg-color pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist1} alt="about" />
                </div>
                <div className="content">
                  <h3>Merv Adrian</h3>
                  <span>Data Management</span>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist2} alt="about" />
                </div>
                <div className="content">
                  <h3>Kirk Borne</h3>
                  <span>Data Scientist</span>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist3} alt="about" />
                </div>
                <div className="content">
                  <h3>Carla Gentry</h3>
                  <span>Analytical Solutions</span>

                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist4} alt="about" />
                </div>
                <div className="content">
                  <h3>Marie Curie</h3>
                  <span>Data Scientist</span>

                  <ul className="social">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist5} alt="about" />
                </div>
                <div className="content">
                  <h3>Alina Sophia</h3>
                  <span>Data Management</span>

                  <ul className="social">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist6} alt="about" />
                </div>
                <div className="content">
                  <h3>Liam Oliver</h3>
                  <span>Data Scientist</span>

                  <ul className="social">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist7} alt="about" />
                </div>
                <div className="content">
                  <h3>Emma Olivia</h3>
                  <span>Analytical Solutions</span>

                  <ul className="social">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-scientist-box">
                <div className="image">
                  <img src={scientist8} alt="about" />
                </div>
                <div className="content">
                  <h3>Elijah William</h3>
                  <span>Data Scientist</span>

                  <ul className="social">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamStyleOne
