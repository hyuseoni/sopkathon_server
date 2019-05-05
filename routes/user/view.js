const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../../config/database');
const connection = mysql.createConnection(dbConfig);

router.get('/', function(req, res){ 
    var sql = 'SELECT * from user';
    var query = connection.query(sql, function(err, result){
        if(err) {
            res.status(500).send('Internal Server Error')
        }
        else {
            res.status(200).send({
                result
            });
        }
    });
});
  
module.exports = router;