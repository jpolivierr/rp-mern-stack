import React, { Component } from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import "./singleListing.css"
import Modal from "../Component/00-Modal/Modal"
import NavigationCopy from "../Component/00-Navigation copy/NavigationCopy"
import { Link } from "react-router-dom"
class singleListings extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
    const ref = window.location.href.split("/")
    const listingId = ref[ref.length - 1]
    const storage = JSON.parse(localStorage.getItem("listings"))
    const foundListing = storage.find((id) => {
      return id.property_id === listingId
    })
    this.setState({ ...this.state, listingInfo: foundListing })
  }
  state = {
    listingInfo: {},
    modal: false,
    navbar: false,
  }
 
  openModal = (data) => {
    this.setState({ modal: data })
  }
  closeModal = (data) => {
    this.setState({ modal: data })
  }

  render() {
    
    const Linfo = this.state.listingInfo
    const date = Linfo.list_date === undefined ? null : Linfo.list_date.slice(0,Linfo.list_date.indexOf('T')) 
    const styling = {
      background: `url('${Linfo.photo}') no-repeat center center/cover `,
    }
    let propertyTypeFormated
    switch(Linfo.prop_type){
      case 'single_family':
        propertyTypeFormated = 'Single Family'
        break
      case 'condo':
        propertyTypeFormated = 'Condo'
        break
      case 'multi_family':
        propertyTypeFormated = 'Multi Family'
        break
      case 'mobile':
        propertyTypeFormated = 'Mobile'
        break
        default : propertyTypeFormated = ''
    }

    return (
      <div>
        <NavigationCopy truemodal={this.openModal} Position="" />
        {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
        <PageHeader label=" properties" />
        <div className="Listing single-listing-page">
          <Link to="/properties" className="lising-button" >
            Back To Properties
          </Link>
          <div className="single-listing">
            <div className="single-listing-img" style={styling}></div>
            <ul className="single-listing-info">
              <li>
                {" "}
                <span>Status</span> : <span style={{color: 'var(--main-color)'}}> For Sale </span> {" "}
              </li>
              <li>
                {" "}
                <span>Price</span> : {Linfo.price}{" "}
              </li>
              <li>
                {" "}
                <span>Address</span> : {Linfo.address}{" "}
              </li>
              <li>
                {" "}
                <span>Baths</span> : {Linfo.baths}{" "}
              </li>
              <li>
                {" "}
                <span>Beds</span> : {Linfo.beds}{" "}
              </li>
              <li>
                {" "}
                <span>Lot Size</span> : {Linfo.lot_size}{" "}
              </li>
              <li>
                {" "}
                <span>SQFT</span> : {Linfo.sqft}{" "}
              </li>
              <li>
                {" "}
                <span>Office Info</span> : {Linfo.office_name}{" "}
              </li>
              <li>
                {" "}
                <span>New Construction</span> :{" "}
                {!Linfo.is_new_construction ? "No" : "Yes"}{" "}
              </li>
              <li>
                {" "}
                <span>New Listing</span> :{" "}
                {!Linfo.is_new_listing ? "No" : "Yes"}{" "}
              </li>
              <li>
                {" "}
                <span>List Date</span> : {date}{" "}
              </li>
              
              <li>
                {" "}
                <span>Property Type</span> : {propertyTypeFormated }{" "}
              </li>
              <li>
                {" "}
                <span>URL</span> : <div className='url-link' onClick={()=>{window.open(Linfo.rdc_web_url)}}>{Linfo.rdc_web_url}</div> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default singleListings
