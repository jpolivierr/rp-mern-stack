import React, { Component } from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import Specialty from "../Component/06-Specialty/Specialty"
import Contact from "../Component/08-Contact/Contact"
import ListingBox from "../Component/00-ListingBox/ListingBox"
import Search from "../Component/00-Search/Search"
import { Link } from "react-router-dom"
import Button from "../Util/Button/Button"
class Listings extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
  }
  render() {
    return (
      <div>
        <PageHeader label=" properties" />
        <div className="Listing">
          <div className="Listing-box">
            <Search onPageSearch="on-Page-Search" />
            <ListingBox />
            <Link style={{ textDecoration: "none" }} to="/listings">
              <Button
                type="main"
                label="Load More"
                color="white"
                backcolor="var(--main-color)"
              />
              {/* <div className="alllisting">
            <p>View All Listings</p> 
                 </div>  */}
            </Link>
          </div>
        </div>
        <Specialty />
        <Contact />
      </div>
    )
  }
}

export default Listings
