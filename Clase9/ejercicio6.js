const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 6:
//Pide al usuario que ingrese su edad
let edad = prompt("Ingresa tu edad: ");

//Verifica si es mayor o menor de edad
let verificacion = "";

if (parseFloat(edad) >= 18){
    verificacion = "Usted es mayor de edad. Tiene permitido el ingreso al sitio.";
} else {
    verificacion = "¡Alerta! Un menor de edad esta intentado ingresar al sitio.";
}

console.log (verificacion);
