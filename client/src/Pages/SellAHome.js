import React from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import Specialty from "../Component/06-Specialty/Specialty"
import "./SellAHome.css"
import axios from "axios"
import { Component } from "react"
import Modal from "../Component/00-Modal/Modal"
import NavigationCopy from "../Component/00-Navigation copy/NavigationCopy"

class SellAHome extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
  }
  state = {
    fname: "",
    lname: "",
    email: "",
    message: "",
    phone: "",
    modal: false,
    navbar: false,
    messageSent: ''
  }
  openModal = (data) => {
    this.setState({ modal: data })
  }
  closeModal = (data) => {
    this.setState({ modal: data })
  }

  formInputs = (e) => {
    // const formCopy = {...this.state}
    const value = e.target.value

    switch (e.target.id) {
      case "fname":
        this.setState({ fname: value })
        break
      case "lname":
        this.setState({ lname: value })
        break
      case "email":
        this.setState({ email: value })
        break
      case "message":
        this.setState({ message: value })
        break
      case "phone":
        this.setState({ phone: value })
        break
      default:
        return null
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()

    const classes = e.target.childNodes
    const body = JSON.stringify(this.state)
    const config = {
      headers: { "Content-Type": "application/json" },
    }

    classes.forEach((child) => {
      if (child.id === "fname") {
        child.className = ""
        child.placeholder = "First Name"
      } else if (child.id === "lname") {
        child.className = ""
        child.placeholder = "Last Name"
      } else if (child.id === "email") {
        child.className = ""
        child.placeholder = "Email"
      }
    })

    try {
      const res = await axios.post("/client", body, config)
      if (res.data) {
        this.setState({messageSent: 'Message Sent! Thank you for contacting us'})
        classes.forEach((child) => {
          if (child.id === "serverMsg") {
            child.className = "serverMsg"
            child.innerHTML = res.data.success_message
            this.setState({
              ...this.state,
              fname: "",
              lname: "",
              email: "",
              phone: "",
              message: "",
            })
            setTimeout(() => {
              this.setState({messageSent: ''})
              child.className = ""
              child.innerHTML = ""
            }, 4000)
          }
        })
      }
    } catch (err) {
      const errors = err.response.data.errors
      classes.forEach((child) => {
        errors.forEach((err) => {
          if (err.param === child.id) {
            child.placeholder = err.msg
            child.className = "danger"
          }
        })
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
        <NavigationCopy truemodal={this.openModal} Position="" />
        <div className="aboutuspage">
          <PageHeader label="sell your home" />
          <div className="about-page-main sell-page">
            <div className="about-text-section sellAHome">
              <h2 className="h2-row"> SELL YOUR HOME</h2>
              <p>
                We work with homeowners all over South Florida in a number of
                different circumstances. We buy houses in any condition, and as
                cash buyers we are able to close quickly and on your time. Our
                goal is to bring homeowners to a swift, smooth, and beneficial
                solution.
              </p>
              
              <ul>
                <h3>HOW IT WORKS</h3>
                <li>
                  <div className="list-title">
                    <span>1.</span> <h4>Submit Your Info</h4>
                  </div>

                  <p>Enter your information in the web form.</p>
                </li>
                <li>
                  <div className="list-title">
                    <span>2.</span> <h4>We'll Call You</h4>
                  </div>
                  <p>
                    You will be contacted to discuss an offer for the property
                    submitted
                  </p>
                </li>
                <li>
                  <div className="list-title">
                    <span>3.</span> <h4>Like the Offer?</h4>
                  </div>

                  <p>
                    You may accept or reject the offer presented to you during
                    the call
                  </p>
                </li>
                <li>
                  <div className="list-title">
                    <span>4.</span> <h4>Get the Cash</h4>
                  </div>

                  <p>
                    You have the cash in hand that you need, and your home is
                    sold!
                  </p>
                </li>
              </ul>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                this.onSubmit(e)
              }}
            >
              <h3>GET A QUOTE</h3>
              <div className="success-message">
               {this.state.messageSent}
             </div>
              <input
                id="fname"
                type="text"
                placeholder="First Name"
                onChange={(e) => this.formInputs(e)}
                value={this.state.fname}
              />
              <input
                id="lname"
                type="text"
                placeholder="Last Name"
                onChange={(e) => this.formInputs(e)}
                value={this.state.lname}
              />
              <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => this.formInputs(e)}
                value={this.state.email}
              />
              <input
                id="phone"
                type="text"
                placeholder="Phone Number (optional)"
                onChange={(e) => this.formInputs(e)}
                value={this.state.phone}
              />
              <textarea
                onChange={(e) => this.formInputs(e)}
                placeholder="Message"
                name=""
                id="message"
                cols="3"
                rows="0"
                value={this.state.message}
              ></textarea>
               <button>GET AN OFFER</button>
              <div id="serverMsg" className=""></div>
            </form>
          </div>
        </div>

        <Specialty />
      </div>
    )
  }
}
export default SellAHome
