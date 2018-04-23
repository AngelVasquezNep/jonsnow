import React from 'react'
import './boton.css'

function Boton (props) {
  return (
    <div className="">
      {
        props.typeBoton === "boton" ? (
          
          <button className="Boton" 
                  onClick={props.handleClick} 
                  >
                 { props.text }
          </button>

        ) : (
         
          <input className="Boton" 
                 type="submit" 
                 value= {props.text} 
                 onClick={props.handleClick}
                 />
        )
      }
    </div>
  )
}

export default Boton