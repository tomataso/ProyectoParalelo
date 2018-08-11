'use strict';
let mongoose = require('mongoose');

let profHorasSchema = new mongoose.Schema({
    idProyecto : {type : String, required : true},
    idEstudiante : {type : String, required : true},
    horas : {type: Number, required : true},
    descripcion : {type : String, required : true}
});

module.exports = mongoose.model('horasEstudiante', profHorasSchema); 