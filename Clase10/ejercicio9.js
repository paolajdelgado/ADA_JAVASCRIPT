const prompt = require("prompt-sync")({ sigint: true });

//Calculo IMC

let peso = prompt("Ingrese su peso (kg): ");
let altura = prompt("Ingrese su altura (m): ");

let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

console.log(imc);