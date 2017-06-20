var mysql = require('../../config/mysql');


/**
 * 获取图文分类列表
 * @param  {string}   username   用户名     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getList = function(callback) { 
   var sqls = "SELECT * FROM tbl_indexClassification";
   mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(err, null);
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


/**
 * 修改图文分类名
 * @param  {obj}   data   包含id(分类id),name(修改的名称)     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.revise = function(data,callback) { 
   mysql.query({
        sql: "UPDATE tbl_indexClassification SET name = :name WHERE id = :id",
        params  : {
           "name": data.name,
           "id": data.id
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}
