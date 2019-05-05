const express = require('express');
const router = express.Router();

//댓글 조회
const view = require('./view');
router.use('/view', view);

//댓글 작성
const write = require('./write');
router.use('/write', write);

//댓글 삭제
const del = require('./delete');
router.use('/delete', del);

module.exports = router;