/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';

//variables globales--------------------------------


//funciones--------------------------------------
function registrarHoras(pHoras){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarHoras',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            idProyecto : pHoras[0],
            idEstudiante : pHoras[1],
            fechaRegistro : pHoras[2],
            horas : pHoras[3],
            descripcion : pHoras[4]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

function ftnFechaHoy (){

        let fecha = new Date();
        let dd = fecha.getDate();
        let mm = fecha.getMonth()+1;
        let yyyy = fecha.getFullYear();
        let textoFecha = null;
    
        if(dd<10) {
            dd = '0'+dd
        } 
    
        if(mm<10) {
        mm = '0'+mm
        } 
    
        textoFecha = yyyy + "-" + mm + "-" + dd;
      
        return textoFecha;
}



