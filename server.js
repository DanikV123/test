var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3030;
var mongoose = require ('mongoose');
var conection;

require('./config/development');

mongoose.connect('mongodb://localhost:27017/test'); //подключаемся к БД

conection = mongoose.connection;
conection.once('connected', function(db){  //Если подключились - пишет ---Connected---
    app.use(express.static(path.join(__dirname, 'public')));  //даём пользователю доступ к статичным файлам из дирректории public
    require('./routes/index')(app);
    app.listen(port, function(){                  /* Приложение слушает подключения на port. При запуске приложения
                                                   и начале прослушивания, пишет: 'Все хорошо', 'Server start...' */
        console.log('Всё хорошо');
        console.log('Server start succes = ' + port);
    });
});
conection.on('error', function(err){         //если нету подключения - написать error
        console.error(err);

        process.exit(1);
    });

/*
 var conection1;
 var conection2;
 conection1 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);
 conection2 = mongoose.createConnection(process.env.DB_HOST, parseInt(process.env.DB_PORT), 'jspro');
 */

/*
 mongoose.connect('localhost', 27017, 'test');
 mongoose.connect(process.env.DB_HOST, parseInt(process.env.DB_PORT), process.env.DB_NAME);
 */

