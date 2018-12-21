const {player} = require('./gameboard.js')

let playerOneBoard;
let playerTwoBoard;

const controller = {
  testGet: (req, res) => {
    res.send('fuck yeah');
  },

  testPost: (req, res) => {
    res.send('no fuck u')
  },

  changePlayerName: (req, res) => {
    console.log('this is player name: ', req.body);
    if (!playerOneBoard) {  
      playerOneBoard = player(req.body.player)
      res.status(200).send('1')
    } else if (!playerTwoBoard) {
      playerTwoBoard = player(req.body.player)
      res.status(200).send('2')
    } else {
      res.send('fuck off')
    }
  },

  getOpponentName: (req, res) => {
    if (req.body.playerNum === 1) {
      if(playerTwoBoard) {
        console.log('this is playerTwoBoard.player: ', playerTwoBoard.player)
        res.status(200).send(playerTwoBoard.player)
      } else {
        res.status(200).send('Waiting on Opponent');
      }
    } else if (req.body.playerNum === 2) {
      console.log('this is playerOneBoard.player: ', playerOneBoard.player)
      res.status(200).send(playerOneBoard.player);
    }
  }
}

module.exports = controller;