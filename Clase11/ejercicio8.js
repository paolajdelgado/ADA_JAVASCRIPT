const prompt = require("prompt-sync")({ sigint: true }); 

//Pide al usuario un numero entero positivo
let numero = prompt("Ingresa un numero entero positivo: ");

//encuentra los multiplos de un numero
for (let multiplos = 1; multiplos <= 100; multiplos ++) {
    console.log(multiplos* parseInt(numero));
}