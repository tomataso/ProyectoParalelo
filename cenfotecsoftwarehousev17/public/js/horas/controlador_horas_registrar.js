/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

//variables globales------------------------------------------
const btnGuardarHoras = document.querySelector('#btnGuardar');
const labelProyecto = document.querySelector('#proyectoSeleccionado');
const inputFechaCreacion = document.querySelector('#fechaHora');
const inputCantidadHoras = document.querySelector('#horasTrabajadas');
const inputTituloHoras = document.querySelector('#tituloHoras');
const inputDescripcion = document.querySelector('#descripcionHoras');
let idEstudiante = getUsuarioAutenticado()._id;
let idProyecto = obtenerIdProyecto();


//listeners---------------------------------------------------
btnGuardarProyecto.addEventListener('click',function(){

    obtenerDatos();
});

//loads------------------------------------------------------
window.onload = function(){
    let fecha = ftnFechaHoy();

    ftnCamposAnnadidos(fecha);
};

//funciones-------------------------------------------------

function obtenerIdProyecto() {

    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
 }; 

function obtenerDatos(){
    let infoHoras =[];
    let bError = false;

    let gFechaCreacion = inputFechaCreacion.value;
    let nHoras = inputCantidadHoras.value;    
    let sTituloHoras = inputTituloHoras.value;
    let sDescripcion = inputDescripcion.value;

    infoHoras.push(idProyecto.id,idEstudiante,gFechaCreacion,nHoras,sTituloHoras,sDescripcion);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo realizar el registro de horas',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        }).then( 
            function(){
                ftnQuitarValidacionesClick();   
            }   
        );
        console.log('No se pudo realizar el registro de horas.');
    }else{
        registrarHoras(infoHoras);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'Las horas fueron registradas adecuadamente.',
            confirmButtonText : 'Entendido'
        }).then(
            function(){
                window.location.href = "../../html/proyecto/proyecto_listar_admin.html"
            }
        );
    }

    return bError;
};

function validar(){
    let bError = false;
    let fechaCreacion = new Date(inputFechaCreacion.value);
    let fechaEntrega = new Date(inputFechaEntrega.value);

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;

    //Validación horas
    if(inputCantidadHoras.value == '' && (regexLetrasNumeros.test(inputCantidadHoras.value)==false) ){
        inputCantidadHoras.classList.add('error-input');
        bError = true;
    }else{
        inputCantidadHoras.classList.remove('error-input');
    }

      //Validación titulo horas
    if(inputTituloHoras.value == '' && (regexSoloLetras.test(inputTituloHoras.value)==false) ){
        inputTituloHoras.classList.add('error-input');
        bError = true;
    }else{
        inputTituloHoras.classList.remove('error-input');
    }

    //Validación descripcion de horas
    if(inputDescripcion.value == '' && (regexSoloLetras.test(inputDescripcion.value)==false) ){
        inputDescripcion.classList.add('error-input');
        bError = true;
    }else{
        inputDescripcion.classList.remove('error-input');
    }
  
    return bError;
};

function ftnCamposAnnadidos (pFecha){

    labelProyecto.innerHTML = idProyecto.name;
    inputFechaCreacion.value = pFecha;
};

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


