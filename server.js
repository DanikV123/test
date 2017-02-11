/**
 * Created by Larisa on 10.02.2017.
 */
var express = require('express');
var app = express();
var port;
var mongoose = require ('mongoose');
var conection;
var conection2;

//      mongoose.connect('localhost', 27017, 'test');

require('./config/development');
//mongoose.connect(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);

port = process.env.PORT || 3030;

//conection = mongoose.connection;
conection1 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);
conection2 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), 'jspro');

conection1.once('connected', function(db){
    console.log('---— Connected —---');

    function modifireMidlware(req, res, next){
        req.myVar = 'adfadf';
        next();
    };

    app.post('/user', function(req, res, next){
        res.status(200).send(req.body);
    });
    app.use(modifireMidlware);
    app.get('/', function(req, res, next){
        console.log(req.myVar);
        res.status(200).send(req.ip);
    });

    app.listen(port, function(){
        console.log('Server start succes =' + port);

    });
});
conection1.on('error', function(err){
    console.error(err);

    process.exit(1);
});
 conection2.once('connected', function(db){
  console.log('---— Connected2 —---');

  });
  conection2.on('error', function(err){
  console.error(err);

  process.exit(1);
});