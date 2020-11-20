
import React from 'react'
import PageHeader from '../Component/00-PageHeader/PageHeader'
import Contact from '../Component/08-Contact/Contact'
import SectionTitle from '../Util/SectionTitle/SectionTitle'
import Button from '../Util/Button/Button'
import './Partners.css'
import { Component } from 'react'




 class Home extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }
     render(){
         return (
        <div>
           <PageHeader label='our partners'/>
           <div className='aboutuspage'>
           
                    <div className="about-page-main">
                   <div className="about-text-section">
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
               <div className='partner-text'>
                           <h3>Realtor</h3>
                           We work with top realtors who are given fantastic properties in their sales portfolio, get the
chance to pitch for our large clientele, and add experience and diversity to our team.
                           <br/>
                           <br/>
                           <h3>Contractor</h3>
                           Contractors are a fundamental part of our team and we are
                            always looking to expand. When working with us we will
                            provide you with a detailed scope of work to make bidding a
                            quick and easy process. We can help you to generate new
                            business through referrals, as we are a part of a national
                            network of investors.
                           <br/>
                           <br/>
                           <h3>Investor</h3>
                           We offer consultancy and our resources to real estate investors interested in growing their
business and having a professional team by their side.
                </div>
                       </div>     
                       <form action="">
                           <h3>become a partner</h3>
                            <select name="" id="">
                                <option value="">Profession</option>
                                <option value="">Realtor</option>
                                <option value="">Contractor</option>
                                <option value="">Investor</option>
                            </select>
                           <input type="text" placeholder='First Name'/>
                           <input type="text" placeholder='Last Name'/>
                           <input type="text" placeholder='Email'/>
                           <input type="text" placeholder='Phone Number (optional)'/>
                           <textarea placeholder='Message (optional)' name="" id="" cols="3" rows="0"></textarea>
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
            <Contact/>
        </div>
    )
     }
    
}
export default Home