function validarForm() {

    if (document.getElementById('textnombre').value == "") {
        alert('Ingrese un nombre de contacto');
        return false;
    }

    var patronValidoMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!patronValidoMail.test(document.getElementById('textemail').value)) {
        alert('Ingrese una dirección de correo válida');
        return false;
    }

    if (document.getElementById('textcomentario').value == "") {
        alert('Ingrese una consulta o comentario');
        return false;
    }

    sendEmail();
}


function sendEmail() {
    
  }