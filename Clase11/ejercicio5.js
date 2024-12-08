const prompt = require("prompt-sync")({ sigint: true }); 

//Encuentra los numeros pares entre dos valores
//Pide a usuario que ingrese 2 numeros enteros (inicio y fin)
let inicio = prompt("Ingrese un numero entero incial: ");
let fin = prompt("Ingrese un numero entero final: ");

//Si el inicial es mayor que el final, muestra mensaje indicando "valores invalidos"
parseFloat(inicio) < parseFloat(fin) ? console.log("Los valores son validos") : console.log("Los valores son invalidos");

//Mostrar todos los numeros pares que se encuentran entre esos dos valores, incluyendo los limites
//Usa ciclo for para recorrer los numeros entre el inicio y fin

for (let i = parseFloat(inicio); i <= parseFloat(fin); i++){
    if(i % 2 == 0) {
        console.log(i);
    }
}


