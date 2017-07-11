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
    console.log("wangdaiqiang")
    student.getList(function(err, data) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        
        if(data.length === 0) return res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));
        for (var i = 0; i < data.length; i++) {
            (function(item,num) {
                user.importUser(item, function(err, rows) {
                    if (err) {
                        return res.json(resUtil.generateRes(null, {
                            code: 4,
                            msg: '导入数据格式错误'
                        }));
                    }
                    if(num === data.length - 1){
                        res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));
                    }
                })

            })(data[i],i)
        }


    })

}