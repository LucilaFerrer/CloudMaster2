'use strict';
const botonIngresar = document.querySelector('#btn-ingresar');
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');

//1
const validar = () => {
    let error = false;

    //Condicion que valida Contraseña
    if (inputCorreo.value == '') {
        error = true;
        document.querySelector('.correo').classList.add('input-error');

    } else {

        document.querySelector('.correo').classList.remove('input-error');

    }

    //Condicion que valida la contraseña
    if (inputContrasenna.value == '') {
        error = true;
        document.querySelector('.contrasenna').classList.add('input-error');
    } else {
        document.querySelector('.contrasenna').classList.remove('input-error');

    }

    //Condicion que valida si hay error
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha podido iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        validarCredenciales(inputCorreo.value, inputContrasenna.value);
    }

};

const validarCredenciales = (correo, contrasenna) => {
    let ingresar = false;
    let rol = 0;
    listaclientes.forEach(objcliente => {
        if (objcliente.correo == correo && objcliente.contrasenna == contrasenna) {
            rol = objcliente.rol
            localStorage.setItem('usarioConectado', JSON.stringify(objcliente));
            ingresar = true

        }

        if (ingresar == false) {
            Swal.fire({
                'icon': 'warning',
                'title': 'No se ha podido iniciar sesión',
                'text': 'Correo o Contraseña incorrectas'
            });
        } else {
            validarRol(rol);
        }
    });
}

let listaclientes = [{
    'nombre': 'Cliente',
    'correo': 'cliente@gmail.com',
    'contrasenna': 'cliente',
    'edad': 18,
    'rol': 1,
}, {
    'nombre': 'Administrador',
    'correo': 'admin@gmail.com',
    'contrasenna': 'admin',
    'edad': 41,
    'rol': 2,
}];


const obtenerNombreRol = (idRol) => {
    let nombreRol = 0;

    switch (idRol) {
        case 1:
            nombreRol = 'Cliente';
            break;
        case 2:
            nombreRol = 'Administrador'
            break;
    }
    return nombreRol;
}



const validarRol = (nombreRol) => {
    switch (nombreRol) {
        case 1:
            window.location.href = '../perfilCliente/perfilCliente.html';
            break;
        case 2:
            window.location.href = '../perfilAdmin/perfilAdmin.html';
            break;
    }
};
const obtenerclientes = () => listaclientes;

botonIngresar.addEventListener('click', validarRol);


botonIngresar.addEventListener('click', validar);