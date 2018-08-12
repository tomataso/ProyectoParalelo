
'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const dropProyectos = document.querySelector('#proyectoSeleccionado');
const tablaHoras = document.querySelector('#tblHoras');
let idProyecto = obtenerIdProyecto()._id;

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaHoras()});
dropProyectos.onchange = ListarHoras;

//loads------------------------------------------------------
window.onload = function(){

    ListarHoras();
};


//funciones--------------------------------------------------
function ListarHoras(){
    
    let listaDatos = obtenerListaHoras();
    let listaProyectos = obtenerListaProyectos();
    let idEstudiante = getUsuarioAutenticado()._id;
    let proyectoSeleccionado = dropProyectos.value
    let tbody = document.querySelector('#tblHoras tbody');
    tbody.innerHTML = '';
    ftnCreadorDropProyecto(dropProyectos,listaProyectos);
    ftnAsignarOpcion(listaProyectos,idProyecto);
   

    if(listaDatos == ''){
     
        swal({
            type : 'warning',
            title : 'No hay horas registradas',
            text: 'No existen horas registradas hacia ningún proyecto en el sistema',
            confirmButtonText : 'Entendido'
        });
        return;
    } else if(proyectoSeleccionado == "defecto"){
 
        swal({
            type : 'info',
            title : 'Seleccionar proyecto',
            text: 'Por favor, seleccionar el proyecto que desea visualizar las horas registradas.',
            confirmButtonText : 'Entendido'
        });
        return;
    }

    for(let i = 0; i < listaDatos.length; i++){

        if(proyectoSeleccionado != listaDatos[i]['idProyecto']){
            continue;
        }else{
                let fila = tbody.insertRow();
                let proyecto = fila.insertCell();
                let titulo = fila.insertCell();
                let descripcion = fila.insertCell();
                let horas = fila.insertCell();
                let fechaCreacion = fila.insertCell();
                let btns = fila.insertCell();

                let btnEliminar = document.createElement('a');
                btnEliminar.name = listaDatos[i]['_id'];
                btnEliminar.classList.add('fas');
                btnEliminar.classList.add('fa-trash');
                btnEliminar.addEventListener('click', function(){
                    ftnEliminarHoras(pDatos)
                });
                
                let proyectoValidado = ftnValidarProyecto(listaProyectos,listaDatos[i]['idProyecto']);
                if(proyectoValidado[0]){
                continue;
                } else {
                    proyecto.innerHTML = proyectoValidado[1];
                    titulo.innerHTML = listaDatos[i]['tituloHoras'];
                    descripcion.innerHTML = listaDatos[i]['descripcion'];
                    horas.innerHTML = listaDatos[i]['horas'];
                    fechaCreacion.innerHTML = listaDatos[i]['fechaRegistro'];
                    btns.appendChild(btnEliminar);
            }
            }
    
    }

};

function ftnEliminarHoras (){
    let horasId = this.name;
    
    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      })
      
      swalWithBootstrapButtons({
        title: 'Eliminar Horas',
        text: "¿Deseas eliminar el registro de horas?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons(
            'Eliminado!',
            'El registro de horas ha sido eliminado',
            'success'
          )

          borrarHoras(horasId);
          ListarHoras();
            
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons(
            'Cancelado!',
            'El registro de horas no ha sido eliminado',
            'error'
          )
        }
      })
};

function  ftnFiltrarListaHoras (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filas = tablaProfesores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filas.length; i++) {    
        datosFila = filas[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length-1; j++) {
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

function ftnValidarProyecto (pLista,pId){

    let control = [true,null];

    pLista.forEach(element => {
        if(element._id == pId){
            if(!element.desactivado){
                control[0] = false;
                control[1] =  element.nombre
            }
        }         
    });

    return control;
};

function ftnCreadorDropProyecto(pElemento,pListaDatos){

    for (let i = 0; i < pListaDatos.length; i++) {
        
        if(pListaDatos[i]['desactivado']){
            continue;
        } else {
            let id = pListaDatos[i]['_id'];
            let nombre = pListaDatos[i]['nombre'];
            let optionElement = document.createElement("option")
            let nodeTexto = document.createTextNode(nombre);

            optionElement.appendChild(nodeTexto);
            optionElement.setAttribute('value',id);
            pElemento.appendChild(optionElement);
        }
    }
};

function obtenerIdProyecto() {

    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
 }; 

function ftnAsignarOpcion (pSelect,pId){
    let valorOption = null;
    
    for (let i = 0; i < pSelect.length; i++) {
        valorOption = pSelect[i].value;
        if(valorOption == pId){
            pSelect.selectedIndex = i;
            break;
        } 
    }
};

