import React from 'react'
import './Button.css'

function Button(props) {
    const styling = {
        color: `${props.color}`,
        // background: `${props.backcolor}`
    }

    switch(props.type){
        case 'main':
            return (
        <button style={styling} className='main-btn'>
           {props.label}
        </button>
    )
        case 'submit':
            return (
        <button style={styling} className='main-btn submit-btn'>
           {props.label}
        </button>
    )

        case 'learn':
            return (
        <button className='main-btn'>
            Learn More
        </button>
    )
        case 'search':
            return (
        <button className='btn light'>
           Search
        </button>
    )
        case 'advance':
            return (
        <button className='btn advanced'>
           SEARCH
        </button>
    )
       default : 
       return(
        <button style={styling} className='main-btn'>
        {props.label}
     </button>
       )
    }
    
}
export default Button