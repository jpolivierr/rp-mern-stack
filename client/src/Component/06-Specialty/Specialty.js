import React from "react"
import "./Specialty.css"
import SectionTitle from "../../Util/SectionTitle/SectionTitle"
import { Link } from "react-router-dom"

export default function Specialty() {
  return (
    <div className="Specialty">
      <div className="Specialty-box">
       
          <SectionTitle
            scstyle="Sc-title Sc-title-center"
            number="05"
            textAlign="center"
            subTitle="Specialty"
            theclass="theclass"
            alignsub="center"
            Title="OUR SPECIALTY"
            align="center"
            titleWidth="300px"
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
            pdisplay="none"
            pWidth=""
          />
        
        <div className="Sp-details">
          <div className="Sp-box foreclosure">
            <div className="Sp-img">01</div>
            <div className="sp-box-content">
              <h3>Foreclosure</h3>
              <p>
                Falling behind on mortgage payments and going into default on
                your property is a very stressful situation to endure. We
                understand completely how you may feel during this time and are
                here to assist you. We can work with you to purchase the
                property, providing you with the best alternative possible.
                Allow us to help you with your foreclosure.
              </p>
            </div>
          </div>
          <div className="Sp-box shortsale">
            <div className="Sp-img">02</div>
            <div className="sp-box-content">
              <h3>Short Sale</h3>
              <p>
                When an owner is in debt and their home value declines, we can
                help them get the best deal they can on their property, and make
                a sale in the shortest amount of time. We match buyers with
                sellers, always making sure that both parties are satisfied with
                the deal. Et{" "}
              </p>
            </div>
          </div>
          <div className="Sp-box maintenance">
            <div className="Sp-img">03</div>
            <div className="sp-box-content">
              <h3>Deferred </h3>
              <p>
                If your property needs a lot of maintenance and work but you do
                not have the money or desire to fix it, we can help! Our company
                buys properties in any condition and can take over the burden of
                owning the home. We provide cash, as is offers, so no repairs
                are necessary.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
