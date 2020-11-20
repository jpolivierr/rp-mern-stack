import React from "react"
import PageHeader from "../Component/00-PageHeader/PageHeader"
import SectionTitle from "../Util/SectionTitle/SectionTitle"
import Button from "../Util/Button/Button"
import Specialty from "../Component/06-Specialty/Specialty"
import "./SellAHome.css"
import { Component } from "react"

class SellAHome extends Component {
  componentDidMount() {
    const scroll = () => {
      window.scrollTo(0, 0)
    }
    scroll()
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
                <h2> <span>1.</span>  Submit Your Info</h2>
                <p>Enter your information in the web form.</p>
                <br />
                <h2><span>2.</span> We'll Call You</h2>
                <p>
                You will be contacted to discuss an offer for the property submitted
                </p>

                <br />
                <h2><span>3.</span> Like the Offer?</h2>
                <p>
                You may accept or reject the offer presented to you during the call
                </p>
                <br />
                <h2><span>4.</span> Get the Cash</h2>
                <p>
                You have the cash in hand that you need, and your home is sold!
                </p>
              </div>
            </div>
            <form action="">
              <h3>GET A QUOTE</h3>

              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number (optional)" />
              <textarea
                placeholder="Message (optional)"
                name=""
                id=""
                cols="3"
                rows="0"
              ></textarea>
              <div className="c-button">
                <Button
                  type="submit"
                  label="GET AN OFFER"
                  color="white"
                  backcolor="var(--main-color)"
                />
              </div>
            </form>
          </div>
        </div>

        <Specialty />
      </div>
    )
  }
}
export default SellAHome
