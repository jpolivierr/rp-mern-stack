import React from "react"
import "./Navigation.css"
import { Component } from "react"
import { withRouter, NavLink } from "react-router-dom"

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
    if ( window.scrollY > 93) {
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
  
  componentDidMount = () =>{
    window.addEventListener("scroll", this.changeNav)
  }
  componentWillUnmount = () =>{
    window.removeEventListener('scroll', this.changeNav)
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
  
  handleClick = () => {
    this.props.history.push("/")
  }
  render() {
    
    
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
            <NavLink className = 'active' style={{ textDecoration: "none" }} to="/" activeClassName="active-link">
              <li  onClick={() => this.resetNav()}> Home </li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/about">
              <li>About Us</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/sellahome">
              <li >Sell A Home</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/properties" >
              <li>Properties</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/partners">
              <li>Our Partners</li>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/contact">
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
              <i className="fas fa-phone" onClick={()=>{this.showNumber()}}></i>
              <div
              onClick={()=>{this.showNumber()}}
                className={`${this.state.phonestyle.stylename}`}
              >
                
                {`${this.state.phonestyle.number}`}</div>
            </li>
            <li className=" li-email" >
            <a href="mailto:contact@resurrectingproperties.com "><i className="fas fa-envelope" ></i> </a>
              
              {/* <div className={`${this.state.emailstyle.stylename} my-email`} onClick={()=>{this.showEmail()}}>
              {`${this.state.emailstyle.email}`}
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation)
