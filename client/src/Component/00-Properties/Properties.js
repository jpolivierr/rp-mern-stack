import React from 'react'
import './Properties.css'

export default function Properties(props) {
     const styleimg ={
        background: `url(${props.img}) no-repeat center center/cover`
     }

    return (
        <div className="Property-box">
        <div className={`Property-img`} style={styleimg}>
        </div>
          <div className="P-content">
        <div className='L-price'>{props.price}</div>
        <div className="address">
        {props.address}
        </div>
        <div className="basic-info">
            <p> {props.detail}</p> 
        </div>
            </div>
    </div>
    )
}
