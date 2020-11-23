import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import Property from "../00-Properties/Properties"
import axios from "axios"
import "./ListingBox.css"

class ListingBox extends Component {
  componentDidMount() {
    if (localStorage.getItem("listings") === null) {

      console.log("fired from didMount")
      axios
        .get("/demo")
        .then((res) => {
          localStorage.setItem("listings", JSON.stringify(res.data))
        })
        .then(() => {
          const propertyInfo = JSON.parse(localStorage.getItem("listings"))
          this.setState({ ...this.state, listings: propertyInfo })
        })
        .catch((err) => console.log(err))
    } else {
      return null
    }
  }
  state = {
    listings: [],
  }

  render() {
    const listings = JSON.parse(localStorage.getItem("listings")) === null ? this.state.listings : JSON.parse(localStorage.getItem("listings"))
    const loading = this.props.loading
    const properties = listings.map((listings) => {
      const address = listings.address_new.line
      const city = listings.address_new.city
      const zipcode = listings.address_new.postal_code
      const state = listings.address_new.state_code
      const baths = listings.baths
      const beds = listings.beds
      const photo = listings.photo
      const price = listings.price
      const size = listings.sqft
      return (
        <Property
          key={listings.property_id}
          kid={listings.property_id}
          img={photo}
          price={price}
          address={`${address} ${city}, ${state}, ${zipcode}`}
          detail={`${size}| ${beds} Bed | ${baths} Bath`}
        />
      )
    })
    return (
      <div className={`Properties ${loading === false ? "" : "loading"}`}>
        {properties}
      </div>
    )
  }
}
const mapPropsToState = (state) => {
  return { loading: state.loading.loading }
}

export default connect(mapPropsToState)(ListingBox)
