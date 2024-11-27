const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 5:
//Pide al usuario 3 numeros
let numero1 = prompt("Dime un numero: ");
let numero2 = prompt("Dime un numero distinto al anterior: ");
let numero3 = prompt("Dime un numero a los anteriores: ");
let mayor = "";

//Determina cual es el mayor
if(parseFloat(numero1) > parseFloat(numero2)){
    mayor = parseFloat(numero1);
} else if (parseFloat(numero3) > parseFloat(numero1)){
    mayor = parseFloat(numero3);
} else if (parseFloat(numero3) > parseFloat (numero2)){
    mayor = parseFloat(numero3);
}
else {mayor = parseFloat(numero2);
}

console.log(`El numero mayor es ${mayor}`);