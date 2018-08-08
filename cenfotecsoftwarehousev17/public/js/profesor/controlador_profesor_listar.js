'use strict';
let inputBuscarProfesor;
let tablaProfesores;

//loads------------------------------------------------------
window.onload = function(){
    initProfesor();
    ListarProfesores();
};

function initProfesor() {
    inputBuscarProfesor = document.querySelector('#inputBuscarProfesor');
    tablaProfesores = document.querySelector('#tblProfesores');

    inputBuscarProfesor.addEventListener('keyup', function () { filtrarListaProfesores(); });
}

//funciones--------------------------------------------------
function ListarProfesores(){
    let listaProfesor = obtenerListaProfesores();

    let tbody = document.querySelector('#tblProfesores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaProfesor.length; i++){
        
        if(listaProfesor[i]['Desactivado']){
            continue;
        } else{

            let celdaNombre = fila.insertCell();        
            let fila = tbody.insertRow();
            let celdaApellido = fila.insertCell();
            let celdaCedula = fila.insertCell();
            let celdaTelefono = fila.insertCell();
            let celdaCorreo = fila.insertCell();

            let celdaTipoProfesor =  fila.insertCell();
            celdaCedula.innerHTML = listaProfesor[i]['Cedula'];
            celdaNombre.innerHTML = listaProfesor[i]['Nombre'];
            celdaApellido.innerHTML = listaProfesor[i]['Apellido'];

            celdaTelefono.innerHTML = listaProfesor[i]['Telefono'];
            celdaCorreo.innerHTML = listaProfesor[i]['Correo'];

            celdaTipoProfesor.innerHTML = listaProfesor[i]['TipoProfesor'];

            let btnVer = document.createElement('a');
            btnVer.name = listaProyecto[i]['_id'];
            btnVer.classList.add('fas');
            btnVer.classList.add('fa-eye');
            btnVer.addEventListener('click', ftnMostrarProfesor);

            btns.appendChild(btnVer);

        }
    }

};

// -----------------------------------------
function ftnMostrarProfesor(){
    let id = this.name;
    
    // en cual servicio esta esta funcion
    let usuario = getUsuarioAutenticado();

    ftnGuardarIdSeleccionado(id);
    
    switch (usuario.TipoUsuario) {
        case 0:
            window.location.replace('../../html/profesor/profesor_mostrar.html');
            break;
    
        default:
            break;
    }   
};

function ftnGuardarIdSeleccionado (pId){

    sessionStorage.setItem("idFilaSeleccionado", JSON.stringify(pId));
};
//-------------------------------------------

function filtrarListaProfesores(){
    let criterioBusqueda = inputBuscarProfesor.value.toUpperCase();
    let filasProfesores = tablaProfesores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasProfesores.length; i++) {    
        datosFila = filasProfesores[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }
};
