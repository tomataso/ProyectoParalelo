// 'use strict';

// let botonRegEstud = document.querySelector('#btnRegEstud');
// let botonActualizarEstudiante = document.querySelector('#btnActualizarEstudiante'); // * * * agregar este * * *
// let inputFiltro = document.querySelector('#txtFiltro');
// let botonRegEstud = document.querySelector('#btnRegEstud');
// let botonActualizarEstudiante = document.querySelector('#btnActualizarEstudiante');
// let inputFiltro = document.querySelector('#txtFiltro');
// let inputNombre = document.querySelector('#txtNombre');
// let inputApellido = document.querySelector('#txtApellido');
// let inputDireccion = document.querySelector('#txtDireccion');
// let inputTelefono = document.querySelector('#txtTelefono');
// let inputEmail = document.querySelector('#txtEmail');
// let inputCedula = document.querySelector('#txtCedula');
// let inputCarrera = document.querySelector('#txtCarrera');
// let inputMaterias = document.querySelector('#txtMateriasAprob');
// let inputEmergNombre = document.querySelector('#txtContactEmergNombre');
// let inputEmergApellido = document.querySelector('#txtContactEmergApellido');
// let inputEmergTelefono = document.querySelector('#txtContactEmergTelefono');
// let inputId = document.querySelector('#txtId');



// if (botonRegEstud != undefined) {
//     botonRegEstud.addEventListener('click', obtenerDatosEstudiante);
// }
// if (botonActualizarEstudiante != undefined) {
//     botonActualizarEstudiante.addEventListener('click', obtenerDatosEditar);
// }

// if (inputFiltro != undefined) {
//     inputFiltro.addEventListener('keyup', filtrarListaEstud);
// }


// function obtenerDatosEstudiante() {

//     let infoEstud = [];
//     let bError = false;

//     // let _id = inputId.value;
//     let sNombre = inputNombre.value;
//     let sApellido = inputApellido.value;
//     let sDireccion = inputDireccion.value;
//     let sTelefono = Number(inputTelefono.value);
//     let sEmail = inputEmail.value;
//     let sCedula = Number(inputCedula.value);
//     let sCarrera = inputCarrera.value;
//     let sMaterias = inputMaterias.value;
//     let sEmergNombre = inputEmergNombre.value;
//     let sEmergApellido = inputEmergApellido.value;
//     let sEmergTelefono = Number(inputEmergTelefono.value);


//     infoEstud.push(sNombre, sApellido, sDireccion, sTelefono, sEmail, sCedula, sCarrera, sMaterias, sEmergNombre, sEmergApellido, sEmergTelefono); //_id,

//     bError = validarEstudiante();
//     if (bError == true) {
//         swal({
//             type: 'warning',
//             title: 'No se pudo registrar el usuario',
//             text: 'Por favor revise los campos en rojo',
//             confirmButtonText: 'Entendido'
//         });
//         console.log('No se pudo registrar el usuario');
//     } else {
//         let resultado = registrarEstud(infoEstud);
//         if (resultado == true) {
//             swal({
//                 type: 'success',
//                 title: 'Registro exitoso',
//                 text: 'El usuario se registró adecuadamente',
//                 confirmButtonText: 'Entendido'
//             })
//                 .then(
//                     function () {
//                         window.location.href = "../../html/estudiante/indexTablaEstud.html"
//                     }
//                 );

//         }

//         limpiarFormularioEstudiante();
//     }

// };
// function obtenerDatosEditar() {

//     let infoEstud = [];
//     let bError = false;

//     let sNombre = inputNombre.value;
//     let sApellido = inputApellido.value;
//     let sDireccion = inputDireccion.value;
//     let sTelefono = Number(inputTelefono.value);
//     let sEmail = inputEmail.value;
//     let sCedula = Number(inputCedula.value);
//     let sCarrera = inputCarrera.value;
//     let sMaterias = inputMaterias.value;
//     let sEmergNombre = inputEmergNombre.value;
//     let sEmergApellido = inputEmergApellido.value;
//     let sEmergTelefono = Number(inputEmergTelefono.value);
//     let listaEstud = obtenerListaEstud();


//     infoEstud.push(sNombre, sApellido, sDireccion, sTelefono, sEmail, sCedula, sCarrera, sMaterias, sEmergNombre, sEmergApellido, sEmergTelefono); //_id, 

//     // bError = validarEstudiante();
//     if (bError == true) {
//         swal({
//             type: 'warning',
//             title: 'No se pudo editar el usuario',
//             // text: 'Por favor revise los campos en rojo',
//             confirmButtonText: 'Entendido'
//         });
//         console.log('No se pudo registrar el usuario');
//     } else {
//         let resultado = actualizarPersona(infoEstud);

//         if (resultado == true) {
//             swal({
//                 type: 'success',
//                 title: 'Actualización exitosa',
//                 text: 'El usuario se actualizó adecuadamente',
//                 confirmButtonText: 'Entendido'
//             })
//                 .then(
//                     function () {
//                         window.location.href = "../../html/estudiante/indexTablaEstud.html"
//                     }
//                 );

//         }
//         listaEstud = obtenerListaEstud();
//         //    imprimirListaEstud();
//         limpiarFormularioEstudiante();
//         // botonActualizarEstudiante.hidden = true;
//         // botonRegEstud.hidden = false;
//     }

// };



// function imprimirListaEstud() {
//     let listaEstud = obtenerListaEstud();

//     let tbody = document.querySelector('#tblEstud tbody');
//     tbody.innerHTML = '';

//     for (let i = 0; i < listaEstud.length; i++) {
//         let fila = tbody.insertRow();

//         let cNombre = fila.insertCell();
//         let cApellido = fila.insertCell();
//         let cTelefono = fila.insertCell();
//         let cEmail = fila.insertCell();
//         let cCedula = fila.insertCell();
//         let cConfiguracion = fila.insertCell();
//         // let cAcciones = fila.insertCell();



//         cNombre.innerHTML = listaEstud[i].Nombre;
//         cApellido.innerHTML = listaEstud[i].Apellido;
//         cTelefono.innerHTML = listaEstud[i].Telefono;
//         cEmail.innerHTML = listaEstud[i].Correo;
//         cCedula.innerHTML = listaEstud[i].Cedula;
//         // cAcciones.innerHTML = listaFiltrada[i].Acciones;

//         //Íconos para editar
//         let aModificar = document.createElement('a');
//         aModificar.classList.add('fas');
//         aModificar.classList.add('fa-eye');
//         aModificar.dataset._id = listaEstud[i]['_id'];

//         let aBorrar = document.createElement('a');
//         aBorrar.classList.add('fas');
//         aBorrar.classList.add('fa-trash');
//         aBorrar.dataset._id = listaEstud[i]['_id'];

//         aModificar.addEventListener('click', llenarDatosFormulario); //funcion buscar_por_id
//         aBorrar.addEventListener('click', borrarPersona);

//         cConfiguracion.appendChild(aModificar);
//         cConfiguracion.appendChild(aBorrar);
//     }

// };

// function filtrarListaEstud() {
//     let filtro = $("#txtFiltro").val();
//     let listaEstud = obtenerListaEstud();
//     filtro = filtro.toLowerCase();

//     let listaFiltrada = [];

//     for (let i = 0; i < listaEstud.length; i++) {
//         let nombreCompleto = listaEstud[i].Nombre.toLowerCase() + " " + listaEstud[i].Apellido.toLowerCase();

//         if (nombreCompleto.includes(filtro)) {
//             listaFiltrada.push(listaEstud[i]);
//         }
//     }

//     let tbody = document.querySelector('#tblEstud tbody');
//     tbody.innerHTML = '';

//     for (let i = 0; i < listaFiltrada.length; i++) {
//         let fila = tbody.insertRow();

//         let cNombre = fila.insertCell();
//         let cApellido = fila.insertCell();
//         let cTelefono = fila.insertCell();
//         let cEmail = fila.insertCell();
//         let cCedula = fila.insertCell();
//         // let cAcciones = fila.insertCell();


//         cNombre.innerHTML = listaFiltrada[i].Nombre;
//         cApellido.innerHTML = listaFiltrada[i].Apellido;
//         cTelefono.innerHTML = listaFiltrada[i].Telefono;
//         cEmail.innerHTML = listaFiltrada[i].Correo;
//         cCedula.innerHTML = listaFiltrada[i].Cedula;
//         // cAcciones.innerHTML = listaFiltrada[i].Acciones;
//     }

// };

// function validarEstudiante() {
//     let bError = false;

//     let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
//     let regexSoloNumeros = /^[0-9]{1,3}$/;

//     //Validación del Primer nombre 
//     if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
//         inputNombre.classList.add('error-input');
//         bError = true;
//     } else {
//         inputNombre.classList.remove('error-input');
//     }
//     //Validación del Primer Apellido 
//     if (inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value) == false)) {
//         inputApellido.classList.add('error-input');
//         bError = true;
//     } else {
//         inputApellido.classList.remove('error-input');
//     }
//     //Validación del correo
//     if (inputEmail.value == '') {
//         inputEmail.classList.add('error-input');
//         bError = true;
//     } else {
//         inputEmail.classList.remove('error-input');
//     }
//     //Validación del teléfono
//     if (inputTelefono.value == '') {
//         inputTelefono.classList.add('error-input');
//         bError = true;
//     } else {
//         inputTelefono.classList.remove('error-input');
//     }
//     //Validación del Cédula
//     if (inputCedula.value == '') {
//         inputCedula.classList.add('error-input');
//         bError = true;
//     } else {
//         inputCedula.classList.remove('error-input');
//     }

//     //Validación del Primer nombre de emergencia
//     if (inputEmergNombre.value == '' || (regexSoloLetras.test(inputEmergNombre.value) == false)) {
//         inputEmergNombre.classList.add('error-input');
//         bError = true;
//     } else {
//         inputEmergNombre.classList.remove('error-input');
//     }
//     //Validación del teléfono de emergencia
//     if (inputEmergTelefono.value == '') {
//         inputEmergTelefono.classList.add('error-input');
//         bError = true;
//     } else {
//         inputEmergTelefono.classList.remove('error-input');
//     }
//     //Validación de direccion-----------------------------
//     if (inputDireccion.value == '') {
//         inputDireccion.classList.add('error-input');
//         bError = true;
//     } else {
//         inputDireccion.classList.remove('error-input');
//     }

//     //Validación de carreras-----------------------------
//     if (inputCarrera.value == '') {
//         inputCarrera.classList.add('error-input');
//         bError = true;
//     } else {
//         inputCarrera.classList.remove('error-input');
//     }

//     //Validación de cursos-----------------------------
//     if (inputMaterias.value == '') {
//         inputMaterias.classList.add('error-input');
//         bError = true;
//     } else {
//         inputMaterias.classList.remove('error-input');
//     }

//     //Validación de apellido emergencias-----------------------------
//     if (inputEmergApellido.value == '') {
//         inputEmergApellido.classList.add('error-input');
//         bError = true;
//     } else {
//         inputEmergApellido.classList.remove('error-input');
//     }

//     return bError;
// };

// function limpiarFormularioEstudiante() {

//     // inputNombrePersonalUsuario = ''; //*** 
//     inputNombre.value = '';
//     inputApellido.value = '';
//     inputDireccion.value = '';
//     inputTelefono.value = '';
//     inputEmail.value = '';
//     inputCedula.value = '';
//     inputCarrera.value = '';
//     inputMaterias.value = '';
//     inputEmergNombre.value = '';
//     inputEmergApellido.value = '';
//     inputEmergTelefono.value = '';
//     // imagen.src = '';
// }

// // * * * inicio: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *

// function llenarDatosFormulario() { //**** V I S T O *****  es la de buscar_por_id

//     let botonRegEstud = document.querySelector('#btnRegEstud');
//     let botonActualizarEstudiante = document.querySelector('#btnActualizarEstudiante');
//     // botonRegEstud.hidden = true;
//     // botonActualizarEstudiante.hidden = false;

//     if (botonRegEstud != undefined) {
//         botonRegEstud.hidden = true;
//     }

//     // if (botonActualizarEstudiante != undefined) {
//     //     botonActualizarEstudiante.hidden = false;
//     // }

//     //Blinding    
//     let _id = this.dataset._id;// se obtiene el id del usuario seleccionado
//     let usuario = obtenerPersonaPorId(_id); // * * * funcion obtenerPersonaPorId se debe crear en el servicio, porque va a ser la petición 
//     //if usuario is not null
//     // ajax obtenerPaginaRegistro
//     // obtenerPagina ('estudiante/indexRegEstud.html');
//     window.location.href = "../../html/estudiante/indexTablaEstud.html"

//     setTimeout(function () {

//         inputNombre.value = usuario['Nombre'];
//         inputApellido.value = usuario['Apellido'];
//         inputDireccion.value = usuario['Direccion'];
//         inputTelefono.value = usuario['Telefono'];
//         inputEmail.value = usuario['Correo'];
//         inputCedula.value = usuario['Cedula'];
//         inputCarrera.value = usuario['Carrera'];
//         inputMaterias.value = usuario['Materias'];
//         inputEmergNombre.value = usuario['NombreEmergencia'];
//         inputEmergApellido.value = usuario['ApellidoEmergencia'];
//         inputEmergTelefono.value = usuario['TelefonoEmergencia'];
//         // nunca se muestra la contraseña

//         // imagen.src = usuario['foto']; //es un elemento tipo img, por eso es con src y no con value
//         inputId.value = usuario['_id'];

//     }, 100);


// };

// function borrarPersona() { // maCo: aun no he visto el video
//     let id = this.dataset._id;
//     borrarPersonaPorId(id);
//     listaEstud = obtenerListaEstud();
//     imprimirListaEstud();

// }
// // * * * fin: videos de Pabs * * * Modificar (parte 1, 2, 3), nodejs * * *


'use strict';

const btnEditar = document.querySelector('#btnEditar');
const btnGuardar = document.querySelector('#btnGuardar');

const inputCedula = document.querySelector('#txtCedula');
const inputNombre = document.querySelector('#txtNombre');
const inputApellido = document.querySelector('#txtApellido');
const inputApellido2 = document.querySelector('#txtApellido2');
const inputProvincia = document.querySelector('#txtProvinciaEstudiante');
const inputCanton = document.querySelector('#txtCantonEstudiante');
const inputDistrito = document.querySelector('#txtDistritoEstudiante');
const inputDireccionExacta = document.querySelector('#txtDireccion');
const inputTelefono = document.querySelector('#txtTelefono');
const inputCorreo = document.querySelector('#txtEmail');
const inputCarrera = document.querySelector('#txtCarrera');
const inputMaterias = document.querySelector('#txtMateriasAprob');
const inputNombreContacto = document.querySelector('#txtContactEmergNombre');
const inputApellidoContacto = document.querySelector('#txtContactEmergApellido');
const inputTelefonoContacto = document.querySelector('#txtContactEmergTelefono');
//tengo duda con estos:
const inputContrasenna = document.querySelector('#txtContrasenna');
// const inputTipo = document.querySelector('#txtTipo');

let EstudianteSeleccionado = null;

btnEditarEstudiante.addEventListener('click',function(){

    btnEditarEstudiante.classList.add('modificar');
    btnGuardarEstudiante.classList.remove('modificar');

    ftnHabilitarCampos();

    swal({
        type : 'success',
        title : 'Campos Habilitados',
        text: 'Modificar datos y dar click en botón \"Guardar\"',
        confirmButtonText : 'Entendido'
    });
    
});

btnGuardarEstudiante.addEventListener('click',function(){
    
    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      })
      
      swalWithBootstrapButtons({
        title: 'Modificar Estudiante',
        text: "¿Desea guardar los cambios realizados?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí, guardar!', 
        cancelButtonText: '¡No, cancelar!',
        reverseButtons: true

      }).then((result) => {

        if (result.value) {   

            obtenerDatosEstudiante();
            
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons(
            '¡Cancelado!',
            '¡Los cambios no fueron guardados!',
            'error'
          )
                  // OJO ----------------------------------------------------------------------------
                  ftnMostrarEstudiante(estudianteSeleccionado._id,obtenerListaEstudiantes());

                  ftnDeshabilitarCampos();
                  ftnQuitarValidaciones();
                  btnEditarEstudiante.classList.remove('modificar');
                  btnGuardarEstudiante.classList.add('modificar');
        }

      })    
});

// // Ready
// btnVerGradoAcademico.addEventListener('click',function(){

//     window.location.replace('../../html/profesor/profesor_asignar_titulos.html');
    
// });

// // Ready
// btnVerCursosImpartidos.addEventListener('click',function(){

//     window.location.replace('../../html/profesor/profesor_asignar_cursosI.html');
    
// });


window.onload = function(){

    let idEstudiante = obtenerIdEstudiante();
    let estudiantes = obtenerListaEstudiantes();

    ftnMostrarEstudiante(idEstudiante,estudiantes);
    ftnDeshabilitarCampos();
};



function ftnMostrarEstudiante (idEstudiante,estudiantes){

    let estudianteftnSeleccionado = null;

    estudiantes.forEach(element => {
        if (element._id == idEstudiante) {
            estudianteftnSeleccionado = element;
        }
    });

    estudianteSeleccionado = estudianteftnSeleccionado;


    inputCedula.value = estudianteftnSeleccionado.Cedula;   
    inputNombre.value = estudianteftnSeleccionado.Nombre;
    inputApellido.value = estudianteftnSeleccionado.Apellido;
    inputApellido2.value = estudianteftnSeleccionado.Apellido2;
    inputProvincia.value = estudianteftnSeleccionado.Provincia;
    inputCanton.value = estudianteftnSeleccionado.Canton;
    inputDistrito.value = estudianteftnSeleccionado.Distrito;
    inputDireccionExacta.value = estudianteftnSeleccionado.DireccionExacta;
    inputTelefono.value = estudianteftnSeleccionado.Telefono;
    inputCorreo.value = estudianteftnSeleccionado.Correo;

    inputCarrera.value = estudianteftnSeleccionado.Carrera;
    inputMaterias.value = estudianteftnSeleccionado.Materias;
    inputNombreContacto.value = estudianteftnSeleccionado.Contacto;
    inputApellidoContacto.value = estudianteftnSeleccionado.ApellidoContacto;
    inputTelefonoContacto.value = estudianteftnSeleccionado.TelefonoContacto;

    inputContrasennaEstudiante.value = estudianteftnSeleccionado.Contrasenna;


   
};



function ftnDeshabilitarCampos (){

    inputCedula.setAttribute('disabled',true);
    inputNombre.setAttribute('disabled',true);
    inputApellido.setAttribute('disabled',true);
    inputApellido2.setAttribute('disabled',true);
    inputProvincia.setAttribute('disabled',true);
    inputCanton.setAttribute('disabled',true);
    inputDistrito.setAttribute('disabled',true);
    inputDireccionExacta.setAttribute('disabled',true);
    inputTelefono.setAttribute('disabled',true);
    inputCorreo.setAttribute('disabled',true);

    inputCarrera.setAttribute('disabled',true);
    inputMaterias.setAttribute('disabled',true);
    inputNombreContacto.setAttribute('disabled',true);
    inputApellidoContacto.setAttribute('disabled',true);
    inputTelefonoContacto.setAttribute('disabled',true);

    inputContrasennaEstudiante.setAttribute('disabled',true);  

};

function obteneridEstudiante() {

    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
 }; 


function obtenerDatosEstudiante() {

    let infoEstudiante = [];
    let bError = false;

    let  idEstudiante = estudianteSeleccionado._id;
    
    let sCedula = inputCedula.value;
    let sNombre = inputNombre.value;
    let sApellido = inputApellido.value;
    let sApellido2 = inputApellido2.value;
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sDireccionExacta = inputDireccionExacta.value;
    let sTelefono = inputTelefono.value;
    let sCorreo = inputCorreo.value;
    let sCarrera = inputCarrera.value;
    let sMaterias = inputMaterias.value;
    let sNombreContacto = inputNombreContacto.value;
    let sApellidoContacto = inputApellidoContacto.value;
    let sTelefonoContacto = inputTelefonoContacto.value;

    let sContrasenna = inputContrasennaEstudiante.value;


    infoEstudiante.push(idEstudiante, sCedula, sNombre, sApellido, sApellido2, sProvincia, sCanton, sDistrito, sDireccionExacta, sTelefono, sCorreo, sCarrera, sMaterias, sNombreContacto, sApellidoContacto, sTelefonoContacto, sContrasenna );

    bError = validarEstudiante();
    if(bError == true){
        swal({
            type : 'warning',
            title : '¡Datos erróneos!',
            text: '¡Por favor revise los campos en rojo!',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                ftnQuitarValidacionesClick();
            }
        );
        console.log('No se pudo modificar el estudiante');
    }else{

        actualizarEstudiante(infoEstudiante);


        ftnDeshabilitarCampos();

        btnEditarEstudiante.classList.remove('modificar');
        btnGuardarEstudiante.classList.add('modificar');
        ftnMostrarEstudiante();
        swal({
            type : 'success',
            title : 'Modificación exitosa',
            text: 'El estudiante se modificó adecuadamente',
            confirmButtonText : 'Entendido'
        });
    }
    
};


function ftnHabilitarCampos (){

    inputCedula.removeAttribute('disabled');
    inputNombre.removeAttribute('disabled');
    inputApellido.removeAttribute('disabled');
    inputApellido2.removeAttribute('disabled');
    inputProvincia.removeAttribute('disabled');
    inputCanton.removeAttribute('disabled');
    inputDistrito.removeAttribute('disabled');
    inputDireccionExacta.removeAttribute('disabled');
    inputTelefono.removeAttribute('disabled');
    inputCorreo.removeAttribute('disabled');

    inputCarrera.removeAttribute('disabled');
    inputMaterias.removeAttribute('disabled');
    inputNombreContacto.removeAttribute('disabled');
    inputApellidoContacto.removeAttribute('disabled');
    inputTelefonoContacto.removeAttribute('disabled');

    inputContrasennaEstudiante.removeAttribute('disabled'); 
   
};



function validarEstudiante() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Nombre 
    if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
        inputNombre.classList.add('error-input');
        bError = true;
    } else {
        inputNombre.classList.remove('error-input');
    }

    //Validación del Apellido 
    if (inputApellido.value == '' || (regexSoloLetras.test(inputApellido.value) == false)) {
        inputApellido.classList.add('error-input');
        bError = true;
    } else {
        inputApellido.classList.remove('error-input');
    }

    //Validación de la Cedula 
    if (inputCedula.value == '') {
        inputCedula.classList.add('error-input');
        bError = true;
    } else {
        inputCedula.classList.remove('error-input');
    }

    //Validación de la Telefono 
    if (inputTelefono.value == '') {
        inputTelefono.classList.add('error-input');
        bError = true;
    } else {
        inputTelefono.classList.remove('error-input');
    }

    //Validación de la Correo 
    if (inputCorreo.value == '') {
        inputCorreo.classList.add('error-input');
        bError = true;
    } else {
        inputCorreo.classList.remove('error-input');
    }

    //Validación de la Provincia
    if (inputProvincia.value == '') {
        inputProvincia.classList.add('error-input');
        bError = true;
    } else {
        inputProvincia.classList.remove('error-input');
    }

    //Validación de la Canton
    if (inputCanton.value == '') {
        inputCanton.classList.add('error-input');
        bError = true;
    } else {
        inputCanton.classList.remove('error-input');
    }

    //Validación de la Distrito
    if (inputDistrito.value == '') {
        inputDistrito.classList.add('error-input');
        bError = true;
    } else {
        inputDistrito.classList.remove('error-input');
    }

    //Validación de la Direccion Exacta
    if (inputDireccionExacta.value == '') {
        inputDireccionExacta.classList.add('error-input');
        bError = true;
    } else {
        inputDireccionExacta.classList.remove('error-input');
    }


    return bError;
}




function ftnQuitarValidacionesClick (){

    let tiposInputs = ['input','select','textarea'];
    let inputsFormulario = [];
    let inputsRequest = null;
    let inputSeleccionado = null;

    for (let i = 0; i < tiposInputs.length; i++) {    
        
        inputsRequest = document.getElementsByTagName(tiposInputs[i]);

        if(inputsRequest == undefined || inputsRequest == ''){
            continue;
        } else {
            
            inputsFormulario.push(inputsRequest);
            
        }  
    }

    for (let i = 0; i < inputsFormulario.length; i++) {
        inputSeleccionado = inputsFormulario[i]

        for (let j = 0; j < inputSeleccionado.length; j++) {
            
            inputSeleccionado[j].addEventListener('click', function(){
                this.classList.remove('error-input');
            });   
            
        }        
    }
};

function ftnQuitarValidaciones (){

    let tiposInputs = ['input','select','textarea'];
    let inputsFormulario = [];
    let inputsRequest = null;
    let inputSeleccionado = null;

    for (let i = 0; i < tiposInputs.length; i++) {    
        
        inputsRequest = document.getElementsByTagName(tiposInputs[i]);

        if(inputsRequest == undefined || inputsRequest == ''){
            continue;
        } else {
            
            inputsFormulario.push(inputsRequest);
            
        }  
    }

    for (let i = 0; i < inputsFormulario.length; i++) {
        inputSeleccionado = inputsFormulario[i]

        for (let j = 0; j < inputSeleccionado.length; j++) {
            
            inputSeleccionado[j].classList.remove('error-input');
            
        }        
    }
};



