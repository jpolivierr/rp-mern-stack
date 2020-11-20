import React from "react"
import Button from "../../Util/Button/Button"
import "./Search.css"

export default function Search(props) {
    
    const prices = [
        '$10,000',
        '$20,000',
        '$30,000',
        '$40,000',
        '$50,000',
        '$60,000',
        '$70,000',
        '$80,000',
        '$90,000',
        '$100,000',
    ]

    const number = [
        0,1,2,3,4,5,6,7,8,'10+',
    ]

    const displayNumber = number.map((number)=>{return(
    <option key={number} value="1">{number}</option>
    )})
    const displayPrices = prices.map((price)=>{return(
    <option  key={price} value="1">{price}</option>
    )})

  return (
    <div className= {`Search ${props.onPageSearch}`}>
      <h2>Quick Property Search</h2>
      <input type="text" placeholder="City/Zip" />
      <div className="custom-select">
        <select name="" id="">
          <option value="1">Property Type</option>
          <option value="1">Condo</option>
          <option value="1">House</option>
          <option value="1">Multi-Family</option>
        </select>
      </div>
      <div className="custom-select">
        <select name="" id="">
          <option value="1">Bedrooms</option>
          {displayNumber}
        </select>
      </div>
      <div className="custom-select">
        <select name="" id="">
          <option value="1">Bathrooms</option>
          {displayNumber}
        </select>
      </div>
      
      <div className="custom-select">
        <select name="" id="">
          <option value="1">MIN.price</option>
          {displayPrices}
        </select>
      </div>
      <div className="custom-select">
        <select name="" id="">
          <option value="1">MAX.price</option>
          {displayPrices}
        </select>
      </div>
      <div className="custom-select filter">
      
        <i class="fas fa-filter"></i> Filter
        
      </div>

      <Button type="advance" />
    </div>
  )
}
