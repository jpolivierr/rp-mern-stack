import React from 'react'
import { Component } from 'react'
// import AboutUs from '../Component/02-AboutUs/AboutUs'
// import Contact from '../Component/08-Contact/Contact'
import {Aboutuspage} from '../Component/02-AboutUs/AboutUs'



 class Aboutus extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }
     render(){
        return (
        <div>
            {/* <Navigation/> */}
             <Aboutuspage/>
            {/* <Footer/> */}
        </div>
    ) 
     }
    
}
export default Aboutus