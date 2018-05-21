var express = require('express');
var router = express.Router();
var mysqldb = require('../shared/mysql-db');

router.get('/test', function(req, res){
    mysqldb.query("select * from tab", 
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

router.put('/test2', testResolve);

function testResolve(req, res){
    res.json(req.body);
}

module.exports = router;