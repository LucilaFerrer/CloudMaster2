function openNav() {
    document.getElementById("barraLateral").style.width = "15%";
};

function closeNav() {
    document.getElementById("barraLateral").style.width = "0";
};

const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputCorreo = document.querySelector('#txt-correo');
const inputId = document.querySelector('#txt-id');
const inputUbicacion = document.querySelector('#txt-ubicacion');
const inputContra = document.querySelector('#txt-contraA');
const inputNcontra = document.querySelector('#txt-Ncontra');
const inputCcontra = document.querySelector('#txt-Ccontra');

const btnGuardar = document.querySelector('#btn-guardar');

const validar = () => {
    let error = false;
    if (inputNombre.value == ''){
        error = true;
        document.querySelector('.nombre').classList.add('input-error');
    } else {
        document.querySelector('.nombre').classList.remove('input-error');
    }
    if (inputApellido.value == ''){
        error = true;
        document.querySelector('.apellido').classList.add('input-error');
    } else {
        document.querySelector('.apellido').classList.remove('input-error');
    }
    if (inputCorreo.value == ''){
        error = true;
        document.querySelector('.correo').classList.add('input-error');
    } else {
        document.querySelector('.correo').classList.remove('input-error');
    }
    if (inputId.value == ''){
        error = true;
        document.querySelector('.id').classList.add('input-error');
    } else {
        document.querySelector('.id').classList.remove('input-error');
    }
    if (inputUbicacion.value == ''){
        error = true;
        document.querySelector('.ubicacion').classList.add('input-error');
    } else {
        document.querySelector('.ubicacion').classList.remove('input-error');
    }
    if (inputContra.value == ''){
        error = true;
        document.querySelector('.contraA').classList.add('input-error');
    } else {
        document.querySelector('.contraA').classList.remove('input-error');
    }
    if (inputNcontra.value == ''){
        error = true;
        document.querySelector('.Ncontra').classList.add('input-error');
    } else {
        document.querySelector('.Ncontra').classList.remove('input-error');
    }
    if (inputCcontra.value == ''){
        error = true;
        document.querySelector('.Ccontra').classList.add('input-error');
    } else {
        document.querySelector('.Ccontra').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se a podido guardar los datos',
            'text': 'Por favor revise que todo fue agregado correctamente',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos fueron guardados correctamente',
            'text': 'Gracias por confiar en nosotros',
            'confirmButtonText': 'Listo'
        });
    }
}

btnGuardar.addEventListener('click', validar);