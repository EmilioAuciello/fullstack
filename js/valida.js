document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("formulario")
        .addEventListener("submit", validarFormulario);
});




function validarFormulario(evento) {
    evento.preventDefault(); //evito que se envie el formulario
    //valido nombre 
    var nombre = document.getElementById("nombre").value;
    var mensaje = "";

    if (nombre.length == 0) {
        mensaje += "No has escrito nada en el nombre \n";

    }
    //valido apellido
    var apellido = document.getElementById("apellido").value;
    if (apellido.length == 0) {
        mensaje += "No has escrito nada en el apellido \n";

    }
    // valido dni
    var dni = document.getElementById("dni").value;
    if (dni.length == 0) {
        mensaje += "No has escrito nada en el DNI \n";


    }
    //valido que tenga hasta 8 caracteres el dni
    var re = /(^([0-9]{6,8})|^)$/; //dni minimo 6 numeros maximo 8 numeros
    if (!re.exec(dni)) {
        mensaje += "Dni no Valido \n";
    }
    //valido mail
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        mensaje += "No has escrito nada en el email \n";

    }
    // valido formato de mail
    var re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //valido mail nombre@dominio.com
    if (!re.exec(email)) {
        mensaje += "Email no valido \n";
    }
    //valido telefono  
    var telefono = document.getElementById("telefono").value;
    if (telefono.length == 0) {
        mensaje += "No has escrito nada en el telefono \n";

    }
    // minimo de 6 numeros para el telefono
    var re = /(^([0-9]{6,15})|^)$/; //telefono minimo 6 numeros maximo 15 numeros
    if (!re.exec(telefono)) {
        mensaje += "Telefono no Valido \n";
    }
    // selecciono opcion
   

    if (!validoradio()) mensaje += "No has seleccionado ninguna opcion";

    if (mensaje.length > 1) {
        alert(mensaje);
        return;
    }

    this.submit();
    alert("Formulario Enviado Correctamente");
}
function validoradio(){
    var radios = document.getElementsByName("tipo");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }
    return formValid;

}

function completoMonto() {
    var name = document.getElementsByName("tipo");

    for (i = 0; i < name.length; i++) {

        if (name[i].value == "basico" && name[i].checked) {
            document.getElementById("lBasico").innerHTML = " Plan Basico Valor $500";
            document.getElementById("lIntermedio").innerHTML = " Plan Intermedio";
            document.getElementById("lPremium").innerHTML = "Plan Premium";



        } else if (name[i].value == "intermedio" && name[i].checked) {

            document.getElementById("lIntermedio").innerHTML = " Plan Intermedio Valor $1000";
            document.getElementById("lBasico").innerHTML = " Plan Basico";
            document.getElementById("lPremium").innerHTML = "Plan Premium";


        }
        else if (name[i].value == "premium" && name[i].checked) {
            document.getElementById("lPremium").innerHTML = "Plan Premium Valor $1500";
            document.getElementById("lIntermedio").innerHTML = " Plan Intermedio";
            document.getElementById("lBasico").innerHTML = "Plan Basico";


        }


    }



};


