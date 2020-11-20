import React from "react"
import SectionTitle from "../../Util/SectionTitle/SectionTitle"
import Button from "../../Util/Button/Button"
import "./Listing.css"
import { Link } from "react-router-dom"
import Property from "../00-Properties/Properties"

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

        <div className="Properties">
          {/* <div className=" arrow arrow-right">
                      <i className="fas fa-chevron-right"></i> 
                   </div>
                     <div className=" arrow arrow-left">
                     <i className="fas fa-chevron-left"></i> 
                       
                   </div> */}
          <Property
            className="onefade"
            img="img1"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />
          <Property
            className="2fade"
            img="img3"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />

          <Property
            className="threefade"
            img="img2"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />
          <Property
            className="threefade"
            img="img2"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />
          <Property
            className="threefade"
            img="img2"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />
          <Property
            className="threefade"
            img="img2"
            price="$250,000"
            address=" 145 nw 13th CT Miami, FL, 33167"
            detail="23,000sq | 3 Bed | 3 Bath"
          />
        </div>
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
