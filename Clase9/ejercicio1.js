const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 1:
//Declara 2 variables numericas y pide al usuario que ingrese 2 numeros.
let numero1 = prompt("Dime un numero: ");
let numero2 = prompt("Dime un numero distinto: ");

//Cual es mayor?
let mayor = "";

if(parseFloat(numero1) > parseFloat(numero2)){
    mayor = numero1;
} else {
    mayor = numero2;
}

console.log(`El numero mayor es ${mayor}`);

