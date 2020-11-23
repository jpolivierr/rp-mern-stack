import React from "react"
import Button from "../../Util/Button/Button"
import axios from "axios"
import { connect } from "react-redux"
import "./Search.css"
import { Component } from "react"
import { loading } from "../../reduxStuff/actions/loading"

class Search extends Component {
  state = {
    cityOrZipcode: "",
    propertyType: "",
    beds: "",
    baths: "",
    minPrice: "",
    maxPrice: "",
  }
  clicked() {
    console.log("fired..")
    this.props.setloading(true)
  }

  render() {
    const getListings = () => {
      this.props.setloading(true)
      const config = {
        headers: {"Content-Type":"application/json"}
      }
      const body = JSON.stringify(this.state)
      console.log(body)
      axios
        .post("/properties",body,config)
        .then((res) => {
          localStorage.setItem("listings", JSON.stringify(res.data.listings))
          this.props.setloading(false)
        })
        .catch((err) => console.log(err))
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
    const number = [1, 2, 3, 4, 5, 6, 7, 8, "10+"]
    const loading = this.props.loading.loading
    // console.log(this.state)
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
        <h2>Quick Property Search</h2>
        <input type="text" placeholder=" City/Zip" onChange={(e)=> this.setState({...this.state,cityOrZipcode: e.target.value})} />
        <div className="custom-select">
          <select
            name=""
            id=""
            value="1"
            onChange={(e) => this.setState({...this.state, propertyType: e.target.value})}
          >
            <option value="1">Property Type</option>
            <option value="Condo">Condo</option>
            <option value="Single_Family">Single_Family</option>
            <option value="Multi_Family">Multi_Family</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="" value="0" onChange={(e) => this.setState({...this.state, beds: e.target.value})}>
            <option>Bedrooms</option>
            {displayNumber}
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="" onChange={(e) => this.setState({...this.state, baths: e.target.value})}>
            <option value="1">Bathrooms</option>
            {displayNumber}
          </select>
        </div>

        <div className="custom-select">
          <select name="" id="" onChange={(e) => this.setState({...this.state, minPrice: e.target.value})}>
            <option value="1">MIN.price</option>
            {displayPrices}
          </select>
        </div>
        <div className="custom-select">
          <select name="" id="" onChange={(e) => this.setState({...this.state, maxPrice: e.target.value})} >
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
