
var User = function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var useeSchema = new Schema({ // создаём схему документа БД
        _id: Number,
        age: Number,
        firstName: String,
        lastName: String,
        dateOfBirth: {type: Date, default: Date.now},
        friends: [{type: Number, ref: 'user'}]  // в ref указывается название модели
    });

    var User = mongoose.model('user', useeSchema); // называем модель -> mongoose.model('название модели', название схемы)

    this.create = function (req, res, next) {       //создание метода create
        var body = req.body;                       //считывание информации, введенной пользователем
        var user = new User(body);                 //создание новой модели
        var _id = global.userId || (global.userId = 1);  //
        User._id = _id;                                  //

        user.save(function (err, _user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(_user);
        });
    };
    this.updateUser = function (req, res, next) {
        var id = req.params.id;
        var body = req.body;

        User.findByIdAndUpdate(id, {$set: body}, {new: true}, function () {
            if(err) {
                return next(err);
            }
            res.status(200).send(user);
        })
    };   //
    this.getAll = function (req, res, next) {
        User.find().exec(function () {
            User
                .find()
                .exec(function (err, resp) {
                    if (err) {
                        return next(err);
                    }

                    res.status(200).send();
                })
        });

    };
    this.getById = function (req, res, next) {
        var id = req.params.id;

    User
        .findById(id, function(err, resp){
            if(err) {
                return next(err);
            }
            res.status(200).send(resp);
        });
    }
};

module.exports = User;  //даем доступ на использование методов одновременно

/* this.updateUser = function (req, res, next) {   //создание метода updateUser
 var login = req.params.login;
 var weight = req.params.weight;

 res.status(200).send({login: login, weight: weight}); //res.status - установка статуса(200 - успех); отправляем login и weight

 }; */










