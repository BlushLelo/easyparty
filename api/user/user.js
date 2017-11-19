'use restrict';

var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.getUsers = function(req, res) {
    User.find({}, function(err, user) {
        if(err)
            res.send(err);
        res.json(user);
    });

};

exports.createUser = function(req, res) {
    var user = new User(req.body);
    user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.getUser = function(req, res) {
    User.findById({_id: req.params.userID}, function(err, user){
        if(err)
            res.send(err)
        res.json(user);

    });
};
