import React from "react"
import { Component } from "react"
import { withRouter, NavLink } from "react-router-dom"

class NavigationCopy extends Component {
  state = {
    onHomePage: true,
    modal: false,
    navbar: "dark-nav",
    links: "links-light",
    icon: "icon-light",
    lines: "Menuebars-light",
    menu: "lines-light",
    phonestyle: {
      on: false,
      stylename: "",
      number: "",
    },
    emailstyle: {
      on: false,
      stylename: "",
      email: "",
    },
  }

  showNumber = () => {
    if (this.state.phonestyle.on === false) {
      this.setState({
        ...this.state,
        phonestyle: {
          on: true,
          stylename: "drop-box",
          number: "786-765-7785",
        },
      })
    } else if (this.state.phonestyle.on === true) {
      this.setState({
        ...this.state,
        phonestyle: {
          on: false,
          stylename: "",
          number: "",
        },
      })
    }
  }

  handleClick = () => {
    this.props.history.push("/")
  }
  render() {
    window.addEventListener("scroll", this.changeNav)
    return (
      <div className={`Navigation ${this.state.navbar}`}>
        <div className="logoimg" onClick={() => this.handleClick()}>
          <div className="logoimg2 navigation-copy"></div>
        </div>
        <div className="Nav-links ">
          <div className="logoimg-in-nav" onClick={() => this.handleClick()}>
            <div className="logoimg2-in-nav"></div>
          </div>
          <ul className={`links ${this.state.links}`}>
            <NavLink style={{ textDecoration: "none" }} to="/" >
              <li > Home </li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/about" activeClassName="active-link">
              <li>About Us</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/sellahome" activeClassName="active-link">
              <li>Sell A Home</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/properties" activeClassName="active-link">
              <li>Properties</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/partners" activeClassName="active-link">
              <li>Our Partners</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/contact" activeClassName="active-link">
              <li>Contact</li>
            </NavLink>
          </ul>
          <ul className={`socials ${this.state.icon}`}>
            <li>
              <div
                className={`Menuebars ${this.state.lines}`}
                onClick={(e) => {
                  this.props.truemodal(true)
                }}
              >
                <div className={`lines ${this.state.menu} line2`}></div>
              </div>
            </li>
            <li className=" li-phone">
              <i
                className="fas fa-phone"
                onClick={() => {
                  this.showNumber()
                }}
              ></i>
              <div
                onClick={() => {
                  this.showNumber()
                }}
                className={`${this.state.phonestyle.stylename}`}
              >
                {`${this.state.phonestyle.number}`}
              </div>
            </li>
            <li className=" li-email" >
              <a href="mailto:contact@resurrectingproperties.com "><i className="fas fa-envelope" ></i> </a>
              {/* <div
                className={`${this.state.emailstyle.stylename} my-email`}
                onClick={() => {
                  this.showEmail()
                }}
              >
                {`${this.state.emailstyle.email}`}
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(NavigationCopy)
