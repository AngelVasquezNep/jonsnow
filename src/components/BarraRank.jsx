import React from 'react'

const Barra = (props) => {
  return (
    <div className="Barra">
      <span>Rank: { props.rank || 0 } </span>
      <input type="range"
        min = { props.min }
        max = { props.max }
        defaultValue = {props.defaultValue}
        onChange = { props.handleChange }
      />
    </div>
  )
}

export default Barra