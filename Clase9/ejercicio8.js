const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio 8:
//Pide al usuario que ingrese las longitudes de los tres lados de un triangulo.
let lado1 = prompt("Ingresa la longitud de la base del triangulo: ");
let lado2 = prompt("Ingresa la longitud del lado izquierdo del triangulo: ");
let lado3 = prompt("Ingresa la longitud del lado derecho del triangulo: ");

//Determina que tipo de triangulo es
let tipo_triangulo = "";

if (parseFloat(lado1) == parseFloat(lado2) && parseFloat(lado2) == parseFloat (lado3)){
    tipo_triangulo = "Es un triangulo equilatero";
} else if (parseFloat (lado2) == parseFloat (lado3) & parseFloat (lado2) != parseFloat (lado1)){
    tipo_triangulo = "Es un triangulo isosceles";
} else {
    tipo_triangulo = "Es un triangulo escaleno"
}

console.log(tipo_triangulo);