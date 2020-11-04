import React from 'react'
import Button from '../../Util/Button/Button'
import SectionTitle from '../../Util/SectionTitle/SectionTitle'
import './Partner.css'
import {Link} from 'react-router-dom'

 function Partner() {
    return (
        <div className='Partner'>
            <div className="container">
                <div className="Partner-box">
                    <div className="Partner-photos">
                        <div className="P-photo investor"> <p>Contractor</p> </div>
                        <div className="P-photo realtor"><p>Realtor</p></div>
                        <div className="P-photo contractor"><p>Investor</p></div>
                    </div>
                    <div className="Partner-content">
                        <div className="sit">
                            <SectionTitle
                            scstyle = 'Sc-title'
                    
                        number='03'
                        subTitle='Partners'
                        Title='OUR PARTNERS'
                        titleWidth ='300px'
                        p='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit amet consectetur adipisicing
                        adipisicing elit. Dolorem sit amet consectetur adipisicing.  adipisicing elit. Dolorem sit amet consectetur adipisicing
                        '
                        pdisplay = 'none'
                        pWidth = ''
                    />
                    <p>
                    We work with real estate investing companies, individual home sellers and buyers, and
                    contractors alike.
                    </p>
                    <div className="P-btn">
                     <Link to='/partners'>
                      <Button type= 'main' 
                                label='Learn More' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                />
                     </Link>
                       
                    </div>
                    
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Partner