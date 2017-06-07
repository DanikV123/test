/**
 * Created by Larisa on 10.02.2017.
 */
module.exports = function(app) {
      var bodyParser = require ('body-parser');
      var userRouter = require ('./user');

      app.use(bodyParser.json());
      app.get('/', function(req, res, next) {       //app.get('путь', функция)
          //todo send index.html
          res.status(200).sendfile('index.html');   //устанавливаем статус 200, отправляем index.html
      });
app.use('/user', userRouter);   //

};