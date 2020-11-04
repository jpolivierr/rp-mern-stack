import React from 'react'
import { Component } from 'react'
import Contact from '../Component/08-Contact/Contact'




 class contact extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }
     render(){
         return (
        <div style={{paddingTop: '90px'}}>
         
            <Contact/>
            
        </div>
    )
     }
    
}
export default contact