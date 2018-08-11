'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaMensajesRecibidos = document.querySelector('#tblMensajes');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){filtrarListaMensajesEnviados()});

//loads------------------------------------------------------
window.onload = function(){
    ListarMensajesEnviados();
};


//funciones--------------------------------------------------
function ListarMensajesEnviados(){
    let listaMensajesEnviados = obtenerListaMensajesEnviados();
    // Aca va la funcion para obtener la id del usuario en sesion
    let idUsuario = obtenerIdUsuarioSesion ();
    


    let tbody = document.querySelector('#tblMensajes tbody');
    tbody.innerHTML = '';


        
    for(let i = 0; i < listaMensajesEnviados.length; i++){
        
        // ACA AGREGAR IF ( id= enviado es igual al id del usuario actual que se muestre )
    // Extraer de mensajes Usuario receptor
    if (idUsuario == listaMensajesEnviados[i]['UsuarioEmisor']) {

            let fila = tbody.insertRow();
            let celdaFecha = fila.insertCell();
            let celdaUsuarioReceptor = fila.insertCell();
            let celdaAsunto = fila.insertCell();
            

            let btns = fila.insertCell();

            //VER ESTOOOOO
            let btnVer = document.createElement('a');
            btnVer.name = listaProyecto[i]['_id'];
            btnVer.classList.add('fas');
            btnVer.classList.add('fa-eye');
            btnVer.addEventListener('click', ftnMostrarMensaje);
    
            let btnEliminar = document.createElement('a');
            btnEliminar.name = listaProyecto[i]['_id'];
            btnEliminar.classList.add('fas');
            btnEliminar.classList.add('fa-trash');
            btnEliminar.addEventListener('click', ftnEliminarMensaje);



            celdaFecha.innerHTML = listaMensajesEnviados[i]['Fecha'];
            celdaUsuarioReceptor.innerHTML = listaMensajesEnviados[i]['UsuarioReceptor'];
            celdaAsunto.innerHTML = listaMensajesEnviados[i]['Asunto'];
 

     
      
            btns.appendChild(btnVer);
            btns.appendChild(btnEliminar);
    
           
        
    }
}
};




function ftnMostrarMensaje() {
    let id = this.name;
    let usuario = getUsuarioAutenticado();

    ftnGuardarIdSeleccionado(id);

    switch (usuario.TipoUsuario) {
        case 0:
            // aca se pone el HTLM del mostrar.
            window.location.replace('../../html/proyecto/proyecto_mostrar_admin.html');
            break;

        default:
            break;
    }
};

function ftnGuardarIdSeleccionado(pId) {

    sessionStorage.setItem("idFilaSeleccionado", JSON.stringify(pId));
};

function ftnEliminarMensaje() {
    let mensaje = [this.name, true];


    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
    })

    swalWithBootstrapButtons({
        title: 'Eliminar mensaje',
        text: "¿Deseas eliminar el mensaje?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            swalWithBootstrapButtons(
                'Eliminado!',
                'Mensaje ha sido eliminado',
                'success'
            )

            // Ver esto
            desactivarMensaje(mensaje);

            ListarMensajesEnviados();

        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons(
                'Cancelado!',
                'El Mensaje no ha sido eliminado',
                'error'
            )
        }
    })
};


function filtrarListaMensajesEnviados() {

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasMensajes = tablaMensajesRecibidos.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasMensajes.length; i++) {
        datosFila = filasMensajes[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if (valor.includes(criterioBusqueda)) {
                coincide = true;
            }
        }
        if (coincide) {
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }


};