'use strict';
const inputNombre = document.querySelector('#nombre');
const inputPrimerApellido = document.querySelector('#txt-primerApellido');
const inputSegundoApellido = document.querySelector('#txt-SegundoApellido');
const inputCorreo = document.querySelector('#txt-correo');
const inputCedula = document.querySelector('#txt-cedula');
const inputUbicacion = document.querySelector('#txt-ubicacion');
const inputFecha = document.querySelector('#txt-fecha');
const inputContrasena = document.querySelector('#txt-contrasena');
const inputContrasena2 = document.querySelector('#txt-contrasena2');

const inputGuardar = document.querySelector('#btn-guardar');

const validar = () => {
    let error = false;

    if (nombre.value == '') {
        error = true;
        document.querySelector('.nombre').classList.add('inputError');
    } else {
        document.querySelector('.nombre').classList.remove('inputError');
    }

    if (inputPrimerApellido.value == '') {
        error = true;
        document.querySelector('.primerApellido').classList.add('inputError');
    } else {
        document.querySelector('.primerApellido').classList.remove('inputError');
    }

    if (inputSegundoApellido.value == '') {
        error = true;
        document.querySelector('.segundoApellido').classList.add('inputError');
    } else {
        document.querySelector('.segundoApellido').classList.remove('inputError');
    }

    if (inputCorreo.value == '') {
        error = true;
        document.querySelector('.correo').classList.add('inputError');
    } else {
        document.querySelector('.correo').classList.remove('inputError');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha registrado el perfil',
            'text': 'Por favor revise que todo fue agregado correctamente',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': '¡Excelente!',
            'text': 'Su perfil se ha creado correctamente',
            'confirmButtonText': 'Seguir'
        });
    }
}

const validar2 = () => {
    let error = false;

    if (inputCedula.value == '') {
        error = true;
        document.querySelector('.cedula').classList.add('inputError');
    } else {
        document.querySelector('.cedula').classList.remove('inputError');
    }
    if (inputUbicacion.value == '') {
        error = true;
        document.querySelector('.ubicacion').classList.add('inputError');
    } else {
        document.querySelector('.ubicacion').classList.remove('inputError');
    }
    if (inputFecha.value == '') {
        error = true;
        document.querySelector('.fecha').classList.add('inputError');
    } else {
        document.querySelector('.fecha').classList.remove('inputError');
    }
    if (inputContrasena.value == '') {
        error = true;
        document.querySelector('.contrasena').classList.add('inputError');
    } else {
        document.querySelector('.contrasena').classList.remove('inputError');
    }
    if (inputContrasena2.value == '') {
        error = true;
        document.querySelector('.contrasena2').classList.add('inputError');
    } else {
        document.querySelector('.contrasena2').classList.remove('inputError');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha registrado el perfil',
            'text': 'Por favor revise que todo fue agregado correctamente',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': '¡Excelente!',
            'text': 'Su perfil se ha creado correctamente',
            'confirmButtonText': 'Seguir'
        });
    }
}

inputGuardar.addEventListener('click', validar);
inputGuardar.addEventListener('click', validar2);