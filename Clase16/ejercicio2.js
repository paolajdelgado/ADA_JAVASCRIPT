//Ejercicio: filtra los numeros pares de una lista

//Lista inicial
let numeros = [1, 2, 3, 4, 5, 6];

//Separa y guardar unicamente los numeros pares en una nueva lista

const numerosPares = numeros.filter(function(num){
    return num % 2 == 0;
})

let numerosNuevo = numerosPares;

//Muestra en consola la nueva lista
console.log(numerosNuevo);