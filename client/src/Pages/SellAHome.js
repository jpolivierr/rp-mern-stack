import React from 'react'
import PageHeader from '../Component/00-PageHeader/PageHeader'
import SectionTitle from '../Util/SectionTitle/SectionTitle'
import Button from '../Util/Button/Button'
import Specialty from '../Component/06-Specialty/Specialty'
import './SellAHome.css'
import { Component } from 'react'




 class SellAHome extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }
     render(){
          return (
        <div>
                <div className='aboutuspage'>
             <PageHeader label='sell your home'/>
            <div className="container">
              
                   
                    <div className="about-page-main sell-page">
                   <div className="about-text-section sellAHome">
                           <SectionTitle
              scstyle = 'Sc-title'
                number='01'
                subTitle='How It Works'
                Title=' How It Works'
                titleWidth ='250px'
                p='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem'
                pdisplay = 'none'
                pWidth = ''
               /> 
               <div className='sell-texts'>
                        <p><span>1</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo cum omnis deserunt fugit? Tempore et dolor hic est aspernatur odit </p>   
                           <br/>
                           <br/>
                           <p>
                             <span>2</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo cum omnis deserunt fugit? Tempore et dolor hic est aspernatur odit 
                           </p>
                           
                           <br/>
                           <br/>
                           <p>
                              <span>3</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo cum omnis deserunt fugit? Tempore et dolor hic est aspernatur odit  
                           </p>
                           <br/>
                           <br/>
                           <p>
                              <span>4</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo cum omnis deserunt fugit? Tempore et dolor hic est aspernatur odit  
                           </p>
                           
                       </div>
                       </div>     
                       <form action="">
                           <h3>GET A QUOTE</h3>

                           <input type="text" placeholder='First Name'/>
                           <input type="text" placeholder='Last Name'/>
                           <input type="text" placeholder='Email'/>
                           <input type="text" placeholder='Phone Number (optional)'/>
                           <textarea placeholder='Message (optional)' name="" id="" cols="3" rows="0"></textarea>
                           <div className="c-button">
                               <Button type= 'submit' 
                                label='GET AN OFFER' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                />
                           </div>
                           
                       </form>
                    </div>
              
            </div>
            
        </div>

        <Specialty/>
        </div>
    )
     }
   
}
export default SellAHome