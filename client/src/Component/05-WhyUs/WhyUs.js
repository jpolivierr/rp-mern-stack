import React from "react"
import Button from "../../Util/Button/Button"
import { Link } from "react-router-dom"
import "./WhyUs.css"
function WhyUs() {
  return (
    <div className="WhyUs">
      <div className="WhyUs-bkg"></div>
      <div className="WhyUs-box">
        <div className="W-c">
          <h2 className="h2-row">
            {" "}
            <span>Why us</span> WHY WORK <br /> WITH US?
          </h2>
          <p>
             When working with us you will feel like part of our team as we will do
            all we can to meet your needs. Whether you are a person looking to
            sell or buy a home, a realtor, investor, or contractor you can rest
            assure we have your best interest in mind. When working with us you can ensure we are:
          </p>
          <ul>
            <li>
              <i className="fas fa-check"></i>Keeping the project within the
              estimated deadline
            </li>
            <li>
              <i className="fas fa-check"></i>Maintaining a highly efficient
              communication with our clients
            </li>
            <li>
              <i className="fas fa-check"></i>Finding creative solutions to
              unexpected problems
            </li>
            <li>
              <i className="fas fa-check"></i>Keeping the quality standard to a high level
            </li>
            {/* <li><i className="fas fa-check"></i>Keeping the quality standard to a high level;</li> */}
          </ul>
          <Link to="/about">
            <Button
              type="main"
              label="Learn More"
              color="white"
              backcolor="var(--main-color)"
            />
          </Link>
        </div>
        <div className="W-img-box">
          <div className="W-img"></div>
          <div className="dot-img"></div>
        </div>
      </div>
    </div>
  )
}
export default WhyUs
