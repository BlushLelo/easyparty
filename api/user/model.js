'use restrict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login:{
        type: String,
        required: 'Informe o login'
    },
    Senha:{
        type: String,
        required: 'Informe a senha'
    },
    Email:{
        type: String,
        required: 'Informe o email'
    },
    Nascimento:{
        type: String
    },
    Genero:{
        type: String
    },
    Eventos: {
        type: [{
                TotalGasto: Number,
                HorarioCompra: Number,
                Solicitou: Boolean,
                Confirmou: Boolean
        }],
        required: "Informe o evento"
    },
    Credito: {
        type: Number
    }

});

module.exports = mongoose.model('User', userSchema);