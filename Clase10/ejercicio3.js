const prompt = require("prompt-sync")({ sigint: true }); 

//Constantes - Validación de edad
const edad_minima = 18;
const edad_maxima = 99;
let edad_usuario = prompt("Ingrese su edad: ");
let validacion = "";


if (parseInt(edad_usuario) >= edad_minima && (parseInt(edad_usuario) <= edad_maxima)){
    validacion = "La edad del usuario esta dentro del rango permitido";
} else {
    validacion = "La edad del usuario no esta dentro del rango permitido";
}

console.log(validacion);