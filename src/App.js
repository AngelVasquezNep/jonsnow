import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Buscador from './components/Buscador'
import Barra from './components/BarraRank'
import User from './components/User'
import ListUsers from './components/ListUsers'

class App extends Component {
  
  state = {
    value: '',
    characters: {}
  }

  componentDidMount () {
    fetch('https://api.got.show/api/characters')
    .then(res => res.json())
    .then(json => {
      this.setState({
        characters: json
      })
    })
  }

  // handleClick = (e) => {
  //   e.preventDefault()
  // }

  // refBuscador = element => {
  //   this.buscadorValue = element
  // }

  // changeValue = element => {
  //   this.setState({
  //     value: element.target.value
  //   })
  // }

  handleChange = element => {
    console.log(element.target.value)
  }

  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        {/* <Buscador 
              changeValue = { this.changeValue }
              refBuscador = { this.refBuscador }
              handleClick = { this.handleClick } 
              value= {this.state.value}
              /> */}
        {/* <Barra
              defaultValue = { 250 }
              min = { 0 }
              max = { 300 }
              handleChange = { this.handleChange }
            /> */}
        {/* <User/> */}
          <ListUsers users = {this.state.characters} rank = {250} />


      </div>
    );
  }
}

export default App;
