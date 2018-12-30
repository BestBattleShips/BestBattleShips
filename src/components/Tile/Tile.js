import React, {Component} from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div>
      <button onClick = {() => props.addPiece(props.rowNumber, props.colNumber)}> </button>
    </div>)
}

export default Tile;