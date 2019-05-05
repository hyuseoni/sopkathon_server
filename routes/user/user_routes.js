var express = require('express');
var router = express.Router();

//회원가입
const signup = require('./signup');
router.use('/signup', signup);

//로그인
const login = require('./login');
router.use('/login', login);

module.exports = router;