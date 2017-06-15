var express = require('express');
var routers = require('./routers');
var bodyParser = require('body-parser');
var mysql = require('./mysql.js');

module.exports = function() {
    console.log('int express...');
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static('public'));


    routers(app);


    app.use(function(req, res, next) {
        res.status(404);
        try {
            return res.json('Not Found');
        } catch (e) {
            console.log('404 set header after sent');
        }
    });

    app.use(function(err, req, res, next) {
        if (!err) {
            return next() }
        res.status(500);
        try {
            return res.json(err.message || 'server error')
        } catch (e) {
            console.log('500 set header after sent');
        }
    });

    return app;
}