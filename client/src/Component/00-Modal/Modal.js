import React from 'react'
import './Modal.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Modal extends Component {
    state = {
        modals: true
    }

    modal(){
        if(this.state.modals === true){
            this.setState({modals: false})        
        }else{
            this.setState({modals: true}) 
        }
    }

    handleClick = () =>{
        this.props.history.push('/')
      }
    render(){
        return (
        <div className={this.state.modals ? 'Modal' : 'Modal M-close'}
        onClick={()=>{
             this.modal()
             setTimeout(() => {
                this.props.closemodal(false)
             }, 500);
            //  this.props.closemodal(false)
             }}>
            
            <div className= {this.state.modals ? "Sides-Menue" : 'Sides-Menue Sides-Menue-close' }>
                <div className= "close" 
                //  onClick={()=>{this.props.closemodal(false)}}
                >+</div>
                 <div className="logoimg2 logoimg2-menue" onClick={()=> this.handleClick()}>
                   </div>
             

                <h3>Navigation</h3>
                <ul className="side-nav-bar">
                   <Link className='lilink' to='/'> <li>Home</li></Link> 
                   <Link className='lilink' to='/about'> <li>About Us</li></Link> 
                   <Link className='lilink' to='/sellahome'> <li>Sell A Home</li></Link> 
                   <Link className='lilink' to='/properties'> <li>Properties</li></Link> 
                   <Link className='lilink' to='/partners'> <li>Our Partners</li></Link> 
                   <Link className='lilink' to='/contact'> <li>Contact</li></Link> 
                </ul>
                <h3>Contact</h3>
                <ul className="side-contact">
                    <li>142 Nw 13th ct Miami, Fl, 33164</li>
                    <li>786-589-8898</li>
                    <li>contact@resurrectingproperties.com </li>
                </ul>
                <h3>Social Media</h3>
                <ul className="side-social">
                    <i className="fab fa-facebook-f" onClick={()=>{window.open('https://www.facebook.com/resurrectingpropertiesllc/')}} ></i>
                      <i className="fab fa-instagram" onClick={()=>{window.open('https://www.instagram.com/resurrectingpropertiesllc/')}}></i>
                </ul>
            </div>
        </div>
    )
    }
    
}

export default withRouter(Modal) 