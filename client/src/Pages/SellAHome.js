import React from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import SectionTitle from "../Util/SectionTitle/SectionTitle"
import Button from "../Util/Button/Button"
import Specialty from "../Component/06-Specialty/Specialty"
import "./SellAHome.css"
import axios from "axios"
import { Component } from "react"

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
              child.className = ""
              child.innerHTML = ""
            }, 10000)
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
        <div className="aboutuspage">
          <PageHeader label="sell your home" />
          <div className="about-page-main sell-page">
            <div className="about-text-section sellAHome">
              <SectionTitle
                scstyle="Sc-title"
                number="01"
                subTitle="How It Works"
                Title=" How It Works"
                titleWidth="250px"
                p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
                pdisplay="none"
                pWidth=""
              />
              <div className="sell-texts">
                <h2>
                  {" "}
                  <span>1.</span> Submit Your Info
                </h2>
                <p>Enter your information in the web form.</p>
                <br />
                <h2>
                  <span>2.</span> We'll Call You
                </h2>
                <p>
                  You will be contacted to discuss an offer for the property
                  submitted
                </p>

                <br />
                <h2>
                  <span>3.</span> Like the Offer?
                </h2>
                <p>
                  You may accept or reject the offer presented to you during the
                  call
                </p>
                <br />
                <h2>
                  <span>4.</span> Get the Cash
                </h2>
                <p>
                  You have the cash in hand that you need, and your home is
                  sold!
                </p>
              </div>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                this.onSubmit(e)
              }}
            >
              <h3>GET A QUOTE</h3>
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
                placeholder="Message (optional)"
                name=""
                id="message"
                cols="3"
                rows="0"
                value={this.state.message}
              ></textarea>
              <div className="c-button">
                <Button
                  type="submit"
                  label="GET AN OFFER"
                  color="white"
                  backcolor="var(--main-color)"
                />
              </div>
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
