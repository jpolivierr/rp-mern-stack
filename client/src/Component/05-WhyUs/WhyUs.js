import React from 'react'
import SectionTitle from '../../Util/SectionTitle/SectionTitle'
import Button from '../../Util/Button/Button'
import {Link} from 'react-router-dom'
import './WhyUs.css'
 function WhyUs() {
    return (
        <div className='WhyUs'>
            <div className="WhyUs-bkg"></div>
            <div className="container">
                <div className="WhyUs-box">
                    <div className="W-c">
                        <SectionTitle
                scstyle = 'Sc-title plus'         
                number='02'
                subTitle='Why Us'
                Title='WHY WORK WITH US?'
                titleWidth ='100%'
               />
                       <p>With us, you will feel that your business partners are truly part of your team. Whether it’s a
renovation and resell project, or traditional real estate services for people looking to buy or sell a
house, we are invested in with all our resources.
                       </p>
                       <ul>
                           <li><i className="fas fa-check"></i>Keeping the project within the estimated deadline;</li>
                           <li><i className="fas fa-check"></i>Maintaining a highly efficient communication with our clients;</li>
                           <li><i className="fas fa-check"></i>Finding creative solutions to unexpected problems;</li>
                           {/* <li><i className="fas fa-check"></i>Keeping the quality standard to a high level;</li> */}
                       </ul>
                       <Link to='/about'>
                       <Button type= 'main' 
                                label='Learn More' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                />
                       </Link>
                    </div>
                    <div className="W-img-box">
                        <div className="W-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyUs