import React from "react"
import "./Specialty.css"
// import { Link } from "react-router-dom"

export default function Specialty() {
  return (
    <div className="Specialty">
      <div className="Specialty-box">
        <h2 className="h2-column">
          {" "}
          <span>Specialty</span> SPECIALTY
        </h2>
        <p className="sp">
        If you are late on your mortgage payment, need a lot of work or are considering<br/> doing a short sale,  then you are in the right place.?{" "}
        </p>
        <div className="Sp-details">
          <div className="Sp-box shortsale">
            <div className="Sp-img">01</div>
            <div className="sp-box-content">
              <h3>Short Sale</h3>
              <p>
                Owe more on your property than its current value? Need to sell
                your house but have a high loan balance? Let us help you! There
                are always options even when it feels like nothing can be done.
                Contact us to discuss the options there are for you in this
                situation.
              </p>
            </div>
          </div>

          <div className="Sp-box foreclosure">
            <div className="Sp-img">02</div>
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

          <div className="Sp-box maintenance">
            <div className="Sp-img">03</div>
            <div className="sp-box-content">
              <h3>Deferred MAINTENANCE </h3>
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
