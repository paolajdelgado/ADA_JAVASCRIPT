const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 9:
//Define una constante PI
let PI = 3.14159;

//Pide al usuario que ingrese el radio de un circulo
let radio = prompt("Ingrese el radio de un circulo (cm): ");

//Calcule el area y perimetro utilizando la constante de PI
let area = PI * (parseFloat(radio)*parseFloat(radio));
let perimetro = 2 * PI * parseFloat(radio);

console.log(`El area del circulo es ${area} cm y su perimetro es ${perimetro} cm`);