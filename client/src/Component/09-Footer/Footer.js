import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-box">
        <div className="F quick-nav">
          <h3>Navigation</h3>
          <ul>
            <Link style={{ textDecoration: "none" }} to="/">
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <li>About Us</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/sellahome">
              <li>Sell A Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/properties">
              <li>Properties</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/partners">
              <li>Our Partners</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="F Contact-info">
          <h3>Contact</h3>
          <ul>
            <li>145 NW 13th st Miami, FL 33168</li>
            <li><a className='email-link' href="mailto:contact@resurrectingproperties.com ">contact@resurrectingproperties.com </a></li>
            
            <li>786.526.8897</li>
          </ul>
        </div>
    
        <div className="F newsLetter">
          <h3>JOIN OUR NEWS LETTER</h3>
          <form className='newLetter-form' action="">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <button style={{cursor: 'pointer'}}>SUBMIT</button>
          </form>
          
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <div className="Bf-box">
            © Copyright 2021 Resurrectingproperties. All Rights Reserved. Design by Appvenir.
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
