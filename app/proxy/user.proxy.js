var mysql = require('../../config/mysql');
var encryption = require("../func/encryption");

exports.getList = function(data,callback) {
   var limit_Start = (data.page - 1) * data.size;  
   var sqls = "SELECT * FROM tbl_user limit " + limit_Start + ',' + data.size;
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(new ServerError(), null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows);
        } else {
            callback(null, []);
        }
    })
}




exports.resetPassword = function(userId,callback) {
   var newPass = encryption.md5('123456',32);
   var sqls = "UPDATE tbl_user SET password='" + newPass + "' WHERE id=" + userId;
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}