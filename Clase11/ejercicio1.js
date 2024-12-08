const prompt = require("prompt-sync")({ sigint: true }); 

//Positivo, negativo, cero

//Pide al usuario que escriba un numero cualquiera
let numero = prompt("Escribe un numero: ");
if (parseFloat(numero) < 0){
    console.log("Este numero es negativo");
} else if (parseFloat(numero) == 0){
    console.log("Este numero es cero");
} else {
    console.log("Este numero es positivo");
}
