


var miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos)


function recogeDatos(evento){
  
 evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2024 - fecha;
  var bienvenida = document.querySelector("#bienvenida"); //aqui eu pego a parte do forms
  var mensajeEdad;
  

  // Verifica se o nome e a data de nascimento estão vazios
  if (nombre === "" || fecha === "") {
    bienvenida.innerHTML = "<p>Por favor, preencha todos os campos.</p>";
    return; // Sai da função se algum campo estiver vazio
  }





  if(edad > 30){
    mensajeEdad = "abuelo!";
  } else if (edad < 30) {
    mensajeEdad = "jovenzuelo!!!!"
  } else {
    mensajeEdad = "No me lo creo!"
  }





  var mensaje = "<p> Hola, " + nombre + ", tienes " + edad + "años, " + mensajeEdad +"</p>"
  
  bienvenida.innerHTML = mensaje;
}















