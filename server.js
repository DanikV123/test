var express = require('express');
var app = express();
var port = process.env.PORT || 3030;;
var mongoose = require ('mongoose');
var conection;
/*var conectin1;
var conection2;*/

//conection = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);
//conection2 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), 'jspro');
//mongoose.connect('localhost', 27017, 'test');
//mongoose.connect(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);

require('./config/development');

mongoose.connect('mongodb://localhost:27017/test');

conection = mongoose.connection;
conection.once('connected', function(db){
    console.log('---— Connected —---');

    var Schema = mongoose.Schema;
    var useeSchema = new Schema({
        _id: Number,
        name:{
            first: String,
            last: String
        },
        dateOfBirth: {type: Date, default: Date.now},
        friends: [{type: Number, ref: 'user'}],
        age: Number
    });
  var User = mongoose.model('user', useeSchema);

  function modifireMidlware(req, res, next){
        req.myVar = 'adfadf';
        next();
    };

    app.post('/user', function(req, res, next){
        var user = new User({name:'VasyPupkin', age:24});
        user.save(function (eer, user) {
            console.log(user.age);
            
        });
    });
   // app.use(modifireMidlware);
    app.get('/', function(req, res, next){
        User.find({_id: 5})
            .populate('friends', {_id:0, friends:0})
            .exec(function(err, users){
            if(err){
                return next(err);
            }
            res.status(200).send(users);
        });

    });

    app.listen(port, function(){
        console.log('Server start succes =' + port);
    });
});
conection.on('error', function(err){
    console.error(err);

    process.exit(1);
});
 /*conection2.once('connected', function(db){
  console.log('---— Connected2 —---');

  });
  conection2.on('error', function(err){
  console.error(err);

  process.exit(1);
});*/