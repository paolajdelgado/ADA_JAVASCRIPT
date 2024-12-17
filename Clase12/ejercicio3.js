const prompt = require("prompt-sync")({ sigint: true }); 

//Ejercicio: Contar la cantidad de numeros impares que hay desde el numero 0 hasta un numero X. 

//Paso1: Solicitar al usuario que ingrese un numero X
let numero_usuario = prompt("Ingrese un numero: ");

//Paso 2: Inicializar una variables para contar numero impares
let numeros_impares = 0;


//Paso 3: Utilizar un CICLO FOR para recorrer los numeros desde el 0 hasta la X
for (let i = 0; i <= parseFloat(numero_usuario); i++){ 
    if (i % 2 !== 0){
      numeros_impares++;
    }
}

//Paso 6: Imprimir en la consola la cantidad de numero impares encontrados
console.log(`La cantidad de numero impares desde 0 hasta ${numero_usuario} (inclusive) es: ${numeros_impares}`);