import React, { Component } from 'react'
import PageHeader from '../Component/00-PageHeader/PageHeader'
import Specialty from '../Component/06-Specialty/Specialty'
import Contact from '../Component/08-Contact/Contact'
import Property from '../Component/00-Properties/Properties'
import {Link} from 'react-router-dom'
import Button from '../Util/Button/Button'




class Listings extends Component {
    componentDidMount(){
        const scroll = ()=> {
         window.scrollTo(0,0)
        }
        scroll()
    }
    render(){
         return (
        <div>
            <PageHeader label= 'view our properties'/>
            <div className='Listing'>
           
        
           <div className="container">
                  <div className="Listing-box">

                      <div className="L-title">
                      </div>
                  
           <div className="Properties"> 
               <Property
               img= 'img1'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
               <Property
               img= 'img3'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
             
               <Property
               img= 'img2'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
               <Property
               img= 'img1'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
               <Property
               img= 'img3'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
             
               <Property
               img= 'img2'
                 price = '$250,000'
                 address = ' 145 nw 13th CT Miami, FL, 33167'
                 detail = '23,000sq | 3 Bed | 3 Bath'
               />
           </div>
           <Link style={{textDecoration:'none'}} to='/listings'>
               
           <Button type= 'main' 
                            label='Load More' 
                            color='white'
                            backcolor = 'var(--main-color)'
                            />
           {/* <div className="alllisting">
            <p>View All Listings</p> 
                 </div>  */}


           </Link>
             
            </div>
</div>
    </div>
            <Specialty/>
            <Contact/>
           
        </div>
    )
    }
   
}
export default Listings