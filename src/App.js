import React, { Component } from 'react';
import Header from './components/Header'
// import Buscador from './components/Buscador'
import Barra from './components/BarraRank'
import ListUsers from './components/ListUsers'
import Footer from './components/Footer'

class App extends Component {
  
  state = {
    value: '',
    rankBarra: 300,
    characters: {},
    selectedCharacter: {},
    totalElemenetosLista: 0
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

  handleChangeBarra = element => {
    this.setState({
      rankBarra: element.target.value
    })
  }

  render() {
    return (
        <div className="App">
          <Header/>
          {/* <Buscador 
                changeValue = { this.changeValue }
                refBuscador = { this.refBuscador }
                handleClick = { this.handleClick } 
                value= {this.state.value}
              /> */}
          <Barra
                min = { 0 }
                max = { 300 }
                rank = { this.state.rankBarra }
                handleChange = { this.handleChangeBarra }
                value = { this.state.rankBarra }
                />
          <ListUsers 
                users = { this.state.characters } 
                rank = { this.state.rankBarra } 
                />
          <Footer/>
        </div>
    );
  }
}

export default App;
