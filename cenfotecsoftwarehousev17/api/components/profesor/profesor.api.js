'use strict';

const ProfesorModel = require('./profesor.model');

module.exports.registrar = function(req, res){

    let nuevoProfesor = new ProfesorModel({

        Nombre : req.body.Nombre,
        Apellido: req.body.Apellido,
        Cedula : req.body.Cedula,
        Telefono : req.body.Telefono,
        Correo : req.body.Correo,

        Provincia: req.body.Provincia,
        Canton :  req.body.Canton,
        Distrito :  req.body.Distrito,
        DireccionExacta : req.body.DireccionExacta,

       
        Aexperiencia :  req.body.Aexperiencia,
       

        TipoProfesor : req.body.TipoProfesor,
        Desactivado : req.body.Desactivado,
        Contrasenna : req.body.Contrasenna,
        TipoUsuario: 1,

        FotoPerfilProfesor: req.body.FotoPerfilProfesor,

        
    });

    nuevoProfesor.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar al profesor, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El profesor se registró con éxito'});
        }

    });

};

module.exports.listar = function(req, res){
    ProfesorModel.find().then(
        function(profesores){
            res.send(profesores);
        });
};

module.exports.desactivar = function(req, res){
    
    ProfesorModel.update(
        {_id: req.body._id}, 
        {
            Desactivado : req.body.Desactivado
        },
        function(error){
            if(error){
                res.json({success : false, msg : 'No se pudo eliminar el profesor, ocurrió el siguiente error' + error});
            }else{
                res.json({success : true, msg : 'Se eliminó el profesor con éxito'});
            }
        }
    )
};

module.exports.buscarProfesor = function(req, res){
    ProfesorModel.find(req.body.Nombre).then(
        function(profesor){
            res.send(profesor);
        });
};


module.exports.agregarGradoAcademicoProfesor = function (req, res) {

    ProfesorModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'GAcademico':
                {
                    codigoTituloAcademico :  req.body.codigoTituloAcademico,
                    nombreTituloAcademico: req.body.nombreTituloAcademico

                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo asociar el grado academico al profesor, ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El grado academico se registró con éxito en el profesor.' });
            }
        }
    )
};

module.exports.agregarCursosImpartidosProfesor = function (req, res) {

    ProfesorModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'CImpartidos':
                {
                    codigoCursoI :  req.body.codigoCursoI,
                    nombreCursoI: req.body.nombreCursoI

                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo asociar el curso al profesor, ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El curso impartido se registró con éxito en el profesor.' });
            }
        }
    )
};

module.exports.actualizarProfesor = function (req, res) {
    ProfesorModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
            }
        });
};

