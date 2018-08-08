'use strict';

const botonRegistrar = document.querySelector('#btnGuardar');
botonRegistrar.addEventListener('click', obtenerDatos);

const btnEditarParametros = document.querySelector('#btnEditar');
const btnGuardarParametros = document.querySelector('#btnGuardar');

const inputPeriodo = document.querySelector('#Periodo');
const inputMaxHorasxCuatri = document.querySelector('#MaxHorasxCuatri');
const inputPorcentajeBecaxHoraT = document.querySelector('#PorcentajeBecaxHoraTrabajada');

let parametroSeleccionado = null;

btnEditarParametros.addEventListener('click',function(){

    btnEditarParametros.classList.add('modificar');
    btnGuardarParametros.classList.remove('modificar');

    ftnHabilitarCampos();

    swal({
        type : 'success',
        title : 'Campos Habilitados',
        text: 'Modificar datos y dar click en botón \"Guardar\"',
        confirmButtonText : 'Entendido'
    });
    
});

btnGuardarParametros.addEventListener('click',function(){
    
    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      })
      
      swalWithBootstrapButtons({
        title: 'Modificar Profesor',
        text: "¿Deseas guardar los cambios realizados?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, guardar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true

      }).then((result) => {

        if (result.value) {   

            obtenerDatosParametros();
            
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons(
            'Cancelado!',
            'Los cambios no fueron guardados',
            'error'
          )
        }
        // OJO ---------------------------------------------------------------------------- obtenerListaParametros
        ftnMostrarParametro(parametroSeleccionado._id,obtenerListaParametros());

            ftnDeshabilitarCampos();
            btnEditarParametros.classList.remove('modificar');
            btnGuardarParametros.classList.add('modificar');
      })    
});




window.onload = function(){
// preguntar si puedo quemar la ID por que es un solo parametro.
    let idParametro = obteneridParametro();
    let parametros = obtenerListaParametros();

    ftnMostrarParametro(idParametro,parametros);
    ftnDeshabilitarCampos();
};

//funciones-------------------------------------------------

function ftnMostrarParametro (idParametro,parametros){

    let parametroFtnSeleccionado = null;

    parametros.forEach(element => {
        if (element._id == idParametro) {
            parametroFtnSeleccionado = element;
        }
    });

    parametroSeleccionado = parametroFtnSeleccionado;

    inputPeriodo.value = parametroFtnSeleccionado.Periodo;
    inputMaxHorasxCuatri.value = parametroFtnSeleccionado.MaxHorasxCuatri;
    inputPorcentajeBecaxHoraT.value = parametroFtnSeleccionado.PorcentajeBecaxHoraT;



   
};



function ftnDeshabilitarCampos (){

    inputPeriodo.setAttribute('disabled',true);
    inputMaxHorasxCuatri.setAttribute('disabled',true);
    inputPorcentajeBecaxHoraT.setAttribute('disabled',true);

};

function obteneridParametro() {

    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
 }; 





function obtenerDatosParametros() {

    let infoParametro = [];
    let bError = false;

    let  idParametro = parametroSeleccionado._id;

    let sPeriodo = inputPeriodo.value;
    let sMaxHorasxCuatri = inputMaxHorasxCuatri.value;
    let sPorcentajeBecaxHoraT = inputPorcentajeBecaxHoraT.value;


    infoParametro.push(idParametro, sPeriodo, sMaxHorasxCuatri, sPorcentajeBecaxHoraT);

    bError = validarParametros();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'Datos erróneos!',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo modificar el parametro');
    }else{

        actualizarParametroG(infoParametro);


        ftnDeshabilitarCampos();

        btnEditarParametros.classList.remove('modificar');
        btnGuardarParametros.classList.add('modificar');
        swal({
            type : 'success',
            title : 'Modificación exitosa',
            text: 'Se modificó el parametro adecuadamente',
            confirmButtonText : 'Entendido'
        });
    }
    
};




function ftnHabilitarCampos (){

    inputPeriodo.removeAttribute('disabled');
    inputMaxHorasxCuatri.removeAttribute('disabled');
    inputPorcentajeBecaxHoraT.removeAttribute('disabled');

   
};



function validarParametros() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del Periodo
    if (inputPeriodo.value == '' || (regexSoloLetras.test(inputPeriodo.value) == false)) {
        inputPeriodo.classList.add('error-input');
        bError = true;
    } else {
        inputPeriodo.classList.remove('error-input');
    }

    //Validación del Maximo de Horas por Cuatrimestre.
    if (inputMaxHorasxCuatri.value == '') {
        inputMaxHorasxCuatri.classList.add('error-input');
        bError = true;
    } else {
        inputMaxHorasxCuatri.classList.remove('error-input');
    }

    //Validación del Porcentaje de Beca por Hora.
    if (inputPorcentajeBecaxHoraT.value == '') {
        inputPorcentajeBecaxHoraT.classList.add('error-input');
        bError = true;
    } else {
        inputPorcentajeBecaxHoraT.classList.remove('error-input');
    }
    
  
    return bError;
}









