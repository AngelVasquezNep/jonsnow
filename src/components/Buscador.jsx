import React from 'react'
import Boton from './Boton'
import './buscador.css'

function Buscador (props) {
  return (
    <div >
      <form className="Buscador"
            onSubmit = { props.handleClick }
            >
        
        <input type="search"
               ref = {props.refBuscador}
               className="Buscador-input"
               name="Search"
               id="search"
               onChange = {props.changeValue}
               value = {props.value}
               placeholder="Buscar..."
               />
        
        <Boton text="Buscar" />

      </form>
    </div>
  )
}

export default Buscador