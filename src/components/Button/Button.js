import React from 'react';
import './button.scss'

export default function Button(props){
    const buttonClass = props.className ? `main-btn ${props.className}` : 'main-btn';
    const buttonType = props.type ? props.type : "button"
    return <button className={buttonClass} type={buttonType}>{props.children}</button>
}