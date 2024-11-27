const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 4:
//Declara una vairables nombre y pide al usuario que ingrese su nombre
let mi_nombre = "Paola";
let nombre_usuario = prompt("Ingresa tu nombre: ");
let verificacion = "";

//Verifica si el nombre ingresado es igual al tuyo
if (nombre_usuario == mi_nombre){
    verificacion = "Nuestros nombres son iguales";
} else {
    verificacion = "Nuestros nombres son diferentes";
}

console.log(verificacion);