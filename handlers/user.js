
var User = function () {
    var mongoose = require ('mongoose');
    var Schema = mongoose.Schema;
    var useeSchema = new Schema({ // создаём схему документа БД
        _id: Number,
        name:{
            first: String,
            last: String
        },
        dateOfBirth: {type: Date, default: Date.now},
        friends: [{type: Number, ref: 'user'}],  // в ref указывается название модели
        age: Number
    });
    var User = mongoose.model('user', useeSchema); // называем модель -> mongoose.model('название модели', название схемы)

    this.create = function(req, res, next) {       //создание метода create
        var body = req.body;                       //считывание информации, введенной пользователем
        var user = new User(body);                 //создание нового документа
        var _id = global.userId || (global.userId = 1);  //
        User._id = _id;                            //

        user.save(function (err, _user) {
            if(err) {
                return next(err);
            }

            res.status(200).send(_user);
        });
        res.status(200).send(req.body);
    };

    this.updateUser = function (req, res, next) {   //создание метода updateUser
        var login = req.params.login;
        var weight = req.params.weight;

        res.status(200).send({login: login, weight: weight});
        
    };

        this.getAll = function (req, res, next) {   //создание метода getAll
            console.log(req.myVar);
            res.status(200).send(req.ip);
        }
    };

module.exports = User;
