var mysql = require('../../config/mysql');
var encryption = require("../func/encryption");


/**
 * 查询用户列表
 * @param  {number}   page   查询页数     
 * @param  {number}   size   查询条数     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.getList = function(page,size,callback) {
   var limit_Start = (page - 1) * size; 
   mysql.query({
        sql: "SELECT id,username FROM tbl_user order by id desc limit :limit_Start,:size",
        params  : {
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
 * 重置用户密码
 * @param  {number}   userId   用户ID     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.resetPassword = function(userId,callback) {
   var newPass = encryption.md5('123456',32);
   // var sqls = "UPDATE tbl_user SET password='" + newPass + "' WHERE id=" + userId;
   mysql.query({
        sql: "UPDATE tbl_user SET password = :newPass WHERE id = :userId",
        params  : {
           "newPass": newPass,
           "userId": userId
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}




/**
 * 导入用户
 * @param  {Array}   data   要导入的用户信息     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.importUser = function(data,callback) {
  console.log(data+'\n')
   mysql.query({
        sql: "INSERT INTO tbl_user(username,password,studentNum) SELECT :username,:password,:studentNum FROM DUAL WHERE NOT EXISTS (SELECT * FROM tbl_user WHERE username = :username); ",
        params: {
           "username": data.surname+data.given_name+data.student_num,
           "password": encryption.md5('123456',32),
           "studentNum": data.student_num
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}


