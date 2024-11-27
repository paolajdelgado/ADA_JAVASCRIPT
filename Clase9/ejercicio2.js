const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 2: 
//Define 2 constantes - Rango min y fango max
const RANGO_MINIMO = 36;
const RANGO_MAXIMO = 60;

//Pide al usuario que ingrese un  numero y verifica si esta dentro del rango definido.
let solicitud = prompt("Dime un numero del 1 al 100: ");
let resultado = "";

if (parseFloat(solicitud) >= RANGO_MINIMO && parseFloat(solicitud) <= RANGO_MAXIMO){
    resultado = "Esta dentro del rango de 36 y 60";
} else {
    resultado = "Esta fuera del rango de 36 y 60";
}

console.log(resultado);