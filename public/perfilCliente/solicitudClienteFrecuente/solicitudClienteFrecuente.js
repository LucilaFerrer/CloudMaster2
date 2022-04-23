
function openNav() {
    document.getElementById("barraLateral").style.width = "15%";
};

function closeNav() {
    document.getElementById("barraLateral").style.width = "0";
};


const inputUsuario = document.querySelector('#txt-usuario');
const inputNombre = document.querySelector('#txt-nombre');
const inputComprado = document.querySelector('#txt-comprado');

const btnSolicitar = document.querySelector('#btn-solicitar');

const validar = () => {
    let error = false;
    if (inputUsuario.value == ''){
        error = true;
        document.querySelector('.usuario').classList.add('input-error');
    } else {
        document.querySelector('.usuario').classList.remove('input-error');
    }
    if (inputNombre.value == ''){
        error = true;
        document.querySelector('.nombre').classList.add('input-error');
    } else {
        document.querySelector('.nombre').classList.remove('input-error');
    }
    if (inputComprado.value == ''){
        error = true;
        document.querySelector('.comprado').classList.add('input-error');
    } else {
        document.querySelector('.comprado').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se a podido completar la solicitud',
            'text': 'Por favor revise que todo fue agregado correctamente',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Solicitud enviada correctamente',
            'text': 'Gracias por confiar en nosotros',
            'confirmButtonText': 'Listo'
        });
    }
}

btnSolicitar.addEventListener('click', validar);

