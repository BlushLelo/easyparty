var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/user/model'),
    bodyParser = require('body-parser')

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}
const server = http.createServer(requestHandler)


    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:admin@ds111476.mlab.com:11476/prezado00');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var routes = require('./api/routes/user');
    routes(app);

    app.listen(port);

    console.log('Restful API server started on: '+ port);