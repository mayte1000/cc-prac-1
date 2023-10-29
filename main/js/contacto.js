function validarForm() {

    var textNombre = document.getElementById('textnombre');
    if (textNombre.value == "") {
        alert('Ingrese un nombre de contacto');
        return false;
    }

    var textEmail = document.getElementById('textemail');
    var patronValidoMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!patronValidoMail.test(textEmail.value)) {
        alert('Ingrese una dirección de correo válida');
        return false;
    }

    var textComentario = document.getElementById('textcomentario');
    if (textComentario.value == "") {
        alert('Ingrese una consulta o comentario');
        return false;
    }

    sendEmail();
}


function sendEmail() {
    
  }