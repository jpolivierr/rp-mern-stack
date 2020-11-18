import React from "react"
import "./Showcase.css"
// import Button from '../../Util/Button/Button'
// import Navigation from '../00-Navigation/Navigation'
// import SectionTitle from '../../Util/SectionTitle/SectionTitle'
import Search from "../00-Search/Search"
import { Link } from "react-router-dom"

function Showcase() {
  return (
    <div className="Showcase">
      <div className="main-section-box">
        <h1>
          Reviving Homes, Restoring <br /> Communities
        </h1>
        <Search />
      </div>
      
    </div>
  )
}

export default Showcase
