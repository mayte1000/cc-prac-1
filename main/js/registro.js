document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const nombre = document.getElementById('txtnombre');
    const usuario = document.getElementById('txtusuario');
    const password = document.getElementById('txtpassword');
    const mensajeError = document.getElementById('formulario__mensaje');
    const btnRegistrar = document.querySelector('a[type="submit"]'); // Cambié el selector para obtener el botón "Registrar".

    const expresiones = {
        usuario: /^[a-zA-Z0-9_]+$/, // Acepta letras, números y guion bajo
        nombre: /^[a-zA-Z\s]+$/, // Acepta letras y espacios
        password: /^.{4,12}$/ // Acepta cualquier carácter y longitud de 4 a 12 caracteres
    }

    btnRegistrar.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir el envío del formulario por defecto para realizar la validación manualmente.

        if (!expresiones.usuario.test(usuario.value)) {
            mostrarError("El usuario debe tener solo letras, números y guion bajo.", 'grupo__usuario');
        } else {
            ocultarError('grupo__usuario');
        }

        if (!expresiones.nombre.test(nombre.value)) {
            mostrarError("El nombre debe contener solo letras y espacios.", 'grupo__nombre');
        } else {
            ocultarError('grupo__nombre');
        }

        if (!expresiones.password.test(password.value)) {
            mostrarError("La contraseña debe tener de 4 a 12 caracteres.", 'grupo__password');
        } else {
            ocultarError('grupo__password');
        }
    });

    function mostrarError(mensaje, elementoId) {
        const grupo = document.getElementById(elementoId);
        const errorMensaje = grupo.querySelector('p.formulario__input-error');
        errorMensaje.textContent = mensaje;
        errorMensaje.style.opacity = '1';
        grupo.classList.add('formulario__grupo-incorrecto');
        console.log("funciona");
    }

    function ocultarError(elementoId) {
        const grupo = document.getElementById(elementoId);
        grupo.classList.remove('formulario__grupo-incorrecto');
        const errorMensaje = grupo.querySelector('p.formulario__input-error');
        errorMensaje.style.opacity = '0';
        console.log("funciona");
    }
});

