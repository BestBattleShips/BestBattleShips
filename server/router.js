const express = require('express');
const router = express.Router();
const controller = require('./controller')

router
  .route('/attack')
  .get(controller.testGet);
router
  .route('/playerName')
  .post(controller.changePlayerName);
router
  .route('/getPlayerNumber')
  .post(controller.getOpponentName);
  router
  .route('/assignPieces')
  .post(controller.placeShips);

module.exports = router;