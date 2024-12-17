const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio: Iguales a 10 pero menores a 1,000
//Dada una matriz, recorrer sus valores y sumar solo los numeros que esten por encima o sean iguales a 10 pero menores que 1000

//Generar la matriz
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

//Gernerar variable de suma
let suma =0;

//Recorrer la matriz
for (let fila = 0; fila < matriz.length; fila++){
    for(let columna = 0; columna < matriz[fila].length; columna++){
        if(matriz[fila][columna] >=10 && matriz[fila][columna] < 1000){
            let i= matriz[fila][columna];
            suma = suma + parseFloat(i);
        }
    }
}

console.log(suma);