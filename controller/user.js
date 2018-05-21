var express = require('express');
var router = express.Router();
var mysqldb = require('../shared/mysql-db');

router.post('', function(req, res){
    let obj = req.body;
    let sql = `
    insert into sc_user(
        user_code,
        user_title,
        user_first_name,
        user_last_name,
        user_mobile,
        user_tel,
        user_email,
        user_pwd,
        user_active
    )values(
        '${obj.userCode}' ,
        '${obj.userTitle}',
        '${obj.userFirstName}',
        '${obj.userLastName}',
        '${obj.userMobile}',
        '${obj.userTel}',
        '${obj.userEmail}',
        '${obj.userPwd}',
        '${obj.userActive}'
    )
    `;
    mysqldb.query(sql, function(error, result){
        if(error){
            res.json(error);
        }else{
            res.json({
                success: true
            });
        }
    });
});

module.exports = router;