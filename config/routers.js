var processData = require('../app/controllers/processData.controller');
var user = require('../app/controllers/user.controller');
var classification = require('../app/controllers/classification.controller');
var administrators = require('../app/controllers/administrators.controller')

module.exports = function(app) {

    /**
     * html page routers
     */
    app.get('/login', function(req, res) {
       res.sendfile('public/login.html')
    });
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

    app.get('/resetPassword',function(req, res) {
        res.sendfile('public/tpls/resetPassword.html')
    });

    



    /**
     * api routers
     */
    app.post('/admin/login',administrators.login);//后台管理员登录  

    app.get('/admin/managerInfo',administrators.managerInfo);//获取管理员信息

    app.get('/admin/exit',administrators.exit);  //退出后台系统 

    app.post('/admin/resetPassword',administrators.resetPassword);  //修改管理员密码

    app.post('/fileuploads',processData.importData); //导入数据

    app.get('/user/list',user.getList); //获取用户列表

    app.post('/user/resetPassword',user.resetPassword);  //重置用户密码

    app.get('/classification/list',classification.getList);  //获取图文分类列表

    app.post('/classification/add',classification.add);  //添加图文分类

    app.post('/classification/revise',classification.revise); //修改图文分类名
}