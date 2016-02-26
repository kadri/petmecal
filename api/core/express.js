var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
expressJwt = require('express-jwt'),
morgan = require('morgan'),
unless = require('express-unless'),
mongoose = require('mongoose'),
User = mongoose.model('User');

module.exports = function(app) {

    //Object.keys(require.cache).forEach(function(key) { delete require.cache[key] });

    app.use(express.static(process.cwd() + '/web/'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());
    if (process.env.NODE_ENV !== 'test') {
        app.use(morgan('combined'));
    }

    app.use(function (req, res, next) {
        //kk: aynı port üzerinden çalışacağımız için güvenlik riski nedeniyle kapatıyorum
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
        next();
    });
    
    app.use('/api',
        expressJwt({
            secret: process.env.JWT_SECRET || 'CgbJDpGA'
        }).unless({
            path: ['/api/login', '/api/register']
        })
    );
    app.use('/api', require(process.cwd() + '/api/core/router.js')());

    
    // app.all("*", function (req, res) {
    //     res.status(404).json({
    //         success: false,
    //         data: 'Not Found'
    //     })
    // });
    app.use('/*', function(req, res){
        console.log('GELEN ISTEK : ' + req.originalUrl);
        res.sendfile(process.cwd() + '/web/index.html');
    });
};