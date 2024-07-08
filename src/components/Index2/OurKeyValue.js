import React from "react"

import process1 from "../../images/process/cloudinfrastructure.jpg"
import process2 from "../../images/process/123.png"
import process3 from "../../images/process/3.png"
import process4 from "../../images/process/cloudsecurity.png"

import SliderComponent from "./SliderComponent"

const slidesData = [
  {
    heading: "Delivering Unique Value: Our Key Differentiators",
    content:
      "We take pride in our ability to deliver unique value through our projects. Here are some of the key value additions we bring to each project",

    image: process1,
  },

  {
    heading: "Fault-Tolerant Architecture",
    content:
      " Our designs prioritise resilience, incorporating redundancies and fail-safes to ensure your platform remains operational even in the face of unexpected challenges.",
    image: process2,
  },

  {
    heading: "Scalability Built-In from Day One",
    content:
      " We architect your solutions with growth in mind, enabling seamless scaling as your user base and data needs expand over time.",
    image: process3,
  },
  {
    heading: "Security-First Approach",
    content:
      "Security is not an afterthought but a fundamental aspect of  our development process. We implement robust security measures to protect your data and users from potential threats.",
    image: process4,
  },
]
const OurKeyValue = () => {
  return (
    <>
      <section className="process-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Delivering Unique Value: Our Key Differentiators</h2>
            <p>
              We take pride in our ability to deliver unique value through our
              projects. Here are some of the key value additions we bring to
              each project
            </p>
          </div>

          <SliderComponent slidesData={slidesData} />
        </div>
      </section>
    </>
  )
}

export default OurKeyValue
