import React from 'react'
import Boton from './Boton'
import imageNotFount from '../assets/imageNotFound.jpg'

const User = props => {
  return (
    <div className="User">
      {
        props.image ? (
          <img src={props.image} alt= {props.name} />
        ) : (
          <img src={imageNotFount} alt="Not Found"/>
        )
      }
      <h3> { props.name || 'Not name' } </h3>
      <Boton
        typeBoton = 'boton'
        text = 'More'
      />
    </div>
  )
}

export default User 