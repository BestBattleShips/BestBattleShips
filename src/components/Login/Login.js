import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state= {
      playerName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      playerName: e.target.value
    })
  }

  handleSubmit(e) {
    this.props.changePlayerName(this.state.playerName);
    this.setState({
      playerName: ''
    })
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type = 'text' value={this.state.playerName} onChange={this.handleChange}></input>
        <button type = 'submit'>Submit</button>
      </form>
    );
  }
}

export default Login;
