var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    user = require('./api/user/model'),
    event = require('./api/events/model'),
    bodyParser = require('body-parser');


    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:admin@ds111476.mlab.com:11476/prezado00');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    app.use(require('./api/routes/user'));
    app.use(require('./api/routes/event'));

    app.listen(port);

    console.log('Restful API server started on: '+ port);