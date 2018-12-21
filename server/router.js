const express = require('express');
const router = express.Router();
const controller = require('./controller')

router
  .route('/attack')
  .get(controller.testGet);
router
  .route('/playerName')
  .post(controller.changePlayerName);

module.exports = router;