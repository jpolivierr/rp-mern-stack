import React, { Component } from "react"
import Showcase from "../Component/01-Showcase/Showcase"
import AboutUs from "../Component/02-AboutUs/AboutUs"
import WhatWeDo from "../Component/03-WhatWeDo/WhatWeDo"
import Listing from "../Component/04-Listing/Listing"
import WhyUs from "../Component/05-WhyUs/WhyUs"
import Specialty from "../Component/06-Specialty/Specialty"
import Partner from "../Component/07-partners/Partner"
import Contact from "../Component/08-Contact/Contact"
import Navigation from '../Component/00-Navigation/Navigation'
import Modal from "../Component/00-Modal/Modal"


class Home extends Component {
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
          {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
        <Navigation truemodal={this.openModal} Position="" />
        <Showcase />
        <AboutUs />
        <WhatWeDo />
        <WhyUs />
        <Partner />
        <Specialty />
        <Listing />
        <Contact />
        {/* <Footer/> */}
      </div>
    )
  }
}
export default Home
