var classification = require('../proxy/classification.proxy');


/**
 * @获取图文分类列表
 */
exports.getList = function(req, res, next) {
    classification.getList(function(err, rows) {
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
 * @添加图文分类
 */
exports.add = function(req, res, next) {
	if(!req.body.name) return res.send('请输入分类名称');
    classification.add(req.body.name,function(err) {
        if (err) {
            return res.send(err);
        }
       res.send('添加成功')
    })
}


/**
 * @修改图文分类名
 */
exports.revise = function(req, res, next) {
	if(!req.body.id || !req.body.name) return res.send('请输入分类名称和分类ID');
	var data = {
		id:req.body.id,
		name:req.body.name
	}
	console.log(data)
    classification.revise(data,function(err) {
        if (err) {
            return res.send(err);
        }
       res.send('修改成功')
    })
}