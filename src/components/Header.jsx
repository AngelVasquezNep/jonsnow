import React from 'react'
import jonsnowImage from '../assets/jonsnow.jpg'
import './header.css'

function Header (props) {
  return (
    <div className="Header">
      <h1 className="Header-title">Jon Snow</h1>
      <figure className="Header-img">
        <img src= { jonsnowImage } alt="Jon Snow"/>
      </figure>
    </div>
  )
}

export default Header