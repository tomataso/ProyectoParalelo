
'use strict';

function obtenerListaProfesoresAsignados(){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarProfesoresAsignados',
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
    
    return lista;
}

function obtenerListaProfesores (){
    let lista = [];

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
    
    return lista;
}

function asignarProfesor(pProfesor){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/asignarProfesor',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            idProyecto : pProfesor[0],
            idProfesor : pProfesor[1],
            cedulaProfesor : pProfesor[2],
            nombreProfesor : pProfesor[3],
            rolProfesor : pProfesor[4],
            desactivado : pProfesor[5]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

function desasignarProfesor(pProfesor){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/borrarProfesorAsignado',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : pProfesor
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

