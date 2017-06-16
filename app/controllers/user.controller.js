var user = require('../proxy/user.proxy');
var resUtil  = require("../libs/resUtil");
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

    user.getList(req.query, function(err, rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, {code:err.statusCode}));
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
exports.resetPassword = function(req, res, next){
    if(!req.body.userId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    
    user.resetPassword(req.body.userId, function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, {code:err.statusCode}));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })

}






