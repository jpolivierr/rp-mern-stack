import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"
import { Component } from "react"
import { withRouter } from "react-router-dom"

class Navigation extends Component {
  state = {
    onHomePage: true,
    modal: false,
    navbar: "light-nav",
    links: "",
    icon: "",
    lines: "",
    menu: "",
    darklogo: '',
    logoInNav: '',
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
  changeNav = (e) => {
    if (window.scrollY > 93) {
      this.setState({
        navbar: "dark-nav",
        links: "links-light",
        icon: "icon-light",
        lines: "Menuebars-light",
        menu: "lines-light",
        darklogo: 'logoimg2Darklogo',
        logoInNav: 'logoimg2-in-nav'
      })
    } else {
      this.setState({
        navbar: "light-nav",
        links: "",
        icon: "",
        lines: "",
        menu: "",
        darklogo: '',
        logoInNav: ''
      })
    }
  }

  setStyleToNav = () => {
    this.setState({
      onHomePage: false,
      navbar: "dark-nav",
      links: "links-light",
      icon: "icon-light",
      lines: "Menuebars-light",
      menu: "lines-light",
    })
  }
  resetNav = () => {
    this.setState({
      onHomePage: true,
      navbar: "",
      links: "",
      icon: "",
      lines: "",
      menu: "",
    })
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
    }else if(this.state.phonestyle.on === true){
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
  showEmail = () => {
    if (this.state.emailstyle.on === false) {
      this.setState({
        ...this.state,
        emailstyle: {
          on: true,
          stylename: "drop-email",
          email: "info@resurrectingproperties.com",
        },
      })
    }else if(this.state.emailstyle.on === true){
      this.setState({
        ...this.state,
        emailstyle: {
          on: false,
          stylename: "",
          email: "",
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
          <div className={`logoimg2 ${this.state.darklogo}`}></div>
        </div>
        <div className="Nav-links ">
          <div className="logoimg-in-nav" onClick={() => this.handleClick()}>
            <div className={`${this.state.logoInNav} logoimg2-in-nav-light`}></div>
          </div>
          <ul className={`links ${this.state.links}`}>
            <Link style={{ textDecoration: "none" }} to="/">
              <li onClick={() => this.resetNav()}> Home </li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <li>About Us</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/sellahome">
              <li>Sell A Home</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/properties">
              <li>Properties</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/partners">
              <li>Our Partners</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <li>Contact</li>
            </Link>
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
              <i className="fas fa-phone" onClick={()=>{this.showNumber()}}></i>
              <div
              onClick={()=>{this.showNumber()}}
                className={`${this.state.phonestyle.stylename}`}
              >
                
                {`${this.state.phonestyle.number}`}</div>
            </li>
            <li className=" li-email">
              <i className="fas fa-envelope" onClick={()=>{this.showEmail()}}></i>
              <div className={`${this.state.emailstyle.stylename} my-email`} onClick={()=>{this.showEmail()}}>
              {`${this.state.emailstyle.email}`}
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation)
