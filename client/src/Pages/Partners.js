import React from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import Contact from "../Component/08-Contact/Contact"
import "./Partners.css"
import { Component } from "react"
import NavigationCopy from "../Component/00-Navigation copy/NavigationCopy"
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
        <NavigationCopy truemodal={this.openModal} Position="" />
        {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
        <PageHeader label="our partners" />
        <div className="aboutuspage">
          <div className="about-page-main">
            <div className="about-text-section">
              <h2 className="h2-row">
                {" "}
                <span>Partner</span> OUR PARTNERS
              </h2>
              <div className="partner-text">
                <h3>Realtor</h3>
                We work with top realtors who are given fantastic properties in
                their sales portfolio, get the chance to pitch for our large
                clientele, and add experience and diversity to our team.
                <br />
                <br />
                <h3>Contractor</h3>
                Contractors are a fundamental part of our team and we are always
                looking to expand. When working with us we will provide you with
                a detailed scope of work to make bidding a quick and easy
                process. We can help you to generate new business through
                referrals, as we are a part of a national network of investors.
                <br />
                <br />
                <h3>Investor</h3>
                If you are a real estate investor looking for wholesale
                opportunities or interested in funding a deal, contact us. We
                are always looking to expand our network and relationships. Our
                team is also interested in receiving these deals from fellow
                investors so there is opportunity for both parties to benefit
                and grow.
              </div>
            </div>
            <form action="" className="partner-form">
              <h3>become a partner</h3>
              <select name="" id="">
                <option value="">Profession</option>
                <option value="">Realtor</option>
                <option value="">Contractor</option>
                <option value="">Investor</option>
              </select>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <textarea
                placeholder="Message "
                name=""
                id=""
                cols="3"
                rows="0"
              ></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}
export default Home
