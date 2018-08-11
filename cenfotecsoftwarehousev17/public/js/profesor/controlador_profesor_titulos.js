
'use srticit';

let inputBusqueda;
let tablaTitulos;


ListarTitulos();

function ProfesorAsignarTituloInit() {
    tablaTitulos = document.querySelector('#tblTitulos');
    inputBusqueda = document.querySelector('#inputBusqueda');

    inputBusqueda.addEventListener('keyup', function () { ftnFiltrarListaTitulos() });


}



function ListarTitulos() {

    let listaDatosTitulo = obtenerListaTitulos();
    let UsuarioActual = obtenerIdProfesor();

    let tbody = document.querySelector('#tblTitulos tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaDatosTitulo.length; i++) {

        let fila = tbody.insertRow();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let btns = fila.insertCell();

        let btnAsignar = document.createElement('a');
        btnAsignar.name = listaDatosTitulo[i]['_id'];
        btnAsignar.classList.add('fas');
        btnAsignar.classList.add('fa-plus-square');
        btnAsignar.addEventListener('click', function () {

            let pDatosTitulo = [listaDatosTitulo[i]['codigoTituloAcademico'], listaDatosTitulo[i]['nombreTituloAcademico'], listaDatosTitulo[i]['_id'] ];

            obtenerDatosProfesor(pDatosTitulo);

        });

        celdaCedula.innerHTML = listaDatosTitulo[i]['codigoTituloAcademico'];
        celdaNombre.innerHTML = listaDatosTitulo[i]['nombreTituloAcademico'];

        btns.appendChild(btnAsignar);
    }

};



function obtenerIdProfesor() {

    return JSON.parse(sessionStorage.getItem("idFilaSeleccionado"));
};




// para agregar 
function obtenerDatosProfesor(pDatosTitulo) {

    let infoAsignarTituloP = [];

    let idmlabProfesor = obtenerIdProfesor();
    let ncodigoTitulo = pDatosTitulo[0];
    let nTitulo = pDatosTitulo[1];

    infoAsignarTituloP.push(idmlabProfesor, ncodigoTitulo, nTitulo);
    agregarTitulo(infoAsignarTituloP);


    swal({
        type: 'success',
        title: 'Asignación exitosa',
        text: 'El titulo se a agregado adecuadamente',
        confirmButtonText: 'Entendido'
    });


};

function ftnFiltrarListaTitulos() {

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasTitulos = tablaTitulos.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasTitulos.length; i++) {
        datosFila = filasTitulos[i];
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
