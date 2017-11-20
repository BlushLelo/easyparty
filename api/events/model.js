'use restrict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    Nome:{
        type: String,
        required: 'Informe o evento'
    },
    Data:{
        type: String,
        required: 'Informe a data'
    },
    Local:{
        type: String,
        required: 'Informe o local'
    },
    Descricao: {
        type: String
    },
    Imagem: {
        type: String
    }
});

module.exports = mongoose.model('Events', eventsSchema);