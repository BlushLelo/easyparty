'use restrict';
module.exports = function (app) {
    var event = require('../events/events');
    app.route('/event')
        .get(event.getEvents)
        .post(event.createEvent);

     app.route('/event/:eventID')
         .get(event.getEvent);

};