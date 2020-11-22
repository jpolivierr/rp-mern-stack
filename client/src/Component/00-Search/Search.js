import React from "react"
import Button from "../../Util/Button/Button"
import axios from "axios"
import { connect } from "react-redux"
import "./Search.css"
import { Component } from "react"
import { loading } from "../../reduxStuff/actions/loading"

class Search extends Component {
  clicked() {
    console.log("fired..")
    this.props.setloading(true)
  }

  render() {
    const getListings = async () => {
      this.props.setloading(true)
      console.log("fired")
      try {
        const res = await axios.get("/properties/")
        console.log(res.data.listings)
        localStorage.setItem("listings", JSON.stringify(res.data.listings))
        this.props.setloading(false)
      } catch (error) {
        console.log(error)
      }
    }

    const prices = [
      "$10,000",
      "$20,000",
      "$30,000",
      "$40,000",
      "$50,000",
      "$60,000",
      "$70,000",
      "$80,000",
      "$90,000",
      "$100,000",
    ]
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, "10+"]
    const loading = this.props.loading.loading
    console.log(loading)

    const displayNumber = number.map((number) => {
      return (
        <option key={number} value="1">
          {number}
        </option>
      )
    })
    const displayPrices = prices.map((price) => {
      return (
        <option key={price} value="1">
          {price}
        </option>
      )
    })

    return (
      <div className={`Search ${this.props.onPageSearch}`}>
        <h2>Quick Property Search</h2>
        <input type="text" placeholder="City/Zip" />
        <div className="custom-select">
          <select name="" id="">
            <option value="1">Property Type</option>
            <option value="1">Condo</option>
            <option value="1">House</option>
            <option value="1">Multi-Family</option>
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="">
            <option value="1">Bedrooms</option>
            {displayNumber}
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="">
            <option value="1">Bathrooms</option>
            {displayNumber}
          </select>
        </div>

        <div className="custom-select">
          <select name="" id="">
            <option value="1">MIN.price</option>
            {displayPrices}
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="">
            <option value="1">MAX.price</option>
            {displayPrices}
          </select>
        </div>
        <div className="custom-select filter" onClick={() => this.clicked()}>
          <i className="fas fa-filter"></i> Filter
        </div>

        <Button
          clicked={() => getListings()}
          type="advance"
          loader={
            loading === false ? (
              ""
            ) : (
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            )
          }
          loaderbk={loading === false ? "" : "loader"}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setloading: (load) => dispatch(loading(load)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
