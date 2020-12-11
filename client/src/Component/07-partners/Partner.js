import React from "react"
import Button from "../../Util/Button/Button"
import "./Partner.css"
import { Link } from "react-router-dom"

function Partner() {
  return (
    <div className="Partner">
      <div className="Partner-box">
        <div className="Partner-photos">
          <div className="P-photo investor">
            {" "}
            <p>Contractor</p>{" "}
          </div>
          <div className="P-photo realtor">
            <p>Realtor</p>
          </div>
          <div className="P-photo contractor">
            <p>Investor</p>
          </div>
        </div>
        <div className="Partner-content">
        <h2 className='h2-row'> <span>Partners</span> BECOME A <br/> PARTNER</h2>
          <p>
            We work with real estate investing companies, individual home
            sellers and buyers, and contractors alike. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, molestias!
          </p>
          <div className="P-btn">
            <Link to="/partners">
              <Button
                type="main"
                label="Learn More"
                color="white"
                backcolor="var(--main-color)"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
