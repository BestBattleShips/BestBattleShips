import React, { Component } from 'react';
import './GameBoard.css';
import Row from '../Row/Row.js';
import axios from 'axios';

const boardRows = [0,1,2,3,4,5,6,7]

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squaresToBeSwitched: []
    }
    this.addPiece = this.addPiece.bind(this);
    this.submitSquares = this.submitSquares.bind(this);
  }

  addPiece(row, col) {
    console.log('this is row: ', row);
    console.log('this is col: ', col);
    this.setState((prevState) => ({
      squaresToBeSwitched: prevState.squaresToBeSwitched.concat([[row, col]]),
    }), () => {
      console.log('state after switch: ', this.state.squaresToBeSwitched);
    })
  }

  submitSquares() {
    console.log('these are the squares: ', this.state.squaresToBeSwitched);
    axios.post('/battleship/assignPieces', {
      shipLocations: this.state.squaresToBeSwitched,
      playerNumber: this.props.number
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    
    return (
      <div>
       {boardRows.map((row) => {
         return  <Row rowNumber = {row} addPiece = {this.addPiece}/> 
       })}
       <button onClick = {this.submitSquares}>Submit</button>
      </div>

    )
  }
}

export default GameBoard;
