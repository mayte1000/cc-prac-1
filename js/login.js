function validarCuenta() {

    var usuario = document.getElementById('txtusuario').value;
    if (usuario == "") {
        alert('Ingrese un nombre de usuario');
        return false;
    }

    var clave = document.getElementById('txtpassword').value
    if (clave == "") {
        alert('Ingrese una contraseña');
        return false;
    }

    if (usuario != "user1" && usuario != "user3" && usuario != "user3") {
        alert('Nombre de usuario o clave incorrectos');
        return false;
    }

    if ((usuario == "user1" && clave != "clave1") ||
        (usuario == "user2" && clave != "clave2") ||
        (usuario == "user3" && clave != "clave3")) {
        alert('Nombre de usuario o clave incorrectos');
        return false;
    }

}
