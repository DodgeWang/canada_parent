var mysql = require('../../config/mysql');
/**
 * 获取活动列表  
 * @param  {number} classifyId 类别ID
 * @param  {number} page 页数
 * @param  {number} size 查询长度
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getList = function(classifyId,page,size,callback) { 
   var limit_Start = (page - 1) * size;
   mysql.query({
        sql: "SELECT * FROM tbl_campusactivities where classifyId = :classifyId order by id desc limit :limit_Start,:size",
        params  : {
           "classifyId": classifyId,
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
 * 根据id删除活动  
 * @param  {number} classifyId 类别ID
 * @param  {number} page 页数
 * @param  {number} size 查询长度
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.deleteData = function(id,callback) { 
   mysql.query({
        sql: "DELETE FROM tbl_campusactivities WHERE id = :id",
        params  : {
           "id": id,
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }

        if (rows && rows.length > 0) {
            callback(null);
        } else {
            callback(null);
        }
    })
}