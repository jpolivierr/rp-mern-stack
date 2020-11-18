import React from "react"
import Button from "../../Util/Button/Button"
import "./Search.css"

export default function Search() {
  return (
    <div className="Search">
      <h2>Quick Search</h2>
      <input type="text" placeholder="City/Zip" />
      <input type="text" placeholder="Property Type" />
      <input type="text" placeholder="Bedrooms" />
      <input type="text" placeholder="Bathrooms" />
      <input type="text" placeholder="MIN.price" />
      <input type="text" placeholder="MAX.price" />
      <Button type="advance" />
    </div>
  )
}
