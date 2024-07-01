import React, { Component } from "react"
import Layout from "../components/_App/layout"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

import gallery1 from "../images/gallery/gallery1.jpg"
import gallery2 from "../images/gallery/gallery2.jpg"
import gallery3 from "../images/gallery/gallery3.jpg"
import gallery4 from "../images/gallery/gallery4.jpg"
import gallery5 from "../images/gallery/gallery5.jpg"
import gallery6 from "../images/gallery/gallery6.jpg"
import gallery7 from "../images/gallery/gallery7.jpg"
import gallery8 from "../images/gallery/gallery8.jpg"
import gallery9 from "../images/gallery/gallery9.jpg"

import Lightbox from "react-18-image-lightbox"

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
]

export default class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <Layout>
        <Navbar />

        <PageBanner
          pageTitle="Gallery"
          homePageText="Home"
          homePageUrl="/"
          activePageText="Gallery"
        />

        <div className="gallery-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 0 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery1} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 1 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery2} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 2 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery3} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 3 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery4} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 4 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery5} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 5 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery6} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 6 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery7} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 7 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery8} alt="event" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="gallery-img"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 8 })
                    }
                   aria-hidden="true"
                  >
                    <img src={gallery9} alt="event" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>

        <Footer />
      </Layout>
    )
  }
}
