import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"

const Pricing = () => {
  return (
    <>
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="priceing" />
              Pricing
            </span>
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <span className="title">List Of Features</span>
                  </th>
                  <th>
                    <span className="price">$15.00</span>
                    <span className="title">Basic Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                  <th>
                    <span className="price">$35.00</span>
                    <span className="title">Advanced Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                  <th>
                    <span className="price">$65.00</span>
                    <span className="title">Expert Plan</span>
                    <span className="desc">/Monthly</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Number of features</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <Link to="#">5 GB Bandwidth</Link>
                  </td>
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
                  <td>
                    <Link to="#">Highest Speed</Link>
                  </td>
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
                  <td>
                    <Link to="#">1 GB Storage</Link>
                  </td>
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
                  <td>
                    <Link to="#">Unlimited Website</Link>
                  </td>
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
                  <td>
                    <Link to="#">Unlimited Users</Link>
                  </td>
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
                  <td>
                    <Link to="#">24x7 Great Support</Link>
                  </td>
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
                  <td>
                    <Link to="#">Data Security and Backups</Link>
                  </td>
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
                  <td>
                    <Link to="#">Monthly Reports and Analytics</Link>
                  </td>
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
    </>
  )
}

export default Pricing
