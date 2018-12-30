import React, { Component } from 'react';
import './Row.css';
import Tile from '../Tile/Tile.js';

const tiles = [0,1,2,3,4,5,6,7]

const Row = (props) => {
  return(
    <div className = 'row'>
    {tiles.map((col) => {
      return <div className = 'tile'><Tile rowNumber = {props.rowNumber} colNumber = {col} addPiece = {props.addPiece}/></div>
    })}
   </div>
  )
}

export default Row;
