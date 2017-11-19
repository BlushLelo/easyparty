'use restrict';
module.exports = function (app) {
    var user = require('../user/user');
    app.route('/user')
        .get(user.getUsers)
        .post(user.createUser);

     app.route('/user/:userID')
         .get(user.getUser);

};