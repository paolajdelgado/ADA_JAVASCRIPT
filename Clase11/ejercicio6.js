const prompt = require("prompt-sync")({ sigint: true }); 

//Tabla de multiplicar
//Pide al usuario un numero
let numero = prompt("Ingrese un numero: ");

//Imprime su tabla de multiplicar del 1 hasta el 10. CICLO FOR
for (let multiplicacion = 1; multiplicacion <= 10; multiplicacion++){
    console.log(`${parseFloat(numero)} x ${multiplicacion} = ${parseFloat(numero)*multiplicacion}`);
}