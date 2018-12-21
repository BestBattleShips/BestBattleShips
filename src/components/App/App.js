import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      player: null
    }
    
    this.changePlayerName = this.changePlayerName.bind(this)
  }

  changePlayerName(name) {
    this.setState({
      player: name
    })
  }

  render() {
    return (this.state.player === null) ? (<div> <Login changePlayerName={this.changePlayerName} /> </div>) : (
      <div>HELLOOOOOOOO</div>
    );
  }
}

export default App;
