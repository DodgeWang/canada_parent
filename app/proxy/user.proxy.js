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
 * 根据用户Id获取语言成绩
 * @param  {number}   userId   用户ID     
 * @param  {Function} callback 回调函数
 * @return {null}
 */
// exports.getLanguageMark = function(id,callback) {
//    mysql.query({
//         sql: "SELECT id,mark FROM tbl_languageLesson WHERE student_Id = :id order by id desc limit 0,1",
//         params  : {
//            "id": id
//         }
//     }, function(err, rows) {
//         if (err) {
//             callback(err, null);
//         }

//         if (rows && rows.length > 0) {
//             callback(null, rows[0]);
//         } else {
//             callback(null, null);
//         }
//     })
// }



/**
 * 根据指定id修改语言课成绩
 * @param  {object}   data   修改信息    
 * @param  {Function} callback 回调函数
 * @return {null}
 */
// exports.editMark = function(data,callback) {
//    mysql.query({
//         sql: "insert into tbl_languageLesson(id,mark,p,student_Id) values (:id,:mark,'p4',:stuId) on duplicate key update mark=:mark,p='p4',student_Id=:stuId",
//         params  : {
//            "id": data.markId,
//            "mark": data.mark,
//            "stuId": data.userId
//         }
//     }, function(err) {
//         if (err) {
//             callback(err, null);
//         }
//         callback(null, null);
//     })
// }



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
 * 根据id删除用户
 * @param  {number} id 用户ID
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.deleteData = function(id,callback) { 
   mysql.query({
        sql: "DELETE tbl_user,tbl_studentinfo FROM tbl_user,tbl_studentinfo WHERE tbl_user.id=:id AND tbl_user.studentNum = tbl_studentinfo.student_num",
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
 * 导入用户
 * @param  {Array}   data   要导入的用户信息     
 * @param  {Array}   createTime   要导入的用户信息
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.importUser = function(data,createTime,callback) {
   mysql.query({
        sql: "INSERT INTO tbl_user(username,password,studentNum,createtime) SELECT :username,:password,:studentNum,:createtime FROM DUAL WHERE NOT EXISTS (SELECT * FROM tbl_user WHERE username = :username); ",
        params: {
           "username": data.surname+data.given_name+data.student_num,
           "password": encryption.md5(data.passwordstr,32),
           "studentNum": data.student_num,
           "createtime": createTime
        }
    }, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null);
    })
}


/**
 * 查询最新生成的用户列表
 * @param  {number}   createtime   生成时间         
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.newList = function(createtime,callback) {
   mysql.query({
        sql: "SELECT * FROM tbl_user WHERE createtime=:createtime",
        params  : {
           "createtime": createtime
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



