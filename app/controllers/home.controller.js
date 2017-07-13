var home = require('../proxy/home.proxy');
var resUtil  = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var encryption = require("../func/encryption");

/**
 * 添加首页图片
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.bannerAdd = function(req, res, next) {
	if(!req.body.imgpath) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));

    home.bannerAdd(req.body.imgpath,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));       
    })
}


/**
 * 获取最新首页图片
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.getBanner = function(req, res, next) {
    home.getBanner(function(err,data) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));       
    })
}