'use strict';

//variables globales------------------------------------------
const btnEnviarProyecto = document.querySelector('#btnEnviar');

const inputFechaMensaje = document.querySelector('#fechaMensaje');
const selectReceptor = document.querySelector('#UsuarioReceptor');
const inputAsunto = document.querySelector('#txtAsunto');
const inputCuerpo = document.querySelector('#txtCuerpo');



//listeners---------------------------------------------------
btnEnviarProyecto.addEventListener('click', function () {

    obtenerDatosMensaje();

});

//loads------------------------------------------------------
window.onload = function () {
    let fecha = ftnFechaHoy();
    // Servicio Lista total de usuarios

    //let listaUsuarios = listaGeneralUsuarios() ;
    let listaUsuarios = obtenerListaClientes();

    ftnCamposAnnadidos(fecha);
    ftnCreadorDropReceptor(selectReceptor, listaUsuarios);
};

//funciones-------------------------------------------------

function listaGeneralUsuarios() {

    let listaClientes = obtenerListaClientes();
    let listaProfesores = obtenerListaProfesores();
    let listaEstudiantes = obtenerListaEstud ();

    // Revisar Concatenacion.
    listaGeneralUsuarios = listaClientes.Value + listaProfesores.value + listaEstudiantes.value ;

    return listaGeneralUsuarios;
};

function obtenerDatosMensaje() {

    let infoMensaje = [];
    let bError = false;


    let gFechaMensaje = inputFechaMensaje.value;
    // Aca tiene que obtenerse el id del sesion storage
    let sEmisorId = 2 ; 
    let optionCliente = selectReceptor.options.selectedIndex;
    let sReceptorId = selectReceptor.value

    let sAsunto = inputAsunto.value;
    let sCuerpo = inputCuerpo.value;

    let bDesactivado = false;

    
    let YKeyconversacion1 = sEmisorId.concact(sReceptorId);
    let YKeyconversacion2 = sReceptorId.concact(sEmisorId);

    infoMensaje.push(gFechaMensaje, sEmisorId, sReceptorId, sAsunto, sCuerpo, bDesactivado, YKeyconversacion1, YKeyconversacion2 );

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se a enviar el mensaje',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        }).then(
            function () {
                ftnQuitarValidacionesClick();
            }
        );
        console.log('No se enviar el mensaje');
    } else {
        registrarMensaje(infoMensaje);
        swal({
            type: 'success',
            title: 'Mensaje Enviado',
            text: 'El proyecto se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
            function () {
                // Mensaje Listar Recibidos
                window.location.href = "../../html/mensaje_recibido_listar.html"
            }
        );
    }

    return bError;
};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;

    //Validación fecha de creacion del mensaje.
    if (inputFechaMensaje.value == '') {
        inputFechaMensaje.classList.add('error-input');
        bError = true;
    } else {
        inputFechaMensaje.classList.remove('error-input');
    }

    //Validación receptor del mensaje.
    if (selectReceptor.value == 'cliente') {
        selectReceptor.classList.add('error-input');
        bError = true;
    } else {
        selectReceptor.classList.remove('error-input');
    }

    //Validación nombre del Asunto del Mensaje.
    if (inputAsunto.value == '') {
        inputAsunto.classList.add('error-input');
        bError = true;
    } else {
        inputAsunto.classList.remove('error-input');
    }

    //Validación del cuerpo del Mensaje.
    if (inputCuerpo.value == '' && (regexLetrasNumeros.test(inputCuerpo.value) == false)) {
        inputCuerpo.classList.add('error-input');
        bError = true;
    } else {
        inputCuerpo.classList.remove('error-input');
    }


    return bError;
};

function ftnCreadorDropReceptor(pElemento, pListaDatos) {

    for (let i = 0; i < pListaDatos.length; i++) {

        if (pListaDatos[i]['Desactivado']) {
            continue;
        } else {
            let id = pListaDatos[i]['_id'];
            
            let nombre = pListaDatos[i]['Nombre'];
            let optionElement = document.createElement("option")
            let nodeTexto = document.createTextNode(nombre);

            optionElement.appendChild(nodeTexto);
            optionElement.setAttribute('value', id);
            pElemento.appendChild(optionElement);
        }
    }
};

function ftnCamposAnnadidos(pFecha) {

    inputFechaMensaje.value = pFecha;
    
  
};

function ftnQuitarValidacionesClick() {

    let tiposInputs = ['input', 'select', 'textarea'];
    let inputsFormulario = [];
    let inputsRequest = null;
    let inputSeleccionado = null;

    for (let i = 0; i < tiposInputs.length; i++) {

        inputsRequest = document.getElementsByTagName(tiposInputs[i]);

        if (inputsRequest == undefined || inputsRequest == '') {
            continue;
        } else {

            inputsFormulario.push(inputsRequest);

        }
    }

    for (let i = 0; i < inputsFormulario.length; i++) {
        inputSeleccionado = inputsFormulario[i]

        for (let j = 0; j < inputSeleccionado.length; j++) {


            inputSeleccionado[j].addEventListener('click', function () {
                this.classList.remove('error-input');
            });

        }
    }
};


