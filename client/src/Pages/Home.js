import React, { Component } from 'react'
import Showcase from '../Component/01-Showcase/Showcase'
import AboutUs from '../Component/02-AboutUs/AboutUs'
import WhatWeDo from '../Component/03-WhatWeDo/WhatWeDo'
import Listing from '../Component/04-Listing/Listing'
import WhyUs from '../Component/05-WhyUs/WhyUs'
import Specialty from '../Component/06-Specialty/Specialty'
import Partner from '../Component/07-partners/Partner'
import Contact from '../Component/08-Contact/Contact'



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
            {/* <Navigation/> */}
            <Showcase/>
            <AboutUs/>
            <WhatWeDo/>
             <WhyUs/>
             
             <Partner/>
             <Specialty/>
            <Listing/>
            <Contact/>
            {/* <Footer/> */}
        </div>
    )
    }
}
export default Home