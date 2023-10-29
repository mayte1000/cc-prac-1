//function ingresar()
//{

//let user=document.getElementById("usuario").value;
//let pass=document.getElementById("clave").value;

//if (user =="juan" && pass =="1234")
//{
 // window.location="../pagina/index.html";
//}
//else
//{
//  alert("Datos Incorrectos");
//}

//}



var nombre = document.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
  console.log('Enviando Formulario...');

var mensajesError = [];
if (nombre.value === null || nombre.value === ""){
  mensajesError.push('Ingresa tu nombre');
}
if (password.value === null || password.value === ''){
  mensajesError.push('Ingresa tu password');
}

error.innerHTML = mensajesError.join(' , ');

  return false;
}


