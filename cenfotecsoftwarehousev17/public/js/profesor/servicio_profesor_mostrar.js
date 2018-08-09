'use strict';


function obtenerListaProfesores(){
    let listaProfesores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarProfesores',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaProfesores;
}

// cambiar esto
function actualizarProfesorG(pProyecto){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/actualizarProfesor',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id : pProyecto[0],
            Nombre : pProyecto[1],
            Apellido : pProyecto[2],
            Cedula : pProyecto[3],
            Telefono : pProyecto[4],
            Correo : pProyecto[5],

            Provincia : pProyecto[6],
            Canton : pProyecto[7],
            Distrito : pProyecto[8],
            DireccionExacta : pProyecto[9],

            Aexperiencia : pProyecto[10],
            TipoUsuario : pProyecto[11],
            Contrasenna : pProyecto[12]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};




