import React from 'react'
import './SectionTitle.css'

 function SectionTitle(props) {
     const ScStyle ={
         width : `${props.dw}`,
         textAlign: `${props.textAlign}`,
         display: `flex`,
         flexFlow: `column`,
         alignItems: `${props.alignItems}`,
         justifyContent: `center`,
         color: 'white'
     }

     const titleStyle ={
        width : `${props.titleWidth}`,
        color: `${props.color}`,
        textAlign: `${props.align}`

     }

    return (
        <div style={ScStyle} className={props.scstyle}>
          
            <div className="number">
               {props.number}
            </div>
             <h3 className={`${props.theclass}`}>{props.subTitle}</h3>
             <h2 style={titleStyle}>{props.Title}</h2>
         
            
        </div>
    )
}

export default SectionTitle