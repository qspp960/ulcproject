const express = require('express');
const router = express.Router();
const controller = require ('./controller');

router.post('/add/timesetting',controller.add.timesetting);
router.post('/send/pw',controller.api.sendPw);
router.post('/add/homepageusers',controller.add.homepageusers);

module.exports = router;
