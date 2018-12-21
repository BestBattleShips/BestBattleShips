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
    console.log(req.body);
    if (!playerOneBoard) {
      playerOneBoard = player(req.body.player)
      res.send('you\'re playerone!')
    } else if (!playerTwoBoard) {
      playerTwoBoard = player(req.body.player)
      res.send(`you're player two, nigga`)
    } else {
      res.send('fuck off')
    }
//  resconst playerName 
  }
}

module.exports = controller;