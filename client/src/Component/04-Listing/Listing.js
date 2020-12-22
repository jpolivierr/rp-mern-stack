import React from "react"
import Button from "../../Util/Button/Button"
import "./Listing.css"
import { Link } from "react-router-dom"
import ListingBox from '../00-ListingBox/ListingBox'

export default function Listing() {

  return (
    <div className="Listing">
      <div className="Listing-box">
      <h2 className='h2-column'> <span>Properties</span> VIEW PROPERTIES</h2>
      <p className='sp'>We have a variety of properties <br/> that will fit your needs. </p>
        <ListingBox/>
        <Link style={{ textDecoration: "none" }} to="/properties">
          <Button
            type="main"
            label="View All Listings"
            color="white"
            backcolor="var(--main-color)"
          />
          {/* <div className="alllisting">
                <p>View All Listings</p> 
                     </div>  */}
        </Link>
      </div>
    </div>
  )
}
