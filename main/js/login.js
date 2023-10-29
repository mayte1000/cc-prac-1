function ingresar()
{

let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if (user =="juan" && pass =="1234")
{
  window.location="index.html";
}
else
{
  alert("Datos Incorrectos");
}

}