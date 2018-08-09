
window.onload = function(){

    let idCliente = obtenerIdCliente();
    
    llenarDatosFormulario(idCliente);
};

function obtenerIdCliente() {
    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
 }; 

function llenarDatosFormulario(idPersonaSeleccionada){ 

    let usuario = obtenerPersonaPorId(idPersonaSeleccionada);
    
        inputNombreCliente.value =  usuario.Nombre;
        inputCedulaCliente.value =  usuario.Cedula;
        inputProvincia.value =  usuario.Provincia;
        inputCanton.value =  usuario.Canton;
        inputDistrito.value =  usuario.Distrito;
        inputPrimerNombre.value =  usuario.PrimerNombre
        inputPrimerApellido.value =  usuario.PrimerApellido;
        inputTelefonoCliente.value =  usuario.Telefono;
        inputCorreo.value =  usuario.Correo;
        //inputUbicacion.value =  usuario['Ubicacion'];
        // console.log(usuario.Ubicacion);
        let cordenadasMapa = JSON.parse(usuario.Ubicacion);
        showMapForUpdate(cordenadasMapa.latitud, cordenadasMapa.longitud);
            
        // imagen.src = usuario['foto']; //es un elemento tipo img, por eso es con src y no con value
        idClientePorActualizar =  usuario._id;
};