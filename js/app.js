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
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
  console.log('Enviando email...');

var mensajesError = [];
if (email.value === null || email.value === ""){
  mensajesError.push('Ingresa tu email');
}

error.innerHTML = mensajesError.join(' , ');

  return false;
}


