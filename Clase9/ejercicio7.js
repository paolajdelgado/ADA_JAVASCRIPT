const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 7:
//Pide al usuario que ingrese su peso en kg y conviertelo a libras
let peso_kg = prompt("Ingrese su peso en kilogramos: ");
let peso_libras = parseFloat(peso_kg) * 2.20462;

//Muestra un resultado con el mensaje
console.log(`Su peso en libras es ${peso_libras}`);