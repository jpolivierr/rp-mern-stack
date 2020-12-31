import React from "react"
import { Link } from "react-router-dom"
import "./AboutUs.css"
import PageHeader from "../00-PageHeader/PageHeader"
import { Component } from "react"
import axios from "axios"

function Aboutus() {
  return (
    <div className="AboutUs">
      <div className="AboutUs-main-section">
        <h2 className="h2-row">
          {" "}
          <span>Our Mission</span> ABOUT US
        </h2>
        <p>
          With a strong passion for helping others and the goal of restoring
          communities, Resurrecting Properties was founded. We are a group of
          real estate investors working to bring peace to sellers in distressed
          situations by offering a resolution to their problem. By working
          closely with other real estate investors, realtors, and contractors we
          will be able to remodel and rehabilitate many properties in different
          communities. &nbsp;
          <Link
            to="/about"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <span className="link">Read more. &nbsp; &nbsp; </span>
          </Link>
        </p>
      </div>
      <div className="dot-img"></div>
    </div>
  )
}

export class Aboutuspage extends Component {
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
      <div className="aboutuspage">
        <PageHeader label="about us" />
        <div className="about-page-main">
          <div className="about-text-section">
            <h2 className="h2-row">
              {" "}
              <span>Our Mission</span> ABOUT US
            </h2>
            <p>
              With a strong passion for helping others and the goal of restoring
              communities, Resurrecting Properties was founded. We are a group
              of real estate investors working to bring peace to sellers in
              distressed situations by offering a resolution to their problem.
              By working closely with other real estate investors, realtors, and
              contractors we will be able to remodel and rehabilitate many
              properties in different communities.
              <br />
              <br />
              We strive to renew, restore and revive homes through innovation,
              creativity and design, turning distressed properties into valuable
              assets. Our goal is to have a positive impact on families and
              communities while assisting with their real estate needs. We will
              treat our clients and team members with respect at all times. One
              of our motto’s is “How you do anything is how you do everything.”
              Our company will dedicate itself to everlasting education and
              professional growth that will make the leaders of tomorrow.
              <br />
              <br />
            </p>
          </div>
          <form
            action=""
            onSubmit={(e) => {
              this.onSubmit(e)
            }}
          >
            <h3>Contact Us</h3>
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
            <button>SUBMIT</button>
            <div id="serverMsg" className=""></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Aboutus
