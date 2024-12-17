const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio Matriz 5x5
//Paso 1: Declara una variable que contenga una matriz 5x5 de puros numeros enteros y positivos
let matriz = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];


// Escribe un algoritmo para sumar todos los numeros de la matriz
//Gernerar variable de suma
let suma =0;

//Recorrer la matriz
for (let fila = 0; fila < matriz.length; fila++){
    for(let columna = 0; columna < matriz[fila].length; columna++){
        let i= matriz[fila][columna];
        suma = suma + parseFloat(i);
        
    }
}

console.log(suma);