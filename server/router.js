const express = require('express');
const router = express.Router();
const controller = require('./controller')

router
  .route('/attack')
  .get(controller.testGet)

module.exports = router;