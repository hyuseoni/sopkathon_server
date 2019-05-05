var express = require('express');
var router = express.Router();

//글 작성
const write = require('./write');
router.use('/write', write);

//글 삭제
const del = require('./delete');
router.use('/delete', del);

//글 조회
const view = require('./view');
router.use('/view', view);

module.exports = router;
