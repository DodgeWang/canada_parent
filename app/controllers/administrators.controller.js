var administrators = require('../proxy/administrators.proxy');
var resUtil  = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var encryption = require("../func/encryption");

/**
 * 后台管理员登陆
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.login = function(req, res, next) {
	if(!req.body.username || !req.body.password) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    administrators.login(req.body.username,function(err,rows) {
        if (err) {
            return res.json(resUtil.generateRes(null, {code:err.statusCode}));
        }
        if(!rows){
        	//登陆账号不存在
        	return res.json(resUtil.generateRes(null, {err:"账号不存在"}));
        }

        var password = encryption.md5(req.body.password,32);

        if(password == rows.password){
        	//登陆账号密码都正确
        	req.session.administrator = {id:rows.id,username:rows.username};
        	res.json(resUtil.generateRes(rows, config.statusCode.STATUS_OK));	
        }else{
        	//登陆密码错误
            res.json(resUtil.generateRes(null, {err:"密码错误"}));
        }  
    })
}


/**
 * 退出后台登陆
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.exit = function(req,res,next) {
    delete req.session.administrator;
    res.redirect('/login');
}