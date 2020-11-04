import React from 'react'
import Button from '../../Util/Button/Button'
import './Search.css'

export default function Search() {
    return (
            <div className="Search">
                        <div className="container">
                            <div className="sce-box">
                                <h2>Quick Search</h2>
                            
                                 <div className=" first search location">
                            <input type="text" placeholder='City/Zip'/>
                                 <select name=" " id="" placeholder='Property Type'>
                                <option value="">Property Type</option>
                                <option value="">House/Condo</option>
                                <option value="">Condo</option>
                                <option value="">House Only</option>
                                <option value="">Commercial</option>
                            </select>
                             <input type="text" placeholder='Bedrooms'/>
                            <input type="text" placeholder='Bathrooms'/>
                            <input type="text" placeholder='MIN.price'/>
                            <input type="text" placeholder='MAX.price'/>

                               <Button type ='search'/>
                            <Button type ='advance'/>
                        </div>           
                        </div>
                        </div>
                    </div>
       
    )
}
