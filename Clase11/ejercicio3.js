const prompt = require("prompt-sync")({ sigint: true }); 

//Sabes contar?
//Pide al usuario que ingrese un numero positivo
let numero = prompt("Ingresa un numero positivo (>0): ");

//El programa debera contar desde 1 hasta ese nnumero e imprimir cada valor en la consola.
for (let i = 1; i <= parseFloat(numero); i++){
    console.log("Numero " + i);
}