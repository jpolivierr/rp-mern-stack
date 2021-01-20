import React from "react"
import { Component } from "react"
// import AboutUs from '../Component/02-AboutUs/AboutUs'
// import Contact from '../Component/08-Contact/Contact'
import { Aboutuspage } from "../Component/02-AboutUs/AboutUs"
import Modal from "../Component/00-Modal/Modal"
import NavigationCopy from "../Component/00-Navigation copy/NavigationCopy"

class Aboutus extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
  }
  componentDidUpdate(){
    window.scrollTo({ top: 0, behavior: "smooth" })
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
        <NavigationCopy truemodal={this.openModal} Position="" />
        <Aboutuspage />
        {/* <Footer/> */}
      </div>
    )
  }
}
export default Aboutus
