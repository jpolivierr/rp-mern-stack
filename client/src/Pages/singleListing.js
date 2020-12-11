import React, { Component } from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import './singleListing.css'
class singleListings extends Component {
  componentDidMount() {
    const scroll = ()=> {
      window.scrollTo(0,0)
     }
     scroll()
    const ref = window.location.href.split('/')
    const listingId = (ref[ref.length -1 ])
    const storage = JSON.parse(localStorage.getItem('listings'))
    const foundListing = storage.find((id)=>{
     return id.property_id === listingId
    })
    this.setState({...this.state, listingInfo: foundListing})
  }
  state = {
    listingInfo: {}
  }

  render() {
    const Linfo = this.state.listingInfo
    const styling = {background: `url('${Linfo.photo}') no-repeat center center/cover `}
    
    return (
      <div>
        <PageHeader label=" properties" />
        <div className="Listing">
          <div className="single-listing">
             <div className="single-listing-img" style={styling}></div>
             <ul className="single-listing-info">
                 <li> <span>Price</span> : {Linfo.price} </li>
                 <li> <span>Address</span> : {Linfo.address} </li>
                 <li> <span>Baths</span> : {Linfo.baths}  </li>
                 <li> <span>Lot Size</span> : {Linfo.lot_size} </li>
                 <li> <span>SQFT</span> : {Linfo.sqft}  </li>
                 <li> <span>Office Info</span> : {Linfo.office_name}  </li>
                 <li> <span>New Construction</span> : {!Linfo.is_new_construction ? 'No' : 'Yes'}  </li>
                 <li> <span>New Listing</span> : {!Linfo.is_new_listing ? 'No' : 'Yes'}  </li>
                 <li> <span>Status</span> : {!Linfo.is_new_listing ? 'No' : 'Yes'}  </li>
                 <li> <span>List Date</span> : {Linfo.list_date}  </li>
                 <li> <span>Status</span> : {Linfo.prop_status}  </li>
                 <li> <span>Property Type</span> : {Linfo.prop_type}  </li>
                 <li> <span>URL</span> : {Linfo.rdc_web_url}  </li>
             </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default singleListings
