import React from 'react'
import "./myStyles.css"

export default function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
 
    return (
        <div>
            <h1 className={className}>Stylesheets</h1>
        </div>
    )
}


