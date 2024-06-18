const campoNombre = document.getElementsByName("nombre");
const campoEmail = document.getElementsByName("email");
const campoAsunto = document.getElementsByName("asunto");
const campoMensaje = document.getElementsByName("mensaje");


function validarContacto(){
    if (campoNombre.value.length <= 10) {
        alert("Ingresa tu nombre completo");
        return false;
    }

    let formatoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formatoEmail.test(campoEmail.value)){
        alert("Correo no válido");
        return false;
    }

    if (campoAsunto.value.length <= 10) {
        alert("Agrega un asunto");
        return false;
    }

    if (campoMensaje.value.length <=10) {
        alert("Mensaje muy corto");
        return false;
    }

    return true;
    
}

validarContacto();
