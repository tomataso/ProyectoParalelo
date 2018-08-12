// 'use strict';
// const express = require('express');
// const router = express.Router();
// const estudApi = require('./estud.api');



// router.route('/registrarEstud')
//     .post(function(req, res){
//         estudApi.registrar(req, res);
// });

// router.route('/mostrarEstud')
//     .get(function(req, res){
//         estudApi.mostrar(req,res);
//     });

// // * * * inicio: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *

// router.route('/buscar_usuario_id') // **** V I S T O *****
//     .post(function(req,res){
//     estudApi.buscar_usuario_id(req, res); // buscar_usuario_por_id
// });

// router.route('/actualizar_usuario') //  ('/modificar_usuario') **** V I S T O *****
//     .post(function(req, res){
//     estudApi.actualizar(req, res); // modificar_usuario en lugar de actualizar
// });

// router.route('/borrar_usuario') // maCo: aun no he visto el video
//     .post(function(req, res){
//     estudApi.borrar(req, res);
// });
// // * * * fin: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *

// module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const estudiante = require('./estud.api');


router.route('/registrarEstudiantes')
    .post(function (req, res) {
        estudiante.registrar(req, res);
    });

router.route('/mostrarEstud')
    .get(function (req, res) {
        estudiante.listar(req, res);
    });


router.route('/buscarEstudiante')
    .get(function (req, res) {
        estudiante.buscarEstudiante(req, res);
    });

router.route('/desactivarEstudiante')
    .post(function (req, res) {
        estudiante.desactivar(req, res);
    });

router.route('/actualizarEstudiante')
    .post(function (req, res) {
        estudiante.actualizarEstudiante(req, res);
    });

module.exports = router;