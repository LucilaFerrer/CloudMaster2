{/* <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> */}

var form = document.getElementById("form-cambios");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var msjExito = ""

function chkFoto() {
    var valor = document.getElementById("input-img").value;
    console.log(valor);
    if (valor == "" || valor == null) {
        return false; //return false si no hay nada en el espacio
    }
    return true;
}

function chkNombre() {
    var valor = document.getElementById("input-nombre").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;
}

function chkPais() {
    var valor = document.getElementById("input-pais").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;
}

function chkDob() {
    var valor = document.getElementById("input-dob").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;
}

function chkGeneros() {
    var valor = document.getElementById("input-generos").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;
}

function chkPremios() {
    var valor = document.getElementById("input-premios").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;
}

function chkResenna() {
    var valor = document.getElementById("input-resenna").value;
    if (valor == "" || valor == null) {
        return false; 
    }
    return true;

}

function chkValores() {
    if (!chkFoto()) {
        msjExito += "Seleccione una foto \n "
    }

    if (!chkNombre()) {
        msjExito += "Introduzca un nombre válido \n "
    }

    if (!chkPais()) {
        msjExito += "Introduzca un país válido \n "
    }

    if (!chkDob()) {
        msjExito += "Introduzac una fecha de nacimiento válida \n "
    }

    if (!chkGeneros()) {
        msjExito += "Introduzca una lista de géneros válida \n "
    }

    if (!chkPremios()) {
        msjExito += "Introduzca una lista de premios válidas \n "
    }

    if (!chkResenna()) {
        msjExito += "Introduzca una reseña válida \n "
    }
}

function alertaValidacion () {
    chkValores();
    if (msjExito == "") {
        msjExito = "Cambios guardados con exito";
        //aqui eventualmente va la funcion para subir a la informacion a la base de datos
        swal("Cambios guardados", msjExito, "success");
        msjExito = "";
    }
    else {
        // alert("Por favor corrija los siguientes errores: \n" + msjExito);
        swal("Error", "Por favor corrija los siguientes errores: \n" + msjExito, "warning");
        msjExito = "";
    }
}