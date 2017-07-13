var user = require('../proxy/user.proxy');
var student = require('../proxy/student.proxy');
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');



/**
 * 查询用户列表
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.getList = function(req, res, next) {
    if (!req.query.page || !req.query.size) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    var page = Number(req.query.page);
    var size = Number(req.query.size);
    user.getList(page, size, function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));
    })

}

/**
 * 重置用户密码
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.resetPassword = function(req, res, next) {
    if (!req.body.userId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));

    user.resetPassword(req.body.userId, function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })

}



/**
 * 更新用户
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}        
 */
exports.updateUser = function(req, res, next) {
    student.getList(function(err, data) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }

        if (data.length === 0) return res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));

        var createTime = Date.parse(new Date()) / 1000;

        for (var i; i < data.length; i++) {
            data[i].passwordstr = "fjdkfdjfks";
            // console.log(data.length)
        }
        // console.log(data.length)
        console.log("thishehe",data)

        // importfunc(0, data, createTime, function() {

        //     user.newList(createTime, function(err, rows) {
        //         if (err) {
        //             return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        //         }
                
        //         outer:
        //         for(var s=0;s<rows.length;s++){
        //             inter:
        //             for(var g=0;g<data.length;g++){
        //                 var us = data[g].surname+data[g].given_name+data[g].student_num
        //                 if(rows[s].username == us){
        //                     rows[s].password = data[g].passwordstr;
        //                     break inter;
        //                 }
        //             }  
        //         }
        //         console.log("this.data:", rows)

        //         return res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
        //     })


        // })

    })
}



function importfunc(i, obj, createTime, callback) {
    user.importUser(obj[i], createTime, function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        if (i === obj.length - 1) {
            return callback()
        } else {
            i += 1;
            return importfunc(i, obj, createTime, callback)
        }
    })
}


//随机生成六位数
function addNumber(_idx) {
    var str = '';
    for (var i = 0; i < _idx; i += 1) {
        str += Math.floor(Math.random() * 10);
    }
    return str;
}

