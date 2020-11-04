import React from 'react'
import SectionTitle from '../../Util/SectionTitle/SectionTitle'
import {Link} from 'react-router-dom'
import './AboutUs.css'
import Button from '../../Util/Button/Button'
import PageHeader from '../00-PageHeader/PageHeader'

function Aboutus() {
    return (
        <div className='AboutUs'>
            {/* <div className="AboutUs-sidebar">
               <h1>VISION</h1>
            </div> */}
            <div className="container">
                <div className="AboutUs-main-section">
               <SectionTitle
               scstyle ='Sc-title'
                number='01'
                subTitle='Our Mission'
                Title='ABOUT US'
               
               /> 
               <p>At Resurrecting Properties, we strive to renew, restore and
revive homes through innovation, creativity and design, turning
distressed properties into valuable assets. Our goal is to have a
positive impact on families and communities while assisting
with their real estate needs. We will treat our clients and team
members with respect at all times. One of our motto’s is “How
you do anything is how you do everything.” Our company will
dedicate itself to everlasting education and professional growth
that will make the leaders of tomorrow.
               <br/>
               
               <Link to='/about' style={{textDecoration:'none'}}>
                            <span className='link'>Read more &nbsp; &nbsp; </span>
                            </Link>
               </p>
            </div>
            </div>
            
            <div className="dots">
                
            </div>
        </div>
    )
}


export function Aboutuspage(){
    return(
        <div className='aboutuspage'>
             <PageHeader label='about us'/>
            <div className="container">
              
                   
                    <div className="about-page-main">
                   <div className="about-text-section">
                   <SectionTitle
               scstyle ='Sc-title'
                number='01'
                subTitle='Our Mission'
                Title='ABOUT US'
               
               /> 
               <p>
               Our work is dedicated to finding the right match for our clients, whether they are looking for a
                house, a buyer for their property, or a partner they can really thrive next to. The values that are
                driving our passion since our first days are revolving around transparency, creativity, and bullet-
                proof quality that speak for themselves.
                           <br/>
                           <br/>
                           At Resurrecting Properties, we strive to renew, restore and
revive homes through innovation, creativity and design, turning
distressed properties into valuable assets. Our goal is to have a
positive impact on families and communities while assisting
with their real estate needs. We will treat our clients and team
members with respect at all times. One of our motto’s is “How
you do anything is how you do everything.” Our company will
dedicate itself to everlasting education and professional growth
that will make the leaders of tomorrow.
                           <br/>
                           <br/>
                           With a strong passion for helping others and the goal of
restoring communities, Resurrecting Properties was founded.
We are a group of real estate investors working to bring peace
to sellers in distressed situations by offering a resolution to
their problem. By working closely with other real estate
investors, realtors, and contractors we will be able to remodel
and rehabilitate many properties in different communities.
                       </p>
                       </div>     
                       <form action="">
                           <h3>Contact Us</h3>

                           <input type="text" placeholder='First Name'/>
                           <input type="text" placeholder='Last Name'/>
                           <input type="text" placeholder='Email'/>
                           <input type="text" placeholder='Phone Number (optional)'/>
                           <textarea placeholder='Message' name="" id="" cols="3" rows="0"></textarea>
                           <div className="c-button">
                               <Button type= 'submit' 
                                label='submit' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                />
                           </div>
                           
                       </form>
                    </div>
              
            </div>
            
        </div>
    )

}

export default Aboutus