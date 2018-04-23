import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Buscador from './components/Buscador'

class App extends Component {
  
  state = {
    value: ''
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.buscadorValue.value)
    this.setState({
      value: ''
    })
  }

  refBuscador = element => {
    this.buscadorValue = element
  }

  changeValue = value => {
    this.setState({
      value: value
    })
  }
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Buscador 
              changeValue = { this.changeValue }
              refBuscador = { this.refBuscador }
              handleClick = { this.handleClick } 
              value= {this.state.value}
              />
      </div>
    );
  }
}

export default App;
