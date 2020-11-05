import React, { Component } from "react"
import "./Contact.css"
import Button from "../../Util/Button/Button"
import SectionTitle from "../../Util/SectionTitle/SectionTitle"
import axios from "axios"
import { connect } from "react-redux"
import { setAlert, removeAlert } from "../../actions/alert"

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
      case "fName":
        this.setState({ fname: value })
        break
      case "lName":
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
    // console.log((e.target.children[0].className = ""))
    const classes = e.target.children
    // console.log(classes)
    // console.log(this.props.alerts)
    for (let i = 0; i < classes.length; i++) {
      // console.log(classes[i].id)
    }
    // classes.forEach(classes => console.log(classes.clallName))
    // console.log("fired...")
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      }
      const body = JSON.stringify(this.state)
      const res = await axios.post("/client", body, config)
      console.log(res.data)
    } catch (err) {
      const errors = err.response.data.errors
      this.props.removeAlert()
      this.props.setAlert(errors, "Danger")
      const alerts = this.props.alerts[0]
      console.log(alerts.filter(alert => alert.param === 'fname'))
    }
  }

  render() {
    // console.log(this.props.alerts)
    const alerts = this.props.alerts[0]
    const cstyle = ""
    // console.log(alerts)
    const addAlerts = () => {}
    return (
      <div className="Contact">
        <div className="C-bkg"></div>
        <div className="container">
          <div className="contact-box">
            <SectionTitle
              scstyle="Sc-title Sc-title-center Tcwhite"
              color="white"
              dw=""
              number="06"
              subTitle="Contact"
              Title="CONTACT US"
              titleWidth="100%"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              perspiciatis deleniti dignissimos!.
            </p>
            <form onSubmit={(e) => this.onSubmit(e)}>
              <input
                onChange={(e) => this.formInputs(e)}
                type="text"
                id="fName"
                className={`${"danger"}`}
                placeholder={`${"danger"}`}
              />
              <input
                onChange={(e) => this.formInputs(e)}
                type="text"
                id="lName"
                className="lName"
                placeholder="Last Name"
              />
              <input
                onChange={(e) => this.formInputs(e)}
                type="email"
                id="email"
                className="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => this.formInputs(e)}
                type="text"
                id="message"
                className="message"
                placeholder="Message"
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
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

export default connect(mapStateToProps, { setAlert, removeAlert })(Contact)
