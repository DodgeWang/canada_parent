var user = require('../proxy/user.proxy');


/**
 * @查询用户列表，参数：page、size (page>=1)
 * 
 */
exports.getList = function(req, res, next) {
    if (!req.query.page || !req.query.size) return res.send("请传入参数page和size");

    user.getList(req.query, function(err, rows) {
        if (err) {
            return res.send(err);
        }
        var data = {
        	data: rows
        }
        res.json(data)
    })

}


/**
 * @重置用户密码，参数：userId
 * 
 */
exports.resetPassword = function(req, res, next){
    if(!req.body.userId) return res.send("请传入userId");
    
    user.resetPassword(req.body.userId, function(err) {
        if (err) {
            return res.send(err);
        }
        res.send('修改成功')
    })

}






