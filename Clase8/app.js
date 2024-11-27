const prompt = require("prompt-sync")({ sigint: true }); 
// const prompt = require('prompt-sync')();  // la otra forma

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);
