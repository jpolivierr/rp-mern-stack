import React from "react"
import "./Showcase.css"
import Button from "../../Util/Button/Button"
import Search from "../00-Search/Search"
import { Link } from "react-router-dom"

function Showcase() {
  return (
    <div className="Showcase">
      <div className="side-img"></div>
      <div className="side-nav">
        <div className="social-nav">
          <i class="fab fa-facebook-f" onClick={()=>{window.open('https://www.facebook.com/resurrectingpropertiesllc/')}}></i>
          <i class="fab fa-instagram"onClick={()=>{window.open('https://www.instagram.com/')}}></i>
          <i class="fab fa-linkedin-in" onClick={()=>{window.open('https://www.linkedin.com/')}}></i>
          <i class="fab fa-twitter" onClick={()=>{window.open('https://www.twitter.com/')}}></i>
        </div>
        <span>
          SCROLL DOWN <i class="fas fa-chevron-right"></i>
          <i class="fas fa-chevron-right"></i>{" "}
        </span>
      </div>
      <div className="main-section-box">
        <div className="showcase-content">
          <h1>
          Reviving Homes, <br />Restoring  Communities
        </h1>
        <Link to="/about">
            <Button
              type="main"
              label="Learn More"
              color="white"
              backcolor="var(--main-color)"
            />
          </Link>
        </div>
        
        <Search />
      </div>
    </div>
  )
}

export default Showcase
