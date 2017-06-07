/**
 * Created by Larisa on 10.02.2017.
 */

module.exports = (function(){
    var express = require('express');
    var UserHandelr = require ('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandelr();


    userRouter.get('/', userHandler.getAllusers);                 //при запросе на /user используем метод getAllusers из UserHandler
    userRouter.post('/:login/:weight', userHandler.updateUser);   //при запросе на /:login/:weight используем метод updateUsers из userHandler
    userRouter.post('/', userHandler.create);                     //при запросе на / используем метод create из user

    return userRouter;
}) ;
