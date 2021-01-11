import React, { Component } from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import Contact from "../Component/08-Contact/Contact"
import ListingBox from "../Component/00-ListingBox/ListingBox"
import Search from "../Component/00-Search/Search"
import { Link } from "react-router-dom"
import Modal from "../Component/00-Modal/Modal"
import NavigationCopy from '../Component/00-Navigation copy/NavigationCopy'
class Listings extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
  }
  state = {
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
    return (
      <div>
            <NavigationCopy truemodal={this.openModal} Position=""/>
          {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
        <PageHeader label=" properties" />
        <div className="Listing lising-on-page">
          <div className="Listing-box">
            <Search onPageSearch="on-Page-Search" />
            <ListingBox />
            <Link style={{ textDecoration: "none" }} to="/listings">
              {/* <div className="alllisting">
            <p>View All Listings</p> 
                 </div>  */}
            </Link>
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}

export default Listings
