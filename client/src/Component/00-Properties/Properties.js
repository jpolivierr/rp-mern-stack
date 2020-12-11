import React from "react"
import "./Properties.css"
import noPhoto from '../../Images/noPhoto.jpg'

export default function Properties(props) {
  const styleimg = {
    background: `url(${ props.img === undefined ? noPhoto : props.img }) no-repeat center center/cover`,
  }
  // console.log(props.img)
  return (
    <div key = {props.keys} className="Property-box">
      <div className={`Property-img`} style={styleimg}></div>
      <div className="P-content">
        <div className="L-price">{props.price}</div>
        <div className="address">{props.address}</div>
        <div className="basic-info">
          <p> {props.detail}</p>
        </div>
      </div>
    </div>
  )
}
