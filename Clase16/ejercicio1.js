//Ejercicio> Crea un nuevo array con los cuadrados de los numeros

//Array inicial
let numeros = [2, 4, 6, 8];

//Objetivo: Crear una nueva lista donde cada numero de la lista original se haya transformado en su cuadrado.
const cuadradosNumeros= numeros.map(function(num){
    return num * num;

});

let numeros2 = cuadradosNumeros;

//Imprime la nueva lista
console.log(numeros2);