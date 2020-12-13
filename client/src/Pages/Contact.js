import React from 'react'
import { Component } from 'react'
import Contact from '../Component/08-Contact/Contact'
import Modal from '../Component/00-Modal/Modal'
import NavigationCopy from '../Component/00-Navigation copy/NavigationCopy'


 class contact extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }

    state = {
        modal: false,
        navbar: false,
      }
      openModal = (data) => {
        this.setState({ modal: data })
      }
      closeModal = (data) => {
        this.setState({ modal: data })
      }
     render(){
         return (
             <div className="">
                <NavigationCopy truemodal={this.openModal} Position=""/> 
                 {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
                 <div style={{paddingTop: '90px'}}>
             
              
            <Contact/>
        </div>
             </div>
        
    )
     }
    
}
export default contact