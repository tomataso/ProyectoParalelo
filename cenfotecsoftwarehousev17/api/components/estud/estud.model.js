// 'use strict';
// let mongoose = require('mongoose');

// let EstudSchema = new mongoose.Schema({
//     _id: {type: mongoose.Schema.ObjectId, auto: true},
//     Nombre : {type : String, unique : true, required : true},
//     Apellido : {type : String, unique : true, required : true},
//     Direccion : {type : String, required : true},
//     Telefono : {type : Number, unique : true, required: true},    
//     Correo : {type : String, required : true},
//     Cedula : {type : Number, unique : true, required: true},
//     Carrera : {type : String, required : true},
//     Materias : {type : String, required : true},   
//     NombreEmergencia : {type : String, required : true},
//     ApellidoEmergencia : {type : String, required : true},
//     TelefonoEmergencia : {type : Number, required : true}, 
//     Contrasenna : {type: String, required: true},
//     TipoUsuario: {type: Number, required: true}
// });

// module.exports = mongoose.model('Estud', EstudSchema);



'use strict';
let mongoose = require('mongoose');

let EstudianteSchema = new mongoose.Schema({

    Cedula : {type : String, required: true},
    Nombre : {type : String, required : true},
    Apellido : {type : String, required : true},
    Apellido2 : {type : String, required : true},
    Provincia : {type : String, required: true},
    Canton : {type : String, required: true},
    Distrito : {type : String, required: true},
    DireccionExacta : {type : String, required: true},
    Telefono : {type : String, required: true},
    Correo : {type : String, required : true},
    // Carrera : {type : String, required : false},
    // Materias : {type : String, required : false},
    NombreEmergencia : {type : String, required : true},
    ApellidoEmergencia : {type : String, required : true},
    TelefonoEmergencia : {type : String, required: true},
    Desactivado : {type : Boolean, required : true}, 
    Contrasenna : {type: String, required: true},
    FotoPerfilEstudiante: { type: String },
    TipoUsuario: {type: Number, required: true}    
});

module.exports = mongoose.model('Estud', EstudianteSchema);