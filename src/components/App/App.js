import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login.js'
import Opponent from '../OpponentName/OpponentName.js'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      player: null,
      playerNumber: null
    }
    
    this.changePlayerName = this.changePlayerName.bind(this)
  }

  changePlayerName(name) {
    this.setState({
      player: name
    }, () => {
      axios.post('/battleship/playerName', {
        player: this.state.player
      })
      .then((response) => {
        if (response.data === 1) {
          this.setState({
            playerNumber: 1
          })
        } else if (response.data === 2) {
          this.setState({
            playerNumber: 2
          })
        } 
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    })
  }

  render() {
    return (this.state.player === null) ? (<div> <Login changePlayerName={this.changePlayerName} /> </div>) : (
      <div>
        <div>You are player number {this.state.playerNumber}</div>
        <Opponent number={this.state.playerNumber}/>
      </div>
    );
  }
}

export default App;