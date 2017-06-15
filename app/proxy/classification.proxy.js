var mysql = require('../../config/mysql');



exports.getList = function(callback) { 
   var sqls = "SELECT * FROM tbl_indexClassification";
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


exports.add = function(name,callback) { 
   var sqls = "INSERT INTO tbl_indexClassification (`name`) VALUES (" + name +")";
   console.log(sqls)
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(new ServerError());
        }
        callback(null);
    })
}



exports.revise = function(data,callback) { 
   var sqls = "UPDATE tbl_indexClassification SET name=" + data.name + " WHERE id=" + data.id;
   console.log(sqls)
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}