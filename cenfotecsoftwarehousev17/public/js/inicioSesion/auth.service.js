function autenticarCredenciales (correo, contrasenna){
    let listaUsuarios = getListaUsuarios();
    let valido = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i]["Correo"] == correo && listaUsuarios[i]["Contrasenna"] == contrasenna && listaUsuarios[i]["Desactivado"] != true) {
            valido = true;
            return valido;
        }
    }

    return valido;
};


function iniciarSesion(correo, contrasenna) {
    let listaUsuarios = getListaUsuarios();
    let valido = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i]["Correo"] == correo && listaUsuarios[i]["Contrasenna"] == contrasenna && listaUsuarios[i]["Desactivado"] != true) {
            setUsuarioSessionStorage(listaUsuarios[i]);
            valido = true;
            return valido;
        }
    }

    return valido;
}

function setUsuarioSessionStorage(infoUsuario) {
    console.log("Usuario Autenticado");
    console.log(infoUsuario);
    sessionStorage.setItem("UsuarioAutenticado", JSON.stringify(infoUsuario));
    console.log(JSON.parse(sessionStorage.getItem("UsuarioAutenticado")));
}

function removerCredenciales() {
    sessionStorage.clear();
}

function getUsuarioAutenticado() {
    return JSON.parse(sessionStorage.getItem("UsuarioAutenticado"));
}

function validaciónMenu (){

    let menuIndexs = [];
    let elementos = document.getElementsByTagName('a');
    let control = null;
    let rol = getUsuarioAutenticado().TipoUsuario;
    
    
    
    
    
    for (let i = 0; i < elementos.length; i++) {    
        
   
           
    }
};