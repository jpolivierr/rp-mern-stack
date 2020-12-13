import React from "react"
import Button from "../../Util/Button/Button"
import axios from "axios"
import { connect } from "react-redux"
import "./Search.css"
import { Component } from "react"
import { loading } from "../../reduxStuff/actions/loading"
import { withRouter } from "react-router-dom"

class Search extends Component {
  state = {
    cityOrZipcode: "",
    propertyType: "",
    beds: "",
    baths: "",
    minPrice: "",
    maxPrice: "",
    cs_error: "",
    noResultError: "",
    no_city_error: ''
  }

  handleClick = () => {
    this.props.history.push("/properties")
  }

  getListings = () => {
    this.setState({ ...this.state, cs_error: "" })
    this.props.setloading(true)
    const config = {
      headers: { "Content-Type": "application/json" },
    }
    const body = JSON.stringify(this.state)
    axios
      .post("/properties", body, config)
      .then((res) => {
        this.handleClick()
        if (res.data.listings.length === 0) {
          this.setState({
            ...this.state,
            noResultError: "No Result Found. Please try a different search",
          })
          this.props.setloading(false)
        } else {
          this.setState({ ...this.state, noResultError: "" })
          localStorage.setItem("listings", JSON.stringify(res.data.listings))
          this.props.setloading(false)
        }
      })
      .catch((err) => {
        if (err.response.data.errorType === 1) {
          this.setState({ ...this.state, cs_error: "cs-error" })
        } else if (err.response.data.errorType === 3) {
          this.setState({ ...this.state, no_city_error: "no-city-error" })
        }
        console.log(err)
        this.props.setloading(false)
      })
  }

  render() {
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
      "$200,000",
      "$300,000",
      "$400,000",
      "$500,000",
      "$600,000",
      "$700,000",
      "$800,000",
      "$900,000",
      "$1000,000",
    ]
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 10]
    const loading = this.props.loading.loading
    const displayNumber = number.map((number) => {
      return (
        <option key={number} value={number}>
          {number}
        </option>
      )
    })
    const displayPrices = prices.map((price) => {
      return (
        <option key={price} value={price}>
          {price}
        </option>
      )
    })

    return (
      <div className={`Search ${this.props.onPageSearch}`}>
        <div className="noResult">{this.state.noResultError}</div>

        <h3>Property Search</h3>

        <div className= {`option-box ${this.state.no_city_error}`} >
          <input
            className=""
            type="text"
            placeholder="Enter Your City"
            onChange={(e) =>
              this.setState({ ...this.state, cityOrZipcode: e.target.value })
            }
          />

          <div className="custom-select">
            <select
              name=""
              id=""
              value={this.state.propertyType}
              onChange={(e) =>
                this.setState({ ...this.state, propertyType: e.target.value })
              }
            >
              <option value="">Property Type</option>
              <option value="Condo">Condo</option>
              <option value="Single_Family">Single_Family</option>
              <option value="Multi_Family">Multi_Family</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>

          <div className="custom-select">
            <select
              name=""
              id=""
              value={this.state.beds}
              onChange={(e) =>
                this.setState({ ...this.state, beds: e.target.value })
              }
            >
              <option value="Bedrooms">Bedrooms</option>
              {displayNumber}
            </select>
          </div>

          <div className="custom-select">
            <select
              name=""
              id=""
              onChange={(e) =>
                this.setState({ ...this.state, baths: e.target.value })
              }
            >
              <option value="Bathrooms">Bathrooms</option>
              {displayNumber}
            </select>
          </div>

          <div className={`custom-select ${this.state.cs_error} `}>
            <select
              name=""
              id=""
              onChange={(e) =>
                this.setState({ ...this.state, minPrice: e.target.value })
              }
            >
              <option value="MIN.price">MIN.price</option>
              {displayPrices}
            </select>
          </div>

          <div className="custom-select">
            <select
              name=""
              id=""
              onChange={(e) =>
                this.setState({ ...this.state, maxPrice: e.target.value })
              }
            >
              <option value="MAX.price">MAX.price</option>
              {displayPrices}
            </select>
          </div>

          <Button
            clicked={() => this.getListings()}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
