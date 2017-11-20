var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/user/model'),
    bodyParser = require('body-parser');


    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:admin@ds111476.mlab.com:11476/prezado00');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var userRoute = require('./api/routes/user');
    userRoute(app);

    var eventRoute = require('./api/routes/event') ;
    eventRoute(app);

    app.listen(port);

    console.log('Restful API server started on: '+ port);