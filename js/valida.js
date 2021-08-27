document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault(); //evito que se envie el formulario
  //valido nombre 
  var nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("No has escrito nada en el nombre");
    return;
  }
  //valido apellido
  var apellido = document.getElementById("apellido").value;
  if (apellido.length == 0) {
    alert("No has escrito nada en el apellido");
    return;
  }
  // valido dni
  var dni = document.getElementById("dni").value;
  if (dni.length == 0) {
    alert("No has escrito nada en el DNI");
    return;

  }
  //valido que tenga hasta 8 caracteres el dni
  var re = /(^([0-9]{6,8})|^)$/; //dni minimo 6 numeros maximo 8 numeros
  if (!re.exec(dni)){
      alert("Dni no Valido");
  }
  //valido mail
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    alert("No has escrito nada en el email");
    return;
  }
// valido formato de mail
  var re =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //valido mail nombre@dominio.com
  if (!re.exec(email)) {
    alert("email no valido");
  }
  //valido telefono  
  var telefono = document.getElementById("telefono").value;
  if (telefono.length == 0) {
    alert("No has escrito nada en el telefono");

    return;
  }
  // minimo de 6 numeros para el telefono
  var re = /(^([0-9]{6,15})|^)$/; //telefono minimo 6 numeros maximo 15 numeros
  if (!re.exec(telefono)){
      alert("Telefono no Valido");
  }
  this.submit();
}

function validaDatos() {
   var valor= document.getElementById('tipo').value
   document.writeln(valor);
   if( valor == null || valor.length == 0) {
    alert('Error, rellena el campo nombre');

    Document.writeln("CHUPALA");
  return false;
  }
    
}
