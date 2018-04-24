import React from 'react'
import User from './User'

const UserFull = (props) => {
  return (
    <div className="UserFull">
      <User
          handleClick = { props.handleClick }
          showBoton = {true} 
          image = {`https://api.got.show/${props.imageLink}`}
          name = { props.name }
          />
            <p>  Titles: </p>
            <ul>
              { 
                  props.titles && props.titles[0] ? props.titles.map(  (title,index) => {
                    return <li 
                            key= {index} 
                            > {title} </li>
                  }) : <li>Not titles</li>
             } 
            </ul>
          <p> Culture: { props.culture || 'Unknown'} </p>
          <p> House: { props.house || 'Unknown'} </p>
          <p> Rank: { props.pageRank || 'Unknown'} </p>
          <p> Boks:</p>
          <ul>
            {
              props.books && props.books[0] ? props.books.map( (book, index) => {
                return <li key={index}
                          > {book} </li>
              }) : <li>Not book</li>
            }
          </ul>
    </div>
  )
}

export default UserFull