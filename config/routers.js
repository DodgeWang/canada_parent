var processData = require('../app/controllers/processData.controller');

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
    app.post('/fileuploads',processData.importData)
}