
function openNav() {
    document.getElementById("barraLateral").style.width = "15%";
};

function closeNav() {
    document.getElementById("barraLateral").style.width = "0";
};

const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputSapellido = document.querySelector('#txt-sApellido');
const inputNumero = document.querySelector('#txt-numero');
const inputFecha = document.querySelector('#txt-fecha');
const inputCv = document.querySelector('#txt-cv');

const btnModificar = document.querySelector('#btn-modificar');

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
    if (inputSapellido.value == ''){
        error = true;
        document.querySelector('.Sapellido').classList.add('input-error');
    } else {
        document.querySelector('.sAppellido').classList.remove('input-error');
    }
    if (inputNumero.value == ''){
        error = true;
        document.querySelector('.numero').classList.add('input-error');
    } else {
        document.querySelector('.numero').classList.remove('input-error');
    }
    if (inputFecha.value == ''){
        error = true;
        document.querySelector('.fecha').classList.add('input-error');
    } else {
        document.querySelector('.fecha').classList.remove('input-error');
    }
    if (inputCv.value == ''){
        error = true;
        document.querySelector('.cv').classList.add('input-error');
    } else {
        document.querySelector('.cv').classList.remove('input-error');
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
            'title': 'Solicitud efectuada correctamente',
            'text': 'Gracias por confiar en nosotros',
            'confirmButtonText': 'Listo'
        });
    }
}

btnModificar.addEventListener('click', validar);