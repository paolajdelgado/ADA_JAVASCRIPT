const prompt = require("prompt-sync")({ sigint: true }); 

//Par o impar?
//Pide un numero al usuario
let numero = prompt("Introduce un numero: ");

//Determinar si es par o impar. Muestra mensaje explicativo
if (parseFloat(numero) % 2 === 0){
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}