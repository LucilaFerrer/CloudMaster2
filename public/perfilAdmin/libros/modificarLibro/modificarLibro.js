'use strict'

const inputNombreLibro = document.querySelector('#txt-nombreLibro');
const inputNombreActor = document.querySelector('#txt-nombreAutor');
const inputPrecio = document.querySelector('#txt-precio');
const botonIngresar = document.querySelector('#btn-modificar');


const validar = () => {
    let error = false;

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha podido modificar el libro',
            'text': 'Por favor revise bien los campos',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Modificación exitosa',
            'text': 'Gracias por confiar en nosotros',
            'confirmButtonText': 'Listo'
        });
    }
}


botonIngresar.addEventListener('click', validar);