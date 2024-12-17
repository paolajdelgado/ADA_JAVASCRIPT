const prompt = require("prompt-sync")({ sigint: true }); 

//EJERCICIO CON WHILE
//Pide al usuario que ingrese numeros hasta que ponga uno negativo


let numero = 0
let suma = 0

while(parseFloat(numero) >= 0){
    numero = prompt('Ingrese un numero: ');
    suma = parseFloat(suma) + parseFloat(numero);
} 

console.log(`Terminaron los intentos. La suma de tus variables es: ${suma}`);


