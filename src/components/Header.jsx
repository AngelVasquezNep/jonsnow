import React from 'react'
import jonsnowImage from '../assets/jonsnow.jpg'
import './header.css'

function Header (props) {
  return (
    <div className="Header">
      <h1 className="Header-title">
      <span>"</span>
      I am the fire that burns against the cold,
      the light that brings the dawn,
      the horn that wakes the sleepers,
      the shield that guards the realms of men
      <span>"</span>
      </h1>
      <img className="Header-img" 
           src= { jonsnowImage } 
           alt="Jon Snow"
           />
    </div>
  )
}

export default Header