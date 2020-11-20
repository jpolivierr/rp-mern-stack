import React from 'react'
import './Modal.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'

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
                 <div className="logoimg2 logoimg2-menue">
                   </div>
                   {/* <Link to='/' style={{width: '100%', height:'100%', position: 'absolute'}} >
                      
                   </Link> */}
             

                <h1>Navigation</h1>
                <ul className="side-nav">
                   <Link className='lilink' to='/'> <li>Home</li></Link> 
                   <Link className='lilink' to='/about'> <li>About Us</li></Link> 
                   <Link className='lilink' to='/sellahome'> <li>Sell A Home</li></Link> 
                   <Link className='lilink' to='/properties'> <li>Properties</li></Link> 
                   <Link className='lilink' to='/partners'> <li>Our Partners</li></Link> 
                   <Link className='lilink' to='/contact'> <li>Contact</li></Link> 
                </ul>
                <h1>Contact</h1>
                <ul className="side-contact">
                    <li>142 Nw 13th ct Miami, Fl, 33164</li>
                    <li>786-589-8898</li>
                    <li>info@resurectingproperties.com</li>
                </ul>
                <h1>Social</h1>
                <ul className="side-social">
                    <i className="fab fa-facebook-f" onClick={()=>{window.open('https://www.facebook.com/resurrectingpropertiesllc/')}} ></i>
                      <i className="fab fa-instagram" onClick={()=>{window.open('')}}></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin-in"></i>
                </ul>
            </div>
        </div>
    )
    }
    
}

export default Modal