var processData = require('../app/controllers/processData.controller');
var user = require('../app/controllers/user.controller');
var classification = require('../app/controllers/classification.controller')

module.exports = function(app) {

	//html page routers
    app.get('/index', function(req, res) {
        res.sendfile('public/index.html')
    });
    app.get('/userManager', function(req, res) {
        res.sendfile('public/tpls/userManager.html')
    });
    app.get('/administrator', function(req, res) {
        res.sendfile('public/tpls/administrator.html')
    });
    app.get('/activity', function(req, res) {
        res.sendfile('public/tpls/activityManagement.html')
    });
    app.get('/importData', function(req, res) {
        res.sendfile('public/tpls/importData.html')
    });

    //api routers
    app.post('/fileuploads',processData.importData); //导入数据

    app.get('/user/list',user.getList); //获取用户列表

    app.post('/user/resetPassword',user.resetPassword);  //重置用户密码

    app.get('/classification/list',classification.getList);  //获取图文分类列表

    app.post('/classification/add',classification.add);  //添加图文分类
}