const express = require('express');
const router = express.Router();
const controller = require ('./controller');
//경로설정
router.post('/send/pw',controller.api.sendPw);
router.post('/add/homepageusers',controller.add.homepageusers);
router.post('/get/board', controller.get.board);
router.post('/get/board_cnt', controller.get.board_cnt);
router.post('/add/board', controller.add.board);
router.post('/get/board_data', controller.get.board_data);
router.post('/add/reply', controller.add.reply);
router.post('/search/id', controller.search.id);
router.post('/search/pw',controller.search.pw);
router.post('/update/password',controller.update.password);
module.exports = router;
