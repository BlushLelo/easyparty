var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/user/model'),
    Events = require('./api/events/model'),
    bodyParser = require('body-parser');


    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:admin@ds111476.mlab.com:11476/prezado00');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var routes = require('./api/routes/user');
    routes(app);
    var routes2 = require('./api/routes/event');
    routes2(app);


    app.listen(port);

    console.log('Restful API server started on: '+ port);