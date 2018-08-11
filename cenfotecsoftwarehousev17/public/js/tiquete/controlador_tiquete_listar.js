'use srticit';
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaTiquetes = document.querySelector('#tblTiquetes');


inputBusqueda.addEventListener('keyup' , function(){FiltrarListaTiquetes()});
window.onload = function(){
    ListarTiquetes();
};


function ListarTiquetes(){
    // borrar esta linea cuando el sistema esté montado
    // sessionStorage.setItem("UsuarioAutenticado", JSON.stringify({"_id":"5b4ae5c6ac267b4a0cc3a1f1","Nombre":"maria","Cedula":"456123","Provincia":"San Jose","Distrito":"San Jose","Canton":"montes de oca","Ubicacion":"san pedro","PrimerNombre":"Juan Carlos","PrimerApellido":"González","Telefono":"88668921","Correo":"123456","Desactivado":false,"Contrasenna":"mZcE0","TipoUsuario":2,}));
    let ListaTiquete = obtenerTiquetePorId(getUsuarioAutenticado()._id);
    console.log("lista tiquetes");
    console.log(ListaTiquete);
    let tbody = document.querySelector('#tblTiquetes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < ListaTiquete.length; i++){
        
        if(ListaTiquete[i]['desactivado']){
            continue;
        } else { 
        
            let fila = tbody.insertRow();
            let celdaCodigoTiquete = fila.insertCell();
            let celdaCedulaJuridica = fila.insertCell();
            let celdaNombreProyecto = fila.insertCell();
            let celdaFecha = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let cConfiguracion = fila.insertCell();
           
    
            celdaCodigoTiquete.innerHTML = ListaTiquete[i]['codigo_tiquete'];
            celdaCedulaJuridica.innerHTML = ListaTiquete[i]['Cedula'];
            celdaNombreProyecto.innerHTML = ListaTiquete[i]['Proyecto'];
            celdaFecha.innerHTML = ListaTiquete[i]['fecha'];
            celdaEstado.innerHTML = ListaTiquete[i]['Estado'];

           // validación para mostrar el estado del usuario en la tabla. Copiar esto
           if (ListaTiquete[i]['Desactivado'] == true) {
            celdaEstado.innerHTML = "Activo";
        } else if(ListaTiquete[i]['Desactivado'] == false) {
            celdaEstado.innerHTML = "Inactivo";
        }
       

        //Íconos para editar
        let aModificar = document.createElement('a'); // * * * agregar todos estos * * *
        aModificar.classList.add('fas');
        aModificar.classList.add('fa-eye');
        aModificar.dataset._id =  ListaTiquete[i]['_id'];         

        // modificar estado del cliente. Copiar esto
        let btnModificarEstado = document.createElement('button'); 
        btnModificarEstado.dataset._id =  ListaTiquete[i]['_id']; 

        // validación para mostrar el nombre del botón según el estado de usuario. Copiar esto
        if (ListaTiquete[i]['Estado'] == "Pendiente") {
            btnModificarEstado.innerHTML = 'Finalizado';
        } else if(ListaTiquete[i]['Estado'] == "Finalizado") {
            btnModificarEstado.innerHTML = 'Pendiente';
        }
        
        // llamado para la función modificar estado del cliente. Copiar esto
        btnModificarEstado.addEventListener('click', function(){
            let estado = ListaTiquete[i]['Estado'];
            if(estado == "Pendiente" ){
                estado = "Finalizado";
            }else if(estado == "Finalizado"){
                estado = "Pendiente";
            }
            actualizarEstadoTiquete(ListaTiquete[i], estado);
            ListarTiquetes();
        });


        aModificar.addEventListener('click', function(){
            ftnMostrarTiquete(ListaTiquete[i]['_id']);
        }); 

        cConfiguracion.appendChild(btnModificarEstado);
        cConfiguracion.appendChild(aModificar);

        }
    }

};

function ftnMostrarTiquete(idTiquete){
    let id = idTiquete;
    let usuario = getUsuarioAutenticado();

    ftnGuardarIdSeleccionado(id);
    
    switch (usuario.TipoUsuario) {
        case 0:
            window.location.replace('../../html/cliente/cliente_mostrar.html');
            break;
    
        default:
            break;
    }   
};


function ftnEliminarTiquete(){
	let tiquetes = [this.name,true];
    desactivarTiquete(tiquetes);
    swal({
        type : 'success',
        title : 'Eliminación exitosa',
        text: 'El tiquetes ha sido eliminado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    ListaTiquete();
};

function  FiltrarListaTiquetes (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasTiquetes = tablaTiquetes.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasTiquetes.length; i++) {    
        datosFila = filasTiquetes[i];
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