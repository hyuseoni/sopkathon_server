var express = require('express');
var router = express.Router();

router.use('/s3', require('./s3/s3_routes'));

module.exports = router;
