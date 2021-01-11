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
          <i className="fab fa-facebook-f" onClick={()=>{window.open('https://www.facebook.com/resurrectingpropertiesllc/')}}></i>
          <i className="fab fa-instagram"onClick={()=>{window.open('https://www.instagram.com/resurrectingpropertiesllc/')}}></i>
        </div>
        <span>
          SCROLL DOWN <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>{" "}
        </span>
      </div>
      <div className="main-section-box">
        <div className="showcase-content">
          <h1>
          Reviving Homes, <br />Restoring  Communities
        </h1>
        <Link to="/properties">
            <Button
              type="main"
              label="VIEW PROPERTIES"
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
