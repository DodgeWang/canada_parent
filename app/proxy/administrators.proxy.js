var mysql = require('../../config/mysql');


exports.login = function(username,callback) {
   var sqls = "SELECT * FROM tbl_administrators where username=" + username;
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(new ServerError(), null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows[0]);
        } else {
            callback(null, null);
        }
    })
}