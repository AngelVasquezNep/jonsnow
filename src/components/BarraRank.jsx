import React from 'react'
import './barraRank.css'

const Barra = (props) => {
  return (
    <div className="Barra">
      <span>Minimum range of characters: { props.rank || 0 } </span>
      <input type="range"
        min = { props.min }
        max = { props.max }
        value = { props.value }
        onChange = { props.handleChange }
      />
    </div>
  )
}

export default Barra