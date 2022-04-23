'use strict'

const inputNombreLibro = document.querySelector('#txt-libro');
const inputNombreActor = document.querySelector('#txt-actor');
const selectCategoria = document.querySelector('#categoria');
const botonIngresar = document.querySelector('#btn-agregar');
const btnEliminar = document.querySelector('#eliminar');


const validar = () => {
    let error = false;


    if (inputNombreLibro.value == '') {
        error = true;
        document.querySelector('.libro').classList.add('input-error');

    } else {

        document.querySelector('.libro').classList.remove('input-error');

    }


    if (inputNombreActor.value == '') {
        error = true;
        document.querySelector('.actor').classList.add('input-error');
    } else {
        document.querySelector('.actor').classList.remove('input-error');

    }

    if (selectCategoria.value == '') {
        error = true;
        document.querySelector('.categoria').classList.add('input-error');
    } else {
        document.querySelector('.categoria').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha podido agregar el libro',
            'text': 'Por favor revise que todo fue agregado correctamente',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Libro agregado con éxcito',
            'text': 'Gracias por confiar en nosotros',
            'confirmButtonText': 'Listo'
        });
    }
}

function eliminar1() {
    var libro = document.getElementById('libro1');
    libro.parentNode.removeChild(libro);
    return false;
}

function eliminar2() {
    var libro = document.getElementById('libro2');
    libro.parentNode.removeChild(libro);
    return false;
}

function eliminar3() {
    var libro = document.getElementById('libro3');
    libro.parentNode.removeChild(libro);
    return false;
}

botonIngresar.addEventListener('click', validar);