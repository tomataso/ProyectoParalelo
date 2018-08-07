'use strict';
let mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    idUsuario : {type : String, required : true},
    Correo : {type : String, required : true, unique : true},
    Contrasenna : {type : String, required : true},
    TipoUsuario : {type : Number, required : true},
    desactivado : {type : Boolean, required : true}
});

module.exports = mongoose.model('Usuario', usuarioSchema); 

