import React from 'react'
import './PageHeader.css'

export default function PageHeader(props) {
    return (
        <div className="page-header">
        <h1> {props.label}</h1>
    </div>
    )
}
