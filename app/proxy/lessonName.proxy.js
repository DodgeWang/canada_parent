var mysql = require('../../config/mysql');


/**
 * 获取课程名列表
 * @param  {number}   page   查询页数     
 * @param  {number}   size   查询条数         
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.list = function(page, size, callback) {
    var limit_Start = (page - 1) * size;
    mysql.query({
        sql: "SELECT * FROM tbl_lessonName order by id desc limit :limit_Start,:size",
        params: {
            "limit_Start": limit_Start,
            "size": size
        }
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


/**
 * 修改指定课程信息    
 * @param  {object} data 课程信息
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.edit = function(obj, callback) {
    var sqls = "UPDATE tbl_lessonName SET code=:code,name=:name WHERE id=:id";
    mysql.query({
        sql: sqls,
        params: {
            "id": obj.id,
            "code": obj.code,
            "name": obj.name
        }
    }, function(err, rows) {
        if (err) {
            return callback(err);
        }
        callback(null);
    })
}


/**
 * 根据id删除课程
 * @param  {number} id 课程ID
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.deleteData = function(id,callback) { 
   mysql.query({
        sql: "DELETE FROM tbl_lessonName WHERE id = :id",
        params: {
           "id": id,
        }
    }, function(err, rows) {
        if (err) {
            return callback(err);
        }

        callback(null);
    })
}


/**
 * 添加课程
 * @param  {object}   data   新添加data     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.add = function(data,callback) { 
   mysql.query({
        sql: "INSERT INTO tbl_lessonName (code,name) VALUES ( :code, :name)",
        params  : {
           "code": data.code,
           "name": data.name
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}