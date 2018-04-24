import React from 'react'
import jonsnowImage from '../assets/jonsnow.jpg'
import './header.css'

function Header (props) {
  return (
    <div className="Header">
      <h1 className="Header-title">Jon Snow</h1>
      <img className="Header-img" 
           src= { jonsnowImage } 
           alt="Jon Snow"
           />
    </div>
  )
}

export default Header