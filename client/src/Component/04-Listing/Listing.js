import React from "react"
import SectionTitle from "../../Util/SectionTitle/SectionTitle"
import Button from "../../Util/Button/Button"
import "./Listing.css"
import { Link } from "react-router-dom"
import ListingBox from '../00-ListingBox/ListingBox'

export default function Listing() {

  return (
    <div className="Listing">
      <div className="Listing-box">
        <SectionTitle
          scstyle="Sc-title Sc-title-center"
          number="05"
          textAlign="center"
          subTitle="Our properties"
          theclass="theclass"
          alignsub="center"
          Title="VIEW PROPERTIES"
          align="center"
          titleWidth="300px"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
          pdisplay="none"
          pWidth=""
        />
        

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
