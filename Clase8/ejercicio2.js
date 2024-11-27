const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 2: Comparación de 3 números
// a) Pide al usuario tres números
let numero1 = prompt("Piensa en un numero y escribelo. ");
let numero2 = prompt("Piensa en otro numero y escribelo. ");
let numero3 = prompt("Piensa en otro numero y escribelo. ");

// b) Determina cual es el mayor de los tres
let comparacion = "";


if(parseFloat(numero1) > parseFloat(numero2)){
    comparacion = parseFloat(numero1);
} else if (parseFloat(numero3) > parseFloat(numero1)){
    comparacion = parseFloat(numero3);
} else if (parseFloat(numero3) > parseFloat (numero2)){
    comparacion = parseFloat(numero3);
}
else {comparacion = parseFloat(numero2);
}

// c) Muestra el numero mayor en la consola
console.log(parseFloat(comparacion));

