const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio:

//Declarar variables
let edad = 29;
let peso  = 70;

//Usar variables
let nombre_usuario = prompt("Ingrese su nombre: ");
let edad_usuario = prompt("Ingrese su edad: ");
let peso_usuario = prompt("Ingrese su peso (kg): ");

console.log(`Hola ${nombre_usuario}. Debido a que tienes ${edad_usuario} y pesas ${peso_usuario} kg, te recomendamos visitar nuestra sección "Salud" para que encuentres recomendaciones de alimentación y ejecicio según tu edad.`);

