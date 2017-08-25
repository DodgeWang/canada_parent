var user = require('../proxy/user.proxy');
var student = require('../proxy/student.proxy');
var resUtil = require("../libs/resUtil");
var config = require('../../config/env/statusConfig');
var nodemailer = require('nodemailer');
var devConfig = require('../../config/config');



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
 * 根据ID删除用户
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
exports.deleteData = function(req, res, next){
    if (!req.query.userId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
    var id = Number(req.query.userId)
    user.deleteData(id,function(err) {
        if (err) {
            return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
        }
        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
    })
}



/**
 * 根据用户Id获取语言成绩
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
// exports.getLanguageMark = function(req, res, next){
//     if (!req.query.userId) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
//     var id = Number(req.query.userId)
//     user.getLanguageMark(id,function(err,data) {
//         if (err) {
//             return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
//         }
//         res.json(resUtil.generateRes(data, config.statusCode.STATUS_OK));
//     })
// }


/**
 * 根据用户id修改语言课成绩
 * @param  {object}   req  the request object
 * @param  {object}   res  the response object
 * @param  {Function} next the next func
 * @return {null}     
 */
// exports.editMark = function(req, res, next) {
//     console.log(req.body)
//     if(!req.body.user_id || !req.body.mark_id) return res.json(resUtil.generateRes(null, config.statusCode.STATUS_INVAILD_PARAMS));
//     var data = {
//         userId:parseInt(req.body.user_id),
//         markId:parseInt(req.body.mark_id),
//         mark:req.body.mark
//     }
//     user.editMark(data,function(err) {
//         if (err) {
//             return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
//         }
//        res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
//     })
// }



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




        for (var i = 0; i < data.length; i++) {
            data[i].passwordstr = addNumber(6);
        }
        // console.log(data)

        importfunc(0, data, createTime, function() {

            user.newList(createTime, function(err, rows) {
                if (err) {
                    return res.json(resUtil.generateRes(null, config.statusCode.SERVER_ERROR));
                }

                outer:
                    for (var s = 0; s < rows.length; s++) {
                        inter: for (var g = 0; g < data.length; g++) {
                            var us = data[g].surname + data[g].given_name + data[g].student_num
                            if (rows[s].username == us) {
                                rows[s].password = data[g].passwordstr;
                                break inter;
                            }
                        }
                    }
                console.log("this.data:", rows)

                if (rows.length > 0) {
                    var emailCont = "";
                    for (var i = 0; i < rows.length; i++) {
                        var itemDom = "<tr><td style='padding:0 10px;'>" + rows[i].username + "</td><td style='padding:0 10px;'>" + rows[i].password + "</td></tr>"
                        emailCont += itemDom;
                    }
                    emailCont = "<table border='1'><tr><th>账号</th><th>密码</th></tr>" + emailCont + "</table>"
                    sendEmail(emailCont);
                }

                return res.json(resUtil.generateRes(null, config.statusCode.STATUS_OK));
            })


        })

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


function sendEmail(content) {
    var transporter = nodemailer.createTransport({
        host: devConfig.email.server,
        secureConnection: true,
        port: devConfig.email.port,
        auth: {
            user: devConfig.email.sender,
            pass: devConfig.email.pass  

        }
    });
    var mailOptions = {
        from: devConfig.email.sender, // 发送者  
        to: devConfig.email.receiver, // 接受者,可以同时发送多个,以逗号隔开  
        subject: '新生成用户账号密码', // 标题  
        // text: 'Hello world'// 文本  
        html: content
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            return console.log(err);
        }else{  
            console.log('Message sent: ' + info.message);
            console.log('发送成功');  
        }  
        transporter.close(); // 如果没用，关闭连接池  


    });
}