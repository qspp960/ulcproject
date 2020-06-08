const express = require('express');
const router = express.Router();
const controller = require ('./controller');

router.post('/add/board',controller.add.board);
router.post('/send/pw',controller.api.sendPw);
router.post('/add/user',controller.add.user);

module.exports = router;
