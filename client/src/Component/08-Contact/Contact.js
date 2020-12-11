import React, { Component } from "react"
import "./Contact.css"
import Button from "../../Util/Button/Button"
import axios from "axios"
import { connect } from "react-redux"
import { setAlert, removeAlert } from "../../reduxStuff/actions/alert"

class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    message: "",
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
        child.placeholder = 'First Name'
      }else if(child.id === "lname"){
        child.className = ""
        child.placeholder = 'Last Name'
      }else if(child.id === "email"){
        child.className = ""
        child.placeholder = 'Email'
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
      <div className="Contact">
        <div className="C-bkg"></div>
        <div className="contact-box">
        <h2 className='h2-column'> <span>Contact</span> LET'S TALK</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            perspiciatis deleniti dignissimos!.
          </p>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              onChange={(e) => this.formInputs(e)}
              type="text"
              id="fname"
              className=""
              placeholder="First Name"
              value={this.state.fname}
            />
            <input
              onChange={(e) => this.formInputs(e)}
              type="text"
              id="lname"
              className=""
              placeholder="Last Name"
              value={this.state.lname}
            />
            <input
              onChange={(e) => this.formInputs(e)}
              type="email"
              id="email"
              className=""
              placeholder="Email"
              value={this.state.email}
            />
            <input
              onChange={(e) => this.formInputs(e)}
              type="text"
              id="message"
              className="message"
              placeholder="Message"
              value={this.state.message}
            />

            <Button
              type="submit"
              label="submit"
              color="white"
              backcolor="var(--main-color)"
              onClick={(e) => {
                this.onSubmit(e)
              }}
            />
            <div id="serverMsg" className=""></div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

export default connect(mapStateToProps, { setAlert, removeAlert })(Contact)
