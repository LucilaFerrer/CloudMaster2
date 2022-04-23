'use strict';

const inputCatalogo = document.querySelector('#txt-catalogo');
const botonGuardar = document.querySelector('#btn-guardar');

const inputModificar = document.querySelector('#cambiar-nombre');
const botonModificar = document.querySelector('#modificar-btn');

const validar = () => {
    let error = false;

    if (inputCatalogo.value == '') {
        error = true;
        document.querySelector('.catalogo').classList.add('input-error');
    } else {
        document.querySelector('.catalogo').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Catálogo no registrado',
            'text': 'Por favor intente de nuevo'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Catálogo registrado',
            'text': 'Nos vemos pronto'
        });
    }
}

const modificar = () => {
    let error = false;

    if (inputModificar.value == '') {
        error = true;
        document.querySelector('.modificar').classList.add('input-error');
    } else {
        document.querySelector('.modificar').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Catálogo no modificado',
            'text': 'Por favor intente de nuevo'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Catálogo modificado con éxito',
            'text': 'Nos vemos pronto'
        });
    }
}

botonGuardar.addEventListener('click', validar);

botonModificar.addEventListener('click', modificar);