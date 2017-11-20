'use restrict';

var mongoose = require('mongoose'),
Event = mongoose.model('Events');

exports.getEvents = function(req, res) {
    Event.find({}, function(err, events) {
        if(err)
            res.send(err);
        res.json(events);
    });

};

exports.createEvent = function(req, res) {
    var event = new Event(req.body);
    event.save(function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.getEvent = function(req, res) {
    Event.findById({_id: req.params.eventID}, function(err, event){
        if(err)
            res.send(err)
        res.json(event);

    });
};
