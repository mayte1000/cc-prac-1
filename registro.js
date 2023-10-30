
  document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const usuario = document.getElementById("usuario");
    const password = document.getElementById("password");
    const mensajeExito = document.getElementById("formulario__mensaje-exito");
  
    formulario.addEventListener("submit", function(event) {
      let tieneErrores = false; // Variable para rastrear si hay errores
  
      // Validación del campo Nombre
      if (nombre.value.trim() === "") {
        event.preventDefault(); // Evita que se envíe el formulario
        mostrarError("nombre", "El nombre es obligatorio");
        tieneErrores = true;
      } else {
        ocultarError("nombre");
      }
  
      // Validación del campo Usuario
      const usuarioRegex = /^[A-Za-z0-9_]{4,}$/;
      if (!usuarioRegex.test(usuario.value)) {
        event.preventDefault();
        mostrarError("usuario", "El usuario debe tener mínimo 4 caracteres y solo se admiten números, letras y guion bajo.");
        tieneErrores = true;
      } else {
        ocultarError("usuario");
      }
  
      // Validación del campo Contraseña
      if (password.value.length < 4 || password.value.length > 12) {
        event.preventDefault();
        mostrarError("password", "La contraseña debe ser de 4 a 12 caracteres.");
        tieneErrores = true;
      } else {
        ocultarError("password");
      }
  
      // Mostrar el mensaje de éxito solo si no hay errores
      if (!tieneErrores) {
        mensajeExito.style.display = "block";
      } else {
        mensajeExito.style.display = "none";
      }
    });
  
    function mostrarError(campo, mensaje) {
      const grupoCampo = document.getElementById(`grupo__${campo}`);
      const errorCampo = document.getElementById(`error-${campo}`);
      grupoCampo.classList.add("error");
      errorCampo.textContent = mensaje;
    }
  
    function ocultarError(campo) {
      const grupoCampo = document.getElementById(`grupo__${campo}`);
      grupoCampo.classList.remove("error");
    }
  });